"use client";

import { X } from "lucide-react";
import { FC, PropsWithChildren, ReactElement } from "react";

import { useFilterLayoutContext } from "../..";

type T = Readonly<PropsWithChildren>;

export const FilterLayoutAside: FC<T> = (props): ReactElement => {
  const { isFilterOpen, setIsFilterOpen } = useFilterLayoutContext();

  return (
    <aside className={`w-[328px] shrink-0 flex-col p-1 ${isFilterOpen ? "flex" : "hidden"}`}>
      <div className="flex items-center justify-between rounded-t-md bg-blue-500 px-3 py-1 font-semibold text-white">
        <span>Filters</span>
        <button aria-label="Toggle filters" className="cursor-pointer active:scale-95" onClick={() => setIsFilterOpen(false)} type="button">
          <X size={20} />
        </button>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden rounded-b-md border border-blue-500 bg-white">{props.children}</div>
    </aside>
  );
};
