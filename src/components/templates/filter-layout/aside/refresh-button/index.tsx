import { RefreshCcw } from "lucide-react";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactElement } from "react";

import { ButtonTWM } from "@/src/components";
import { twm } from "@/src/libs";

interface I extends DetailedHTMLProps<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">, HTMLButtonElement> {
  className?: {
    button?: string;
    container?: string;
  };
}

export const FilterLayoutAsideRefreshButton: FC<I> = ({ className, ...props }): ReactElement => (
  <section className={twm("flex items-center justify-center border-t border-blue-500 px-3 py-2", className?.container)}>
    <button className={ButtonTWM({ className: `w-full ${className?.button}`, color: "blue", size: "sm", variant: "solid" })} {...props}>
      <RefreshCcw size={14} /> Refresh
    </button>
  </section>
);
