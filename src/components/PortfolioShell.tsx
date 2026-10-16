"use client";

import Header from "@/components/Header";
import { ScrollProvider, useScrollSections } from "@/context/ScrollContext";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

function MainScroll({ children }: { children: ReactNode }) {
  const { containerRef } = useScrollSections();

  return (
    <main ref={containerRef} id="portfolio-main" className="snap-container">
      {children}
    </main>
  );
}

export default function PortfolioShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (!isHome) {
    return <>{children}</>;
  }

  return (
    <ScrollProvider>
      <Header />
      <MainScroll>{children}</MainScroll>
    </ScrollProvider>
  );
}
