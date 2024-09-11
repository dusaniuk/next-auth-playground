import { PropsWithChildren } from "react";

export type HeadingProps = PropsWithChildren<unknown>;

export function Heading({ children }: HeadingProps) {
  return <h1 className="text-2xl font-medium leading-6">{children}</h1>;
}
