"use client";

import { useRef, useState } from "react";

const menuItems = [
  { title: "飲食體態", label: "Nutrition", href: "/programs/body-composition" },
  { title: "健康數據", label: "Health Data", href: "/programs/health-data" },
  { title: "運動實作", label: "Movement", href: "/programs/movement" },
  { title: "疼痛修復", label: "Recovery", href: "/programs/pain-relief" },
  { title: "習慣養成", label: "Lifestyle", href: "/programs/habits-lifestyle" },
  { title: "健康工作坊", label: "Workshops", href: "/programs/workshops" },
];

export default function Navbar() {
  const [openPrograms, setOpenPrograms] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openProgramMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenPrograms(true);
  };

  const closeProgramMenu = () => {
    closeTimer.current = setTimeout(() => {
      setOpenPrograms(false);
    }, 180);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenPrograms(false);
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo" onClick={closeMobileMenu}>
        EASE
      </a>

      <button
        className="mobileButton"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      <div className={`navLinks ${mobileOpen ? "show" : ""}`}>
        <a href="/" className="navLink" onClick={closeMobileMenu}>Home</a>
        <a href="/about" className="navLink" onClick={closeMobileMenu}>About</a>
        <a href="/services" className="navLink" onClick={closeMobileMenu}>Services</a>

        <div
          className="programWrapper"
          onMouseEnter={openProgramMenu}
          onMouseLeave={closeProgramMenu}
        >
          <button
            className="navButton"
            onClick={() => setOpenPrograms(!openPrograms)}
          >
            Programs
          </button>

          {openPrograms && (
            <div className="programMenu">
              <div className="programMenuInner">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="programItem"
                    onClick={closeMobileMenu}
                  >
                    <span className="programTitle">{item.title}</span>
                    <span className="programLabel">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <a href="/cases" className="navLink" onClick={closeMobileMenu}>Case Studies</a>
        <a href="/blog" className="navLink" onClick={closeMobileMenu}>Blog</a>
        <a href="/contact" className="navLink" onClick={closeMobileMenu}>Contact</a>
      </div>
    </nav>
  );
}