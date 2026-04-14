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
  const currentDate = new Date();
  const periodStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const periodEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const periodMonthYear = new Intl.DateTimeFormat("id-ID", { month: "2-digit", year: "numeric" }).format(currentDate);
  const periodDateLabel = new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" });
  const periodText = `${periodMonthYear} - ${periodDateLabel.format(periodStartDate)} s/d ${periodDateLabel.format(periodEndDate)}`;

  return (
    <main className={twm("flex flex-1 flex-col overflow-hidden p-1", className?.container)} {...props}>
      <div className={twm("flex items-center justify-between rounded-t-md bg-blue-400 px-3 py-1 font-semibold text-white", className?.header)}>
        <h2>{activeMenuLabel}</h2>
        <span>Periode: {periodText}</span>
      </div>
      <div className={twm("flex flex-1 flex-col overflow-auto rounded-b-md border border-blue-400 bg-white", className?.content)}>{children}</div>
    </main>
  );
};
