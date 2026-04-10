import { DetailedHTMLProps, FC, FieldsetHTMLAttributes, PropsWithChildren, ReactElement, ReactNode } from "react";

import { twm } from "@/src/libs";

import { FilterLayoutAsideInput } from "../input";

interface I
  extends DetailedHTMLProps<Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, "children" | "className">, HTMLFieldSetElement>, PropsWithChildren {
  className?: {
    container?: string;
    input?: string;
    legend?: string;
  };
  label: ReactNode;
}

export const FilterLayoutAsideLegend: FC<I> = ({ children, className, label, ...props }): ReactElement => (
  <fieldset className={twm("border border-gray-300 px-2 pb-2", className?.container)} {...props}>
    <legend className={twm("px-2 text-sm font-semibold", className?.legend)}>{label}</legend>
    <FilterLayoutAsideInput className={className?.input}>{children}</FilterLayoutAsideInput>
  </fieldset>
);
