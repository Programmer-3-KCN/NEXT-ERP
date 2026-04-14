import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement, ReactNode } from "react";

import { twm } from "@/src/libs";

interface I extends DetailedHTMLProps<Omit<HTMLAttributes<HTMLDivElement>, "children" | "className">, HTMLDivElement> {
  children: ReactNode;
  className?: {
    container?: string;
    content?: string;
    label?: string;
  };
  label: string;
}

export const FieldCell: FC<I> = ({ children, className, label, ...props }): ReactElement => (
  <div className={twm("border", className?.container)} {...props}>
    <div className={twm("border-b bg-blue-400 py-0.5 text-center text-xs font-semibold text-white", className?.label)}>{label}</div>
    <div className={twm("px-2 py-1", className?.content)}>{children}</div>
  </div>
);
