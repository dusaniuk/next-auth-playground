import { cn } from "@app/libs/utils/cn";
import "@ui/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetSoft - Pet daycare software",
  description: "Take care of people's pets responsibility with PetSoft",
};

export type RootLayoutProps = PropsWithChildren<unknown>;

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-[#E5E8EC] text-sm text-zinc-900"
        )}
      >
        {children}
      </body>
    </html>
  );
}
