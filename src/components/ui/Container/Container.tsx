import type { ReactNode } from "react";
import { cn } from "@/src/utils/helpers";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  return <div className={cn("container", className)}>{children}</div>;
}
