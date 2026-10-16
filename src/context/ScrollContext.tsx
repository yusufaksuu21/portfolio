"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export const SECTION_IDS = ["home", "about", "projects", "contact"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

type ScrollContextValue = {
  containerRef: React.RefObject<HTMLElement | null>;
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
};

const ScrollContext = createContext<ScrollContextValue | null>(null);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const scrollToSection = useCallback((id: SectionId) => {
    const container = containerRef.current;
    const section = document.getElementById(id);
    if (!section) return;

    if (container) {
      const top =
        section.offsetTop - container.offsetTop + container.scrollTop;
      container.scrollTo({ top, behavior: "smooth" });
    } else {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    window.history.replaceState(null, "", `#${id}`);
    setActiveSection(id);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[];

    let frame = 0;
    function updateActiveSection() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const activeContainer = containerRef.current;
        if (!activeContainer) return;

        const marker =
          activeContainer.scrollTop + activeContainer.clientHeight * 0.35;
        let current = sections[0];
        for (const section of sections) {
          const top = section.offsetTop - activeContainer.offsetTop;
          if (top <= marker) current = section;
          else break;
        }
        const id = current?.id as SectionId | undefined;
        if (id && SECTION_IDS.includes(id)) {
          setActiveSection(id);
          window.history.replaceState(null, "", `#${id}`);
        }
      });
    }

    container.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as SectionId;
    if (SECTION_IDS.includes(hash)) {
      requestAnimationFrame(() => scrollToSection(hash));
    }
  }, [scrollToSection]);

  return (
    <ScrollContext.Provider
      value={{ containerRef, activeSection, scrollToSection }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollSections() {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error("useScrollSections must be used within ScrollProvider");
  }
  return ctx;
}
