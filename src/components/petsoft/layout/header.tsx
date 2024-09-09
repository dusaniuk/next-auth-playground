"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { Logo } from "../logo";

const navItems = [
  { label: "Dashboard", path: "/app/dashboard" },
  { label: "Account", path: "/app/account" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-white/10 py-2">
      <Logo />
      <nav>
        <ul className="flex gap-2 text-xs">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={cn(
                  "rounded-sm px-2 py-1 text-white/70 transition-colors hover:text-white focus:text-white",
                  {
                    "bg-black/10 text-white": pathname === item.path,
                  }
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
