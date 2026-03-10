import type { ReactNode } from "react";
import { cn } from "@/src/utils/helpers";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
};

export function Heading({ title, subtitle, align = "left" }: Props) {
  return (
    <div className={cn("heading", align === "center" && "heading-center")}>
      <h2 className="heading-title">{title}</h2>
      {subtitle ? <p className="heading-subtitle">{subtitle}</p> : null}
    </div>
  );
}
