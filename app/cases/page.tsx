"use client";

import Navbar from "@/components/Navbar";

const cases = [
  {
    title: "LIH YUAN 麗源建設",
    program: "健康數據",
    company: "上班族必懂健檢數據",
    image: "/麗源建設.jpg",
    link: "#",
  },
  {
    title: "AFOP 逢源科技",
    program: "習慣養成",
    company: "從三分鐘開始：讓運動真正融入生活",
    image: "/逢源科技.jpg",
    link: "#",
  },
  {
    title: "DELL 戴爾電腦",
    program: "飲食體態",
    company: "增肌減脂全攻略",
    image: "/DELL.jpg",
    link: "#",
  },
  {
    title: "國立台灣體育大學",
    program: "飲食體態",
    company: "燃燒脂肪，塑造身材",
    image: "/國立台灣體育大學.jpg",
    link: "#",
  },
  {
    title: "DDSC中菲電腦",
    program: "飲食體態",
    company: "【久坐族救星】國手教你增肌減脂",
    image: "/中菲電腦.jpg",
    link: "#",
  },
  {
    title: "COMPAL 仁寶電腦",
    program: "飲食體態",
    company: "久坐族救星：國手教你增肌減脂",
    image: "/仁寶電腦.jpg",
    link: "#",
  },
  {
    title: "AFOP 逢源科技",
    program: "運動實作",
    company: "上班族入門增肌",
    image: "/逢源科技增肌.jpg",
    link: "#",
  },
  {
    title: "ASUS 華碩電腦",
    program: "飲食體態",
    company: "運動飲食大揭密",
    image: "/華碩電腦.jpg",
    link: "#",
  },
  {
    title: "ACSI安碁電腦",
    program: "飲食體態",
    company: "上班族也做得到的體重管理",
    image: "/安碁電腦2.png",
    link: "#",
  },
];

export default function CasesPage() {
  const featuredCase = cases[0];
  const gridCases = cases.slice(1);

  // EASE 全站統一字體變數
  const serifFont = "'Cormorant Garamond', 'Playfair Display', 'Noto Serif TC', Georgia, serif";
  const sansFont = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans TC', Helvetica, Arial, sans-serif";

  return (
    <main style={{ minHeight: "100vh", background: "#f8f6f2", color: "#2d2d2d", fontFamily: sansFont }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "120px 24px 80px", background: "#ece7df" }}>
        <p style={{ letterSpacing: "0.35em", fontSize: "11px", color: "#8a847c", marginBottom: 20, textTransform: "uppercase" }}>CASE STUDIES</p>
        <h1 style={{ fontFamily: serifFont, fontSize: "48px", marginBottom: 24, fontWeight: 400 }}>企業合作案例</h1>
        <p style={{ fontSize: "15px", color: "#666", maxWidth: "580px", margin: "0 auto", lineHeight: "2.0", fontWeight: 300 }}>
          記錄企業健康講座、運動實作與 Wellness 活動，協助企業打造更有韌性的健康文化。
        </p>
      </section>

      {/* Cases Grid */}
      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "80px 24px 140px" }}>
        {/* Featured Case */}
        {featuredCase && (
          <a href={featuredCase.link} style={{ display: "flex", gap: "64px", alignItems: "center", textDecoration: "none", color: "#2d2d2d", marginBottom: "120px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 550px", aspectRatio: "16 / 10", borderRadius: "4px", overflow: "hidden", background: "#ece7df" }}>
              <img src={featuredCase.image} alt={featuredCase.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ flex: "1 1 380px" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#8a847c", marginBottom: "16px" }}>FEATURED ／ {featuredCase.program}</p>
              <h2 style={{ fontFamily: serifFont, fontSize: "36px", marginBottom: "16px", fontWeight: 400 }}>{featuredCase.title}</h2>
              <p style={{ color: "#5a5550", fontSize: "15px", marginBottom: "32px", fontWeight: 300 }}>{featuredCase.company}</p>
              <span style={{ fontSize: "12px", letterSpacing: "0.1em", borderBottom: "1px solid #2d2d2d", paddingBottom: "4px" }}>VIEW CASE →</span>
            </div>
          </a>
        )}

        {/* Grid Cases */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "60px 40px" }}>
          {gridCases.map((item, idx) => (
            <a key={idx} href={item.link} style={{ textDecoration: "none", color: "#2d2d2d" }}>
              <div style={{ aspectRatio: "16 / 10", borderRadius: "4px", overflow: "hidden", marginBottom: "24px", background: "#e9e4dc" }}>
                <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <p style={{ fontSize: "10px", color: "#9c9c9c", marginBottom: "8px", letterSpacing: "0.1em" }}>{item.program}</p>
              <h3 style={{ fontSize: "20px", fontWeight: 400, marginBottom: "8px" }}>{item.title}</h3>
              <p style={{ color: "#666", fontSize: "14px", fontWeight: 300 }}>{item.company}</p>
            </a>
          ))}
        </div>
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
            <p style={{ color: "#b5b5b5", fontSize: "14px", fontWeight: 300, lineHeight: "2.0" }}>Instagram：@easehealth<br />Email：contact@easehealth.com<br />Location：Taiwan</p>
          </div>
        </div>
        <div style={{ maxWidth: "1180px", margin: "80px auto 0", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 32, color: "#7e7871", fontSize: "12px", fontWeight: 300 }}>
          © 2026 EASE WELLNESS. All rights reserved.
        </div>
      </footer>
    </main>
  );
}