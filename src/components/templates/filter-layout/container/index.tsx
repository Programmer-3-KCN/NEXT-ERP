"use client";

import {
  createContext,
  DetailedHTMLProps,
  Dispatch,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { twm } from "@/src/libs";

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

interface I
  extends DetailedHTMLProps<Omit<HTMLAttributes<HTMLDivElement>, "children" | "className" | "id">, HTMLDivElement>, Readonly<PropsWithChildren> {
  className?: string;
}

export const FilterLayoutContainer: FC<I> = ({ children, className, ...props }): ReactElement => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  return (
    <FilterLayoutContext.Provider value={{ isFilterOpen: isFilterOpen, setIsFilterOpen: setIsFilterOpen }}>
      <div className={twm("flex flex-1 overflow-hidden", className)} id="dialog-target" {...props}>
        {children}
      </div>
    </FilterLayoutContext.Provider>
  );
};
