"use client";

import Link from "next/link";
import type { ReactNode, MouseEvent } from "react";
import { cn } from "@/src/utils/helpers";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  ariaLabel?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
  ariaLabel,
  onClick,
}: Props) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn("btn", variant === "secondary" && "btn-secondary", className)}
    >
      {children}
    </Link>
  );
}