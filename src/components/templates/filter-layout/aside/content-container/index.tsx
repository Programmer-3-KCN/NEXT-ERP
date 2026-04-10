import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, ReactElement } from "react";

import { twm } from "@/src/libs";

interface I extends DetailedHTMLProps<Omit<HTMLAttributes<HTMLElement>, "children" | "className">, HTMLElement>, Readonly<PropsWithChildren> {
  className?: string;
}

export const FilterLayoutAsideContentContainer: FC<I> = ({ children, className, ...props }): ReactElement => (
  <section className={twm("flex max-h-full flex-1 flex-col gap-1 overflow-y-auto px-3 py-1", className)} {...props}>
    {children}
  </section>
);
