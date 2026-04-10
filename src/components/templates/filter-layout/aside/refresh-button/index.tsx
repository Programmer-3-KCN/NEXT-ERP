import { RefreshCcw } from "lucide-react";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactElement } from "react";

import { twm } from "@/src/libs";

interface I extends DetailedHTMLProps<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">, HTMLButtonElement> {
  className?: {
    button?: string;
    container?: string;
  };
}

export const FilterLayoutAsideRefreshButton: FC<I> = ({ className, ...props }): ReactElement => (
  <section className={twm("border-t border-blue-500 px-3 py-2", className?.container)}>
    <button
      className={twm(
        "flex w-full cursor-pointer items-center justify-center gap-1 rounded-md bg-blue-500 px-3 py-2 font-semibold text-white active:scale-95",
        className?.button,
      )}
      {...props}
    >
      <RefreshCcw size={14} /> Refresh
    </button>
  </section>
);
