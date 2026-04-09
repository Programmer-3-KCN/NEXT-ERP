"use client";

import { ChevronDown, ChevronRight, CircleUser, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement, useEffect, useRef, useState } from "react";

import { MENU_DATA } from "@/src/libs";

interface ISubItemChildren {
  children: string[];
  label: string;
}

const hasNestedItems = (item: ISubItemChildren | string): item is ISubItemChildren => typeof item !== "string";

const formatMenuHref = (...segments: string[]): string => {
  const formattedSegments = segments.map((segment) =>
    segment
      .toLowerCase()
      .replace(/\s*\([^)]*\)/g, "")
      .replace(/&/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, ""),
  );

  return `/${formattedSegments.join("/")}`;
};

export const Header: FC = (): ReactElement => {
  const [openMenu, setOpenMenu] = useState<null | string>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (!(event.target instanceof Node) || !menuRef.current) {
        return;
      }

      if (!menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenMenu = (label: string): void => {
    setOpenMenu(label);
  };

  const handleCloseMenu = (): void => {
    setOpenMenu(null);
  };

  return (
    <header className="flex h-16 w-full shrink-0 items-center justify-between gap-5 bg-white px-5">
      <div className="flex items-center gap-3">
        <Image alt="NEXT ERP" height={30} src="/assets/images/logos/NEXT-ERP.png" width={30} />

        <nav className="flex flex-wrap items-center" ref={menuRef}>
          {MENU_DATA.map((dt) => {
            const isOpen = openMenu === dt.label;

            return (
              <div className="relative" key={dt.label} onMouseEnter={() => handleOpenMenu(dt.label)} onMouseLeave={handleCloseMenu}>
                <button
                  aria-expanded={isOpen}
                  aria-haspopup="menu"
                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition duration-100 hover:bg-blue-50 hover:text-blue-600 ${isOpen ? "bg-blue-50 text-blue-600" : ""}`}
                  onClick={() => handleOpenMenu(dt.label)}
                  type="button"
                >
                  <dt.icon size={16} />
                  <span>{dt.label}</span>
                  <ChevronDown className={isOpen ? "rotate-180 transition-transform duration-100" : "transition-transform duration-100"} size={14} />
                </button>

                {isOpen ? (
                  <div className="absolute top-full left-0 z-20 min-w-80 pt-2">
                    <div className="flex flex-col gap-1 rounded-md border bg-white p-2 shadow-lg">
                      {dt.subItems.map((subItem) => {
                        const hasChildren = hasNestedItems(subItem);
                        const subItemLabel = hasChildren ? subItem.label : subItem;

                        return (
                          <div className="group relative" key={subItemLabel}>
                            {hasChildren ? (
                              <button
                                className="flex w-full items-center justify-between rounded-md px-2 py-1 text-left text-sm whitespace-nowrap transition duration-100 group-hover:bg-blue-50 group-hover:text-blue-600"
                                type="button"
                              >
                                <span>{subItemLabel}</span>
                                {hasChildren ? <ChevronRight size={14} /> : null}
                              </button>
                            ) : (
                              <Link
                                className="flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-1 text-left text-sm whitespace-nowrap transition duration-100 hover:bg-blue-50 hover:text-blue-600"
                                href={formatMenuHref(dt.label, subItemLabel)}
                              >
                                {subItemLabel}
                              </Link>
                            )}

                            {hasChildren ? (
                              <div className="invisible absolute top-0 left-full z-30 overflow-hidden rounded-md border bg-white p-2 pl-2 opacity-0 shadow-lg group-hover:visible group-hover:opacity-100">
                                <div className="flex max-h-96 min-w-64 flex-col gap-1 overflow-y-auto">
                                  {subItem.children.map((childItem) => (
                                    <Link
                                      className="block cursor-pointer rounded-md px-2 py-1 text-left text-sm whitespace-nowrap transition duration-100 hover:bg-blue-50 hover:text-blue-600"
                                      href={formatMenuHref(dt.label, subItemLabel, childItem)}
                                      key={childItem}
                                    >
                                      {childItem}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
      </div>

      <div className="flex gap-1">
        <div className="flex items-center gap-3 rounded-md border bg-slate-50 px-2 py-1">
          <div className="flex size-9 items-center justify-center rounded-full bg-blue-500 text-white">
            <CircleUser size={30} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">Role</span>
            <span className="text-sm font-semibold text-black">Administrator</span>
          </div>
          <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-600">999</span>
        </div>

        <button className="flex cursor-pointer items-center rounded-md border border-red-200 bg-red-50 px-3 py-2 text-red-500 hover:bg-red-100 active:scale-95">
          <LogOut size={16} />
        </button>
      </div>
    </header>
  );
};
