import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programCategories = [
  {
    number: "01",
    title: "健康數據與健康管理",
    subtitle: "Health Data & Wellness",
    description: "從數據了解身體狀況，建立正確健康觀念。",
    href: "/programs/health-data",
    items: ["上班族必懂的健檢數據", "從健檢報告看健康風險", "不是胖，是代謝出了問題", "久坐族健康管理"],
  },
  {
    number: "02",
    title: "體態管理與飲食觀念",
    subtitle: "Body Composition & Nutrition",
    description: "飲食觀念 × 體態管理，建立可持續的健康生活方式。",
    href: "/programs/body-composition",
    items: ["外食減脂策略", "增肌減脂一次搞懂", "不復胖生活管理", "上班族飲食規劃"],
  },
  {
    number: "03",
    title: "體能訓練與運動實作",
    subtitle: "Training & Movement",
    description: "透過實作體驗，建立正確訓練觀念。",
    href: "/programs/movement",
    items: ["上班族增肌入門", "居家／辦公室肌力訓練", "核心與穩定訓練", "動作品質與訓練效率"],
  },
  {
    number: "04",
    title: "疼痛改善與久坐修復",
    subtitle: "Pain Relief & Recovery",
    description: "改善久坐帶來的痠痛與身體失衡。",
    href: "/programs/pain-relief",
    items: ["肩頸腰背自救指南", "久坐造成的身體失衡", "辦公室痠痛改善", "日常修復伸展"],
  },
  {
    number: "05",
    title: "習慣養成與健康生活",
    subtitle: "Habits & Lifestyle",
    description: "從習慣開始，建立可持續的健康生活模式。",
    href: "/programs/habits-lifestyle",
    items: ["從三分鐘開始建立運動習慣", "如何維持運動動機", "建立可持續健康生活", "睡眠、壓力與恢復"],
  },
  {
    number: "06",
    title: "互動式健康工作坊",
    subtitle: "Interactive Wellness Workshops",
    description: "講座結合互動與實作，適合中小型企業健康活動。",
    href: "/programs/workshops",
    items: ["辦公室伸展帶動", "肩頸放鬆體驗", "彈力帶訓練體驗", "wellness mini session"],
  },
];

export default function ProgramsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8f6f2", color: "#2d2d2d" }}>
      <Navbar />

      <section style={{ textAlign: "center", padding: "90px 24px", background: "#ece7df" }}>
        <p style={{ letterSpacing: "0.35em", color: "#777", marginBottom: 18 }}>
          PROGRAMS
        </p>

        <h1 style={{ fontSize: 52, marginBottom: 20 }}>
          課程主題分類
        </h1>

        <p style={{ fontSize: 20, color: "#666" }}>
          專業健康講座 × 互動實作體驗，幫助企業提升員工健康力
        </p>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
          }}
        >
          {programCategories.map((program) => (
            <a
              key={program.number}
              href={program.href}
              style={{
                background: "#fff",
                borderRadius: 28,
                padding: 32,
                textDecoration: "none",
                color: "#2d2d2d",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                display: "block",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#dcefeb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  marginBottom: 24,
                  color: "#3b7c7c",
                }}
              >
                {program.number}
              </div>

              <p style={{ color: "#6f9999", marginBottom: 8 }}>
                {program.subtitle}
              </p>

              <h2 style={{ fontSize: 28, marginBottom: 16 }}>
                {program.title}
              </h2>

              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: 20 }}>
                {program.description}
              </p>

              <ul style={{ color: "#555", lineHeight: 2, paddingLeft: 20 }}>
                {program.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p style={{ marginTop: 24, borderBottom: "1px solid #2d2d2d", display: "inline-block" }}>
                查看課程 →
              </p>
            </a>
          ))}
        </div>
      </section>

      <section style={{ padding: "100px 24px", textAlign: "center", background: "#fff" }}>
        <h2 style={{ fontSize: 34, marginBottom: 20 }}>
          不確定適合哪一種課程？
        </h2>

        <p style={{ fontSize: 16, color: "#666", lineHeight: 2, marginBottom: 34 }}>
          歡迎與 EASE 討論企業需求，  
          <br />
          我們可以依照員工特性與活動目標，規劃最適合的健康方案。
        </p>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            background: "#2d2d2d",
            color: "#f8f6f2",
            padding: "16px 44px",
            textDecoration: "none",
            fontSize: 13,
            letterSpacing: "0.2em",
            borderRadius: 2,
          }}
        >
          聯絡我們 →
        </a>
      </section>

      <Footer />
    </main>
  );
}