"use client";

import { usePathname } from "next/navigation";
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, ReactElement } from "react";

import { getActiveMenuLabel } from "@/src/helpers";
import { twm } from "@/src/libs";

interface I extends DetailedHTMLProps<Omit<HTMLAttributes<HTMLElement>, "children" | "className">, HTMLElement>, Readonly<PropsWithChildren> {
  className?: {
    button?: string;
    container?: string;
    content?: string;
    header?: string;
  };
}

export const FilterLayoutMain: FC<I> = ({ children, className, ...props }): ReactElement => {
  const pathname = usePathname();
  const activeMenuLabel = getActiveMenuLabel(pathname);

  return (
    <main className={twm("flex flex-1 flex-col overflow-hidden p-1", className?.container)} {...props}>
      <h2 className={twm("rounded-t-md bg-blue-400 px-3 py-1 font-semibold text-white", className?.header)}>{activeMenuLabel}</h2>
      <div className={twm("flex flex-1 flex-col overflow-auto rounded-b-md border border-blue-400 bg-white", className?.content)}>{children}</div>
    </main>
  );
};
