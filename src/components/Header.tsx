"use client";

import SectionRail from "@/components/SectionRail";
import { useScrollSections, type SectionId } from "@/context/ScrollContext";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const navItems: { id: SectionId; label: string; icon: string }[] = [
  { id: "home", label: "Anasayfa", icon: "fa-house" },
  { id: "about", label: "Hakkımda", icon: "fa-user" },
  { id: "projects", label: "Projeler", icon: "fa-code" },
  { id: "contact", label: "İletişim", icon: "fa-envelope" },
];

function subscribeToTheme(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("theme-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("theme-change", onChange);
  };
}

function getThemeSnapshot() {
  return localStorage.getItem("darkMode") !== "false";
}

function getServerThemeSnapshot() {
  return true;
}

export default function Header() {
  const { activeSection, scrollToSection } = useScrollSections();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !isDark);
  }, [isDark]);

  useEffect(() => {
    if (!menuOpen) return;
    function onPointerDown(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  function navigate(id: SectionId) {
    scrollToSection(id);
    setMenuOpen(false);
  }

  function toggleTheme() {
    localStorage.setItem("darkMode", String(!isDark));
    window.dispatchEvent(new Event("theme-change"));
  }

  function links(mobile = false) {
    return (
      <>
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`nav-link-btn${activeSection === item.id ? " active" : ""}`}
              aria-current={activeSection === item.id ? "page" : undefined}
              onClick={() => navigate(item.id)}
            >
              <i className={`fas ${item.icon}`} aria-hidden="true"></i> {item.label}
            </button>
          </li>
        ))}
        <li>
          <a href="/Yusuf_Aksu_CV_TR.pdf" className="cv-button" download onClick={() => setMenuOpen(false)}>
            <i className="fas fa-download" aria-hidden="true"></i> {mobile ? "CV İndir" : "CV"}
          </a>
        </li>
      </>
    );
  }

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <button type="button" className="brand-block" onClick={() => navigate("home")}>
            <span className="brand-name">Yusuf Aksu</span>
            <span className="brand-title">Yazılım Mühendisi</span>
          </button>
          <div className="header-actions" ref={navRef}>
            <ul className="nav-links desktop-nav">
              {links()}
              <li><button className="mode-btn" type="button" onClick={toggleTheme} aria-label="Temayı değiştir"><i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`} aria-hidden="true"></i></button></li>
            </ul>
            <div className="mobile-nav-cluster">
              <button className="mode-btn mode-btn-mobile" type="button" onClick={toggleTheme} aria-label="Temayı değiştir">
                <i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`} aria-hidden="true"></i>
              </button>
              <button className="menu-toggle" type="button" aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={menuOpen} aria-controls="mobile-nav-menu" onClick={() => setMenuOpen((v) => !v)}>
                <i className={`fas ${menuOpen ? "fa-xmark" : "fa-bars"}`} aria-hidden="true"></i>
              </button>
              <ul id="mobile-nav-menu" className={`nav-links mobile-nav${menuOpen ? " show" : ""}`}>
                {links(true)}
              </ul>
            </div>
          </div>
        </div>
      </header>
      <SectionRail />
    </>
  );
}
