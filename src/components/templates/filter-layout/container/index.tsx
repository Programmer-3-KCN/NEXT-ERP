"use client";

import { createContext, Dispatch, FC, PropsWithChildren, ReactElement, SetStateAction, useContext, useState } from "react";

type TContext = Readonly<{
  isFilterOpen: boolean;
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>;
}>;

const FilterLayoutContext = createContext<null | TContext>(null);

export const useFilterLayoutContext = (): TContext => {
  const context = useContext(FilterLayoutContext);

  if (!context) {
    throw new Error("useFilterLayoutContext must be used within FilterLayoutContainer");
  }

  return context;
};

type T = Readonly<PropsWithChildren>;

export const FilterLayoutContainer: FC<T> = (props): ReactElement => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  return (
    <FilterLayoutContext.Provider value={{ isFilterOpen: isFilterOpen, setIsFilterOpen: setIsFilterOpen }}>
      <div className="flex flex-1 overflow-hidden">{props.children}</div>
    </FilterLayoutContext.Provider>
  );
};
