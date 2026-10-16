"use client";

import { SECTION_IDS, useScrollSections, type SectionId } from "@/context/ScrollContext";

const labels: Record<SectionId, string> = {
  home: "Anasayfa",
  about: "Hakkımda",
  projects: "Projeler",
  contact: "İletişim",
};

export default function SectionRail() {
  const { activeSection, scrollToSection } = useScrollSections();
  return (
    <nav className="section-rail" aria-label="Bölüm navigasyonu">
      {SECTION_IDS.map((id) => (
        <button key={id} type="button" className={`section-rail-dot${activeSection === id ? " active" : ""}`} aria-label={labels[id]} aria-current={activeSection === id ? "true" : undefined} onClick={() => scrollToSection(id)}>
          <span className="section-rail-tooltip">{labels[id]}</span>
        </button>
      ))}
    </nav>
  );
}
