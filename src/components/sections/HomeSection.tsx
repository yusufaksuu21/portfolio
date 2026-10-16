"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useScrollSections, type SectionId } from "@/context/ScrollContext";

export default function HomeSection() {
  const { scrollToSection } = useScrollSections();
  function go(id: SectionId) { scrollToSection(id); }

  return (
    <section id="home" className="snap-section snap-section-hero">
      <div className="section-inner">
        <Reveal className="hero-layout">
          <div className="hero-visual">
            <div className="hero-photo-ring">
              <Image src="/fotocv.jpeg" alt="Yusuf Aksu" className="hero-photo" width={360} height={360} priority />
            </div>
          </div>
          <div className="hero-copy">
            <p className="section-eyebrow">Portfolyo</p>
            <h1 className="hero-title">Yazılım Mühendisi</h1>
            <p className="hero-subtitle">Yusuf Aksu</p>
            <p className="hero-lead">
              Python backend, yapay zekâ entegrasyonları ve modern web uygulamaları geliştiriyorum. Ölçeklenebilir servislerden kullanıcı arayüzlerine kadar ürün odaklı çözümler üretiyorum.
            </p>
            <div className="focus-areas hero-focus">
              <span className="focus-pill"><i className="fab fa-python" aria-hidden="true"></i> Backend</span>
              <span className="focus-pill"><i className="fas fa-brain" aria-hidden="true"></i> Yapay zekâ</span>
              <span className="focus-pill"><i className="fas fa-globe" aria-hidden="true"></i> Web</span>
            </div>
            <div className="cta-buttons hero-cta">
              <button type="button" className="cta-btn primary" onClick={() => go("projects")}><i className="fas fa-code" aria-hidden="true"></i> Projelerim</button>
              <button type="button" className="cta-btn secondary" onClick={() => go("contact")}><i className="fas fa-paper-plane" aria-hidden="true"></i> İletişim</button>
              <a href="/Yusuf_Aksu_CV_TR.pdf" className="cta-btn ghost" download><i className="fas fa-download" aria-hidden="true"></i> CV</a>
            </div>
          </div>
        </Reveal>
        <button type="button" className="scroll-hint" aria-label="Hakkımda bölümüne git" onClick={() => go("about")}>
          <i className="fas fa-chevron-down" aria-hidden="true"></i>
        </button>
      </div>
    </section>
  );
}
