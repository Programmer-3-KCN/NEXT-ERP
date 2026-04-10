import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, ReactElement } from "react";

import { twm } from "@/src/libs";

interface I extends DetailedHTMLProps<Omit<HTMLAttributes<HTMLElement>, "children" | "className">, HTMLElement>, Readonly<PropsWithChildren> {
  className?: string;
}

export const FilterLayoutMain: FC<I> = ({ children, className, ...props }): ReactElement => (
  <main className={twm("flex-1 overflow-hidden p-1", className)} {...props}>
    {children}
  </main>
);
