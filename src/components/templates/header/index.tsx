"use client";

import { ChevronDown, ChevronRight, CircleUser, LogOut, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement, useEffect, useRef, useState } from "react";

import { useWindowSize } from "@/src/hooks";
import { MENU_DATA } from "@/src/libs";

import { Button, ButtonTWM } from "../../elements";

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
  const [openDesktopMenu, setOpenDesktopMenu] = useState<null | string>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<null | string>(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<null | string>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { height: viewportHeight, width: viewportWidth } = useWindowSize();
  const isCompactHeaderMode = viewportWidth <= 1490 || viewportHeight <= 885;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (!(event.target instanceof Node) || !menuRef.current) {
        return;
      }

      if (!menuRef.current.contains(event.target)) {
        setOpenDesktopMenu(null);
        setIsMobileMenuOpen(false);
        setOpenMobileSection(null);
        setOpenMobileSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenDesktopMenu = (label: string): void => {
    setOpenDesktopMenu(label);
  };

  const handleCloseDesktopMenu = (): void => {
    setOpenDesktopMenu(null);
  };

  const handleCloseAllMenus = (): void => {
    setOpenDesktopMenu(null);
    setIsMobileMenuOpen(false);
    setOpenMobileSection(null);
    setOpenMobileSubMenu(null);
  };

  const handleToggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prevState) => {
      if (prevState) {
        setOpenMobileSection(null);
        setOpenMobileSubMenu(null);
      }

      return !prevState;
    });
  };

  const handleToggleMobileSection = (label: string): void => {
    setOpenMobileSection((prevState) => (prevState === label ? null : label));
    setOpenMobileSubMenu(null);
  };

  const handleToggleMobileSubMenu = (label: string): void => {
    setOpenMobileSubMenu((prevState) => (prevState === label ? null : label));
  };

  return (
    <header className="flex h-16 w-full shrink-0 items-center justify-between gap-5 border-b border-gray-300 bg-white px-5">
      <div className="flex items-center gap-3">
        <Image alt="NEXT ERP" className="-mb-0.5" height={30} src="/assets/images/logos/NEXT-ERP.png" width={30} />

        <div className="relative" ref={menuRef}>
          <nav className={isCompactHeaderMode ? "hidden" : "flex flex-wrap items-center"}>
            {MENU_DATA.map((dt, index) => {
              const isOpen = openDesktopMenu === dt.label;
              const isLastDesktopMenu = index === MENU_DATA.length - 1;
              const isSecondLastDesktopMenu = index === MENU_DATA.length - 2;
              const nestedMenuPositionClass = isLastDesktopMenu
                ? "left-full min-[1491px]:max-[1630px]:right-full min-[1491px]:max-[1630px]:left-auto"
                : isSecondLastDesktopMenu
                  ? "left-full min-[1491px]:max-[1500px]:right-full min-[1491px]:max-[1500px]:left-auto"
                  : "left-full";

              return (
                <div className="relative" key={dt.label} onMouseEnter={() => handleOpenDesktopMenu(dt.label)} onMouseLeave={handleCloseDesktopMenu}>
                  <Button
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                    className={`cursor-default rounded-md px-3 py-2 ${isOpen ? "bg-blue-50 text-blue-600" : ""}`}
                    color="black-blue"
                    onClick={() => handleOpenDesktopMenu(dt.label)}
                    size="sm"
                    variant="ghost"
                  >
                    <dt.icon size={16} />
                    <span>{dt.label}</span>
                    <ChevronDown
                      className={isOpen ? "rotate-180 transition-transform duration-100" : "transition-transform duration-100"}
                      size={14}
                    />
                  </Button>

                  {isOpen ? (
                    <div className="absolute top-full left-0 z-20 min-w-80 pt-1">
                      <div className="flex flex-col gap-1 rounded-md border bg-white p-2 shadow-lg">
                        {dt.subItems.map((subItem) => {
                          const hasChildren = hasNestedItems(subItem);
                          const subItemLabel = hasChildren ? subItem.label : subItem;

                          return (
                            <div className="group relative" key={subItemLabel}>
                              {hasChildren ? (
                                <Button
                                  className="w-full cursor-default group-hover:bg-blue-50 group-hover:text-blue-600"
                                  color="black-blue"
                                  size="sm"
                                  variant="ghost"
                                >
                                  <span>{subItemLabel}</span>
                                  <ChevronRight size={14} />
                                </Button>
                              ) : (
                                <Link
                                  className={ButtonTWM({
                                    color: "black-blue",
                                    size: "sm",
                                    variant: "ghost",
                                  })}
                                  href={formatMenuHref(dt.label, subItemLabel)}
                                  onClick={handleCloseAllMenus}
                                >
                                  {subItemLabel}
                                </Link>
                              )}

                              {hasChildren ? (
                                <div
                                  className={`invisible absolute top-0 z-30 overflow-hidden rounded-md border bg-white p-2 opacity-0 shadow-lg group-hover:visible group-hover:opacity-100 ${nestedMenuPositionClass}`}
                                >
                                  <div className="flex max-h-96 min-w-64 flex-col gap-1 overflow-y-auto">
                                    {subItem.children.map((childItem) => (
                                      <Link
                                        className={ButtonTWM({
                                          color: "black-blue",
                                          size: "sm",
                                          variant: "ghost",
                                        })}
                                        href={formatMenuHref(dt.label, subItemLabel, childItem)}
                                        key={childItem}
                                        onClick={handleCloseAllMenus}
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

          <div className={isCompactHeaderMode ? "block" : "hidden"}>
            <Button
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="min-w-0 rounded-md border border-gray-300 px-3 py-2"
              color="black-blue"
              onClick={handleToggleMobileMenu}
              size="sm"
              variant="semi"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>

            {isMobileMenuOpen ? (
              <div className="absolute top-full left-0 z-30 mt-1 w-[min(24rem,calc(100vw-2.5rem))] rounded-md border bg-white p-2 shadow-lg">
                <div className="flex max-h-[70vh] flex-col gap-2 overflow-y-auto">
                  {MENU_DATA.map((dt) => {
                    const isSectionOpen = openMobileSection === dt.label;

                    return (
                      <div className="rounded-md border border-gray-200 p-1" key={dt.label}>
                        <Button
                          aria-expanded={isSectionOpen}
                          className={`w-full justify-between rounded-md px-3 py-2 ${isSectionOpen ? "bg-blue-50 text-blue-600" : ""}`}
                          color="black-blue"
                          onClick={() => handleToggleMobileSection(dt.label)}
                          size="sm"
                          variant="ghost"
                        >
                          <span className="flex items-center gap-2">
                            <dt.icon size={16} />
                            <span>{dt.label}</span>
                          </span>
                          <ChevronDown
                            className={isSectionOpen ? "rotate-180 transition-transform duration-100" : "transition-transform duration-100"}
                            size={14}
                          />
                        </Button>

                        {isSectionOpen ? (
                          <div className="flex flex-col gap-1 px-1 pt-2 pb-1">
                            {dt.subItems.map((subItem) => {
                              const hasChildren = hasNestedItems(subItem);
                              const subItemLabel = hasChildren ? subItem.label : subItem;
                              const isSubMenuOpen = openMobileSubMenu === `${dt.label}-${subItemLabel}`;

                              return hasChildren ? (
                                <div className="rounded-md bg-gray-50 p-1" key={subItemLabel}>
                                  <Button
                                    aria-expanded={isSubMenuOpen}
                                    className={`w-full justify-between rounded-md px-3 py-2 ${isSubMenuOpen ? "bg-blue-50 text-blue-600" : ""}`}
                                    color="black-blue"
                                    onClick={() => handleToggleMobileSubMenu(`${dt.label}-${subItemLabel}`)}
                                    size="sm"
                                    variant="ghost"
                                  >
                                    <span>{subItemLabel}</span>
                                    <ChevronRight
                                      className={isSubMenuOpen ? "rotate-90 transition-transform duration-100" : "transition-transform duration-100"}
                                      size={14}
                                    />
                                  </Button>

                                  {isSubMenuOpen ? (
                                    <div className="flex flex-col gap-1 px-2 pt-2 pb-1">
                                      {subItem.children.map((childItem) => (
                                        <Link
                                          className={ButtonTWM({
                                            className: "w-full justify-start px-3 py-2",
                                            color: "black-blue",
                                            size: "sm",
                                            variant: "ghost",
                                          })}
                                          href={formatMenuHref(dt.label, subItemLabel, childItem)}
                                          key={childItem}
                                          onClick={handleCloseAllMenus}
                                        >
                                          {childItem}
                                        </Link>
                                      ))}
                                    </div>
                                  ) : null}
                                </div>
                              ) : (
                                <Link
                                  className={ButtonTWM({
                                    className: "w-full justify-start px-3 py-2",
                                    color: "black-blue",
                                    size: "sm",
                                    variant: "ghost",
                                  })}
                                  href={formatMenuHref(dt.label, subItemLabel)}
                                  key={subItemLabel}
                                  onClick={handleCloseAllMenus}
                                >
                                  {subItemLabel}
                                </Link>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex gap-1">
        <div className="flex items-center gap-3 rounded-md border border-gray-300 bg-blue-50 px-2">
          <div className="flex size-9 items-center justify-center rounded-full bg-blue-500 text-white">
            <CircleUser size={30} />
          </div>
          <div className="flex flex-col leading-tight max-[640px]:hidden">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">ROLE</span>
            <span className="text-sm font-semibold text-black">Administrator</span>
          </div>
          <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-600 max-[480px]:hidden">999</span>
        </div>

        <Button className="min-h-full min-w-0 px-3 py-2" color="red" size="md" variant="semi">
          <LogOut size={16} />
        </Button>
      </div>
    </header>
  );
};
