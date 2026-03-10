import type { ReactNode } from "react";
import { cn } from "@/src/utils/helpers";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className }: Props) {
  return (
    <section id={id} className={cn("section", className)}>
      {children}
    </section>
  );
}
