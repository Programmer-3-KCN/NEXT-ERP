import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactElement } from "react";

import { twm } from "@/src/libs";
import { TButtonColor, TButtonSize, TButtonVariant } from "@/src/types";

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color: TButtonColor;
  size: TButtonSize;
  variant: TButtonVariant;
}

export const ButtonTWM = ({ className, color, disabled, size, variant }: IButton) =>
  twm(
    "flex cursor-pointer items-center gap-1 whitespace-nowrap transition duration-100",
    // ⭐ === BASE === ⭐
    variant !== "ghost" && "justify-center",
    disabled ? "cursor-not-allowed" : "active:scale-95",

    // ⭐ === SOLID === ⭐
    variant === "solid" && color === "red" && !disabled && "bg-red-500 text-white",

    variant === "solid" && color === "green" && !disabled && "bg-green-500 text-white",

    variant === "solid" && color === "blue" && !disabled && "bg-blue-500 text-white",

    variant === "solid" && color === "black-blue" && !disabled && "bg-black text-white hover:bg-blue-600",

    variant === "solid" && color === "black-red" && !disabled && "bg-black text-white hover:bg-red-600",

    variant === "solid" && color === "black-green" && !disabled && "bg-black text-white hover:bg-green-600",

    variant === "solid" && color === "black" && !disabled && "bg-black text-white",

    variant === "solid" && color === "white" && !disabled && "bg-white text-black",

    variant === "solid" && color === "gray" && !disabled && "bg-gray-200 text-black",

    variant === "solid" && disabled && "bg-gray-400 text-white",

    // ⭐ === SEMI === ⭐
    variant === "semi" && color === "red" && !disabled && "border border-red-200 bg-red-50 text-red-500 hover:bg-red-100",

    variant === "semi" && color === "green" && !disabled && "border border-green-200 bg-green-50 text-green-600 hover:bg-green-100",

    variant === "semi" && color === "blue" && !disabled && "border border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100",

    variant === "semi" && color === "black-blue" && !disabled && "border border-blue-200 bg-blue-50 text-black hover:bg-blue-100 hover:text-blue-600",

    variant === "semi" && color === "black-red" && !disabled && "border border-red-200 bg-red-50 text-black hover:bg-red-100 hover:text-red-600",

    variant === "semi" &&
      color === "black-green" &&
      !disabled &&
      "border border-green-200 bg-green-50 text-black hover:bg-green-100 hover:text-green-600",

    variant === "semi" && color === "black" && !disabled && "border border-gray-300 bg-gray-50 text-black hover:bg-gray-100",

    variant === "semi" && color === "white" && !disabled && "border border-white/80 bg-white/10 text-white hover:bg-white/20",

    variant === "semi" && color === "gray" && !disabled && "border border-gray-300 bg-gray-100 text-black hover:bg-gray-200",

    variant === "semi" && disabled && "border border-gray-300 bg-gray-100 text-gray-400",

    // ⭐ === OUTLINE === ⭐
    variant === "outline" &&
      color === "red" &&
      !disabled &&
      "bg-transparent text-red-500 ring-1 ring-red-500 ring-inset hover:bg-red-500 hover:text-white",

    variant === "outline" &&
      color === "green" &&
      !disabled &&
      "bg-transparent text-green-500 ring-1 ring-green-500 ring-inset hover:bg-green-500 hover:text-white",

    variant === "outline" &&
      color === "blue" &&
      !disabled &&
      "bg-transparent text-blue-500 ring-1 ring-blue-500 ring-inset hover:bg-blue-500 hover:text-white",

    variant === "outline" &&
      color === "black-blue" &&
      !disabled &&
      "bg-transparent text-black ring-1 ring-blue-300 ring-inset hover:bg-blue-50 hover:text-blue-600",

    variant === "outline" &&
      color === "black-red" &&
      !disabled &&
      "bg-transparent text-black ring-1 ring-red-300 ring-inset hover:bg-red-50 hover:text-red-600",

    variant === "outline" &&
      color === "black-green" &&
      !disabled &&
      "bg-transparent text-black ring-1 ring-green-300 ring-inset hover:bg-green-50 hover:text-green-600",

    variant === "outline" &&
      color === "black" &&
      !disabled &&
      "bg-transparent text-black ring-1 ring-black ring-inset hover:bg-black hover:text-white",

    variant === "outline" &&
      color === "white" &&
      !disabled &&
      "bg-transparent text-white ring-1 ring-white ring-inset hover:bg-white hover:text-black",

    variant === "outline" &&
      color === "gray" &&
      !disabled &&
      "bg-transparent text-gray-200 ring-1 ring-gray-200 ring-inset hover:bg-gray-200 hover:text-black",

    variant === "outline" && disabled && "bg-transparent text-gray-400 ring-1 ring-gray-400 ring-inset",

    // ⭐ === GHOST === ⭐
    variant === "ghost" && color === "red" && !disabled && "text-red-600 hover:bg-red-50",

    variant === "ghost" && color === "green" && !disabled && "text-green-600 hover:bg-green-50",

    variant === "ghost" && color === "blue" && !disabled && "text-blue-600 hover:bg-blue-50",

    variant === "ghost" && color === "black-blue" && !disabled && "text-black hover:bg-blue-50 hover:text-blue-600",

    variant === "ghost" && color === "black-red" && !disabled && "text-black hover:bg-red-50 hover:text-red-600",

    variant === "ghost" && color === "black-green" && !disabled && "text-black hover:bg-green-50 hover:text-green-600",

    variant === "ghost" && color === "black" && !disabled && "text-black hover:bg-gray-100",

    variant === "ghost" && color === "white" && !disabled && "text-white hover:bg-white/10",

    variant === "ghost" && color === "gray" && !disabled && "text-gray-500 hover:bg-gray-100",

    variant === "ghost" && disabled && "text-gray-400",

    // ⭐ === SIZE === ⭐
    size === "sm" && variant !== "ghost" && "rounded-sm px-2 py-1 text-sm",

    size === "md" && variant !== "ghost" && "rounded-md px-3 py-2 text-base",

    size === "lg" && variant !== "ghost" && "rounded-lg px-4 py-3 text-lg",

    // ⭐ === GHOST SIZE === ⭐
    size === "sm" && variant === "ghost" && "rounded-sm px-2 py-1 text-sm",

    size === "md" && variant === "ghost" && "rounded-md px-3 py-2 text-base",

    size === "lg" && variant === "ghost" && "rounded-lg px-4 py-3 text-lg",

    // ⭐ === CLASSNAME === ⭐
    className,
  );

export const Button: FC<IButton> = ({ className, color, disabled, size, variant, ...props }): ReactElement => (
  <button className={ButtonTWM({ className, color, disabled, size, variant })} data-testid="button" disabled={disabled} {...props}>
    {props.children}
  </button>
);
