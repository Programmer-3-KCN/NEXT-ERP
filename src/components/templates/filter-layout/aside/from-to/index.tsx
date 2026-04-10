import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement, ReactNode } from "react";

import { twm } from "@/src/libs";

interface I extends DetailedHTMLProps<Omit<HTMLAttributes<HTMLDivElement>, "children" | "className">, HTMLDivElement> {
  className?: string;
  from: ReactNode;
  to: ReactNode;
}

export const FilterLayoutAsideFromTo: FC<I> = ({ className, from, to, ...props }): ReactElement => (
  <div className={twm("flex items-center gap-1", className)} {...props}>
    {from}
    <span>s/d</span>
    {to}
  </div>
);
