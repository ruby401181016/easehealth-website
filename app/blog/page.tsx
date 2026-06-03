"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

const posts = [
  {
    title: "為什麼久坐比你想像中更傷身？",
    category: "職場健康",
    excerpt: "久坐不只是肩頸腰痠，也會影響活動能力、代謝與身體使用方式。從上班族日常出發，重新理解久坐帶來的健康風險。",
    date: "2026.06",
    readTime: "5 min read",
    href: "/blog/sedentary-workplace-health",
  },
];

export default function BlogPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // EASE 全站雙字體系統
  const serifFont = "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";
  const sansFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

  const contactTextStyle = {
    fontFamily: sansFont,
    color: "#b8b3ac",
    fontSize: "13.5px",
    lineHeight: "2.0",
    fontWeight: 300,
    marginBottom: "10px",
    letterSpacing: "0.04em",
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f8f6f2", color: "#2d2d2d", fontFamily: sansFont }}>
      <Navbar />

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "120px 24px 80px", background: "#ece7df" }}>
        <p style={{ letterSpacing: "0.35em", fontSize: "11px", color: "#8a847c", marginBottom: 20, textTransform: "uppercase", fontWeight: 400 }}>EASE INSIGHTS</p>
        <h1 style={{ fontFamily: serifFont, fontSize: "48px", marginBottom: 24, fontWeight: 400, letterSpacing: "0.03em" }}>健康觀點</h1>
        <p style={{ fontSize: "15px", color: "#666", maxWidth: "580px", margin: "0 auto", lineHeight: "2.0", fontWeight: 300 }}>
          分享職場健康、運動習慣與企業 wellness 的觀察，透過文字連結專業與生活。
        </p>
      </section>

      {/* Posts */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "80px 24px 140px" }}>
        {posts.map((post, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <a
              key={post.title}
              href={post.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: "flex",
                flexWrap: "wrap",
                textDecoration: "none",
                color: "#2d2d2d",
                borderTop: "1px solid rgba(0,0,0,0.08)",
                padding: "56px 0",
                transition: "opacity 0.4s ease",
                opacity: hoveredIndex !== null && !isHovered ? 0.4 : 1,
              }}
            >
              <div style={{ flex: "0 0 240px", marginBottom: "24px" }}>
                <p style={{ fontSize: "12px", fontFamily: "monospace", color: "#9a9a9a", marginBottom: "8px" }}>{post.date}</p>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#aaa", textTransform: "uppercase" }}>{post.category}</p>
              </div>

              <div style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <h2 style={{ fontFamily: serifFont, fontSize: "32px", fontWeight: 400, margin: 0, lineHeight: 1.3, letterSpacing: "0.02em", transition: "color 0.3s ease" }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: "15px", color: "#666", lineHeight: "1.9", fontWeight: 300, margin: 0, maxWidth: "600px" }}>{post.excerpt}</p>
                <span style={{ fontSize: "12px", letterSpacing: "0.2em", borderBottom: isHovered ? "1px solid #2d2d2d" : "1px solid #dcdcdc", paddingBottom: "4px", width: "fit-content", transition: "all 0.3s ease" }}>
                  READ MORE →
                </span>
              </div>
            </a>
          );
        })}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
      </section>

      {/* Footer */}
      <footer style={{ background: "#2d2d2d", color: "#f8f6f2", padding: "100px 24px 48px", fontFamily: sansFont }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "64px" }}>
          <div>
            <h2 style={{ fontFamily: serifFont, fontSize: "30px", marginBottom: 20, fontWeight: 400 }}>EASE</h2>
            <p style={{ color: "#a19b93", lineHeight: "2.0", fontSize: "14px", fontWeight: 300 }}>Corporate Wellness Studio<br />讓健康更容易開始，也更容易持續</p>
          </div>
          <div>
            <p style={{ letterSpacing: "0.3em", fontSize: "11px", color: "#7e7871", marginBottom: 24 }}>CONTACT</p>
            <p style={contactTextStyle}>Instagram：easehealth<br />Email：contact@easehealth.com<br />Location：Taiwan</p>
          </div>
        </div>
        <div style={{ maxWidth: "1180px", margin: "80px auto 0", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 32, color: "#7e7871", fontSize: "12px", fontWeight: 300 }}>
          © 2026 EASE WELLNESS. All rights reserved.
        </div>
      </footer>
    </main>
  );
}