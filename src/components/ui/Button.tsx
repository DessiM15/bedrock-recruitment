"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-tan text-white hover:bg-tan-light active:bg-tan-dark",
  secondary:
    "bg-dark-green text-white hover:bg-dark-green-light active:bg-dark-green",
  outline:
    "border-2 border-tan text-tan hover:bg-tan hover:text-white",
  ghost:
    "text-tan hover:bg-tan/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-tan focus:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return <a href={href} className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
