import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, ReactElement } from "react";

import { twm } from "@/src/libs";

interface I extends DetailedHTMLProps<Omit<HTMLAttributes<HTMLElement>, "children" | "className">, HTMLElement>, Readonly<PropsWithChildren> {
  className?: {
    button?: string;
    container?: string;
    content?: string;
    header?: string;
  };
}

export const FilterLayoutMain: FC<I> = ({ children, className, ...props }): ReactElement => (
  <main className={twm("flex flex-1 flex-col overflow-hidden p-1", className?.container)} {...props}>
    <h2 className={twm("rounded-t-md bg-gray-500 px-3 py-1 font-semibold text-white", className?.header)}>Order Pembelian (PO)</h2>
    <div className={twm("flex flex-1 flex-col overflow-auto rounded-b-md border border-gray-500 bg-white", className?.content)}>{children}</div>
  </main>
);
