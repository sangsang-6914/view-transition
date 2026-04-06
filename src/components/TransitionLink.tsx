"use client";

import { useRouter } from "next/navigation";
import { type AnchorHTMLAttributes, type ReactNode, useCallback } from "react";

interface TransitionLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: ReactNode;
}

/** 네이티브 View Transitions API로 페이드 트랜지션을 적용하는 Link */
export default function TransitionLink({
  href,
  children,
  onClick,
  ...rest
}: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onClick?.(e);

      if (!document.startViewTransition) {
        router.push(href);
        return;
      }

      document.startViewTransition(() => {
        router.push(href);
      });
    },
    [href, router, onClick],
  );

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
