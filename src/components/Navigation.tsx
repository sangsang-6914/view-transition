"use client";

import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
] as const;

/** 페이지 간 이동을 위한 공통 네비게이션 */
export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center gap-2 p-6">
      {NAV_ITEMS.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <TransitionLink
            key={href}
            href={href}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-foreground text-background"
                : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground"
            }`}
          >
            {label}
          </TransitionLink>
        );
      })}
    </nav>
  );
}
