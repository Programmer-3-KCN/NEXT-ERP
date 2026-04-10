import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, ReactElement } from "react";

import { twm } from "@/src/libs";

interface I extends DetailedHTMLProps<Omit<HTMLAttributes<HTMLDivElement>, "children" | "className">, HTMLDivElement>, Readonly<PropsWithChildren> {
  className?: string;
}

export const FilterLayoutAsideCheckbox: FC<I> = ({ children, className, ...props }): ReactElement => (
  <div className={twm("flex flex-col gap-1 pt-1", className)} {...props}>
    {children}
  </div>
);
