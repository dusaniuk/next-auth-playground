import { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

export type HeadingProps = PropsWithChildren<{
  className?: string;
}>;

export function Heading({
  children,
  className,
}: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-2xl font-medium leading-6",
        className,
      )}
    >
      {children}
    </h1>
  );
}
