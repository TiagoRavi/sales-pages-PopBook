"use client";

import type { MouseEvent, ReactNode } from "react";
import { Button } from "./Button";
import { trackCheckoutClick, trackPurchaseIntent } from "@/src/utils/analytics";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  productId?: string;
  productName?: string;
  section?: string;
  target?: "_blank" | "_self";
  rel?: string;
  ariaLabel?: string;
};

export function TrackedButton({
  href,
  children,
  variant = "primary",
  className,
  productId,
  productName,
  section,
  target,
  rel,
  ariaLabel,
}: Props) {
  function handleClick(_: MouseEvent<HTMLAnchorElement>) {
    const payload = {
      productId,
      productName,
      section,
      destination: href,
    };

    trackCheckoutClick(payload);
    trackPurchaseIntent(payload);
  }

  return (
    <Button
      href={href}
      variant={variant}
      className={className}
      target={target}
      rel={rel}
      ariaLabel={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}