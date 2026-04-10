"use client";

import { X } from "lucide-react";
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, ReactElement } from "react";

import { twm } from "@/src/libs";

import { useFilterLayoutContext } from "../..";

interface I extends DetailedHTMLProps<Omit<HTMLAttributes<HTMLElement>, "children" | "className">, HTMLElement>, Readonly<PropsWithChildren> {
  className?: {
    button?: string;
    container?: string;
    content?: string;
    header?: string;
  };
}

export const FilterLayoutAside: FC<I> = ({ children, className, ...props }): ReactElement => {
  const { isFilterOpen, setIsFilterOpen } = useFilterLayoutContext();

  return (
    <aside className={twm("w-75 shrink-0 flex-col py-1 pl-1", isFilterOpen ? "flex" : "hidden", className?.container)} {...props}>
      <div className={twm("flex items-center justify-between rounded-t-md bg-blue-500 px-3 py-1 font-semibold text-white", className?.header)}>
        <span>Filters</span>
        <button className={twm("cursor-pointer active:scale-95", className?.button)} onClick={() => setIsFilterOpen(false)}>
          <X size={20} />
        </button>
      </div>

      <div className={twm("flex flex-1 flex-col overflow-hidden rounded-b-md border border-blue-500 bg-white", className?.content)}>{children}</div>
    </aside>
  );
};
