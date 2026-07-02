"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/", label: "Anasayfa", icon: "fa-home" },
  { href: "/about", label: "Hakkımda", icon: "fa-user" },
  { href: "/projects", label: "Projeler", icon: "fa-code" },
  { href: "/contact", label: "İletişim", icon: "fa-envelope" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  // Dark mode tercihini oku
  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setIsDark(saved);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDark);
  }, [isDark]);

  // Header yüksekliğini ölç (spacer için)
  useEffect(() => {
    function measure() {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [menuOpen]);

  // Scroll yönüne göre header'ı gizle/göster
  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      if (menuOpen) return; // menü açıkken gizleme
      if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen && window.innerHeight > window.innerWidth) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  useEffect(() => {
    function isMobileMenu() {
      const isPortrait = window.innerHeight > window.innerWidth;
      const isLandscape =
        window.innerWidth <= 900 && window.innerHeight <= window.innerWidth;
      return isPortrait ? window.innerWidth <= 768 : isLandscape;
    }
    function handleResize() {
      if (!isMobileMenu()) setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  function toggleDarkMode(e: React.MouseEvent) {
    e.stopPropagation();
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("darkMode", String(next));
  }

  return (
    <>
      <header
        ref={headerRef}
        className={hidden ? "header-hidden" : ""}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div className="header-container">
          <div className="profile-header">
            <Image
              src="/fotocv.jpeg"
              alt="Yusuf Aksu"
              className="profile-img"
              width={120}
              height={120}
              priority
            />
            <div className="header-text">
              <h1>Yusuf Aksu</h1>
              <p className="title">Yazılım Mühendisi</p>
            </div>
          </div>
          <nav>
            <button
              className="menu-toggle"
              id="menu-btn"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen((v) => !v);
              }}
            >
              <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
            <ul className={`nav-links${menuOpen ? " show" : ""}`} id="nav-menu">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={pathname === item.href ? "active" : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    <i className={`fas ${item.icon}`}></i> {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="/Yusuf_Aksu_CV_TR.pdf" className="cv-button" download>
                  <i className="fas fa-download"></i> Güncel CV&apos;yi İndir
                </a>
              </li>
              <li>
                <button
                  id="dark-mode-toggle"
                  className="mode-btn"
                  type="button"
                  onClick={toggleDarkMode}
                >
                  <i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`}></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Header fixed olduğu için içerik altına kaymasın diye boşluk */}
      <div style={{ height: headerHeight }} />
    </>
  );
}
