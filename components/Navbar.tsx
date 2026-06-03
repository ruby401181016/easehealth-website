"use client";

import { useState } from "react";

const menuItems = [
  {
    title: "飲食體態",
    label: "Nutrition",
    href: "/programs/body-composition",
  },
  {
    title: "健康數據",
    label: "Health Data",
    href: "/programs/health-data",
  },
  {
    title: "運動實作",
    label: "Movement",
    href: "/programs/movement",
  },
  {
    title: "疼痛修復",
    label: "Recovery",
    href: "/programs/pain-relief",
  },
  {
    title: "習慣養成",
    label: "Lifestyle",
    href: "/programs/habits-lifestyle",
  },
  {
    title: "健康工作坊",
    label: "Workshops",
    href: "/programs/workshops",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        background: "#f8f6f2",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <a
        href="/"
        style={{
          fontSize: "28px",
          fontWeight: 700,
          letterSpacing: "0.04em",
          textDecoration: "none",
          color: "#2d2d2d",
        }}
      >
        EASE
      </a>

      <div
        style={{
          display: "flex",
          gap: "34px",
          fontSize: "14px",
          letterSpacing: "0.05em",
          alignItems: "center",
        }}
      >
        <a href="/" style={navLinkStyle}>
          Home
        </a>

        <a href="/about" style={navLinkStyle}>
          About
        </a>

        <a href="/services" style={navLinkStyle}>
          Services
        </a>

        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => {
            setOpen(false);
            setHoverIndex(null);
          }}
        >
          <button
            type="button"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#2d2d2d",
              fontSize: "14px",
              letterSpacing: "0.05em",
              padding: 0,
              fontFamily: "inherit",
            }}
          >
            Programs
          </button>

          {open && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                width: 280,
                background: "rgba(255,255,255,0.86)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.7)",
                borderRadius: 20,
                padding: 16,
                boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                zIndex: 999,
              }}
            >
              {menuItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    display: "block",
                    padding: "15px 16px",
                    borderRadius: 14,
                    textDecoration: "none",
                    color: "#2d2d2d",
                    marginBottom: index === menuItems.length - 1 ? 0 : 8,
                    background:
                      hoverIndex === index
                        ? "rgba(220,239,235,0.75)"
                        : "rgba(248,246,242,0.48)",
                    transition: "0.25s",
                  }}
                >
                  <div style={{ fontSize: 16, fontWeight: 600 }}>
                    {item.title}
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      color: "#789",
                      marginTop: 4,
                    }}
                  >
                    {item.label}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="/cases" style={navLinkStyle}>
          Case Studies
        </a>

        <a href="/blog" style={navLinkStyle}>
          Blog
        </a>

        <a href="/contact" style={navLinkStyle}>
          Contact
        </a>
      </div>
    </nav>
  );
}

const navLinkStyle = {
  color: "#2d2d2d",
  textDecoration: "none",
};