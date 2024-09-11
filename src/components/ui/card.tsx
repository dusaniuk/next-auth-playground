import { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

export type CardProps = PropsWithChildren<{
  className?: string;
}>;

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-md bg-[#F7F8FA] shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
