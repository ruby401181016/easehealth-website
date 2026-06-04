"use client";



import { useRef, useState } from "react";



const menuItems = [

  { title: "飲食體態", label: "BODY COMP", href: "/programs/body-composition" },

  { title: "健康數據", label: "HEALTH DATA", href: "/programs/health-data" },

  { title: "運動實作", label: "MOVEMENT", href: "/programs/movement" },

  { title: "疼痛修復", label: "RECOVERY", href: "/programs/pain-relief" },

  { title: "習慣養成", label: "LIFESTYLE", href: "/programs/habits-lifestyle" },

  { title: "健康工作坊", label: "WORKSHOPS", href: "/programs/workshops" },

];



const navItems = [

  { title: "首頁", label: "HOME", href: "/" },

  { title: "關於 EASE", label: "ABOUT", href: "/about" },

  { title: "企業服務", label: "SERVICES", href: "/services" },

  { title: "合作案例", label: "CASES", href: "/cases" },

  { title: "健康專欄", label: "BLOG", href: "/blog" },

  { title: "聯絡我們", label: "CONTACT", href: "/contact" },

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

      <a href="/" className="logo" onClick={closeMobileMenu}>EASE</a>



      <button className="mobileButton" onClick={() => setMobileOpen(!mobileOpen)}>

        {mobileOpen ? "✕" : "☰"}

      </button>



      <div className={`navLinks ${mobileOpen ? "show" : ""}`}>

        {/* 前三項導航 */}

        {navItems.slice(0, 3).map((item) => (

          <a key={item.href} href={item.href} className="navLink" onClick={closeMobileMenu} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>

            <span style={{ fontSize: "14px", fontWeight: "500", color: "#1a1a1a" }}>{item.title}</span>

            <span style={{ fontSize: "9px", letterSpacing: "0.15em", color: "#999", textTransform: "uppercase" }}>{item.label}</span>

          </a>

        ))}



        {/* 健康課程選單 */}

        <div className="programWrapper" onMouseEnter={openProgramMenu} onMouseLeave={closeProgramMenu}>

          <button className={`navButton ${openPrograms ? "active" : ""}`} onClick={() => setOpenPrograms(!openPrograms)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>

            <span style={{ fontSize: "14px", fontWeight: "500", color: "#1a1a1a" }}>健康課程</span>

            <span style={{ fontSize: "9px", letterSpacing: "0.15em", color: "#999", textTransform: "uppercase" }}>PROGRAMS</span>

          </button>



          {openPrograms && (

            <div className="programMenu">

              <div className="programMenuInner">

                {menuItems.map((item) => (

                  <a key={item.href} href={item.href} className="programItem" onClick={closeMobileMenu}>

                    <span className="programTitle">{item.title}</span>

                    <span className="programLabel">{item.label}</span>

                  </a>

                ))}

              </div>

            </div>

          )}

        </div>



        {/* 後三項導航 */}

        {navItems.slice(3).map((item) => (

          <a key={item.href} href={item.href} className={`navLink ${item.title === "聯絡我們" ? "cta-link" : ""}`} onClick={closeMobileMenu} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>

            <span style={{ fontSize: "14px", fontWeight: "500", color: "#1a1a1a" }}>{item.title}</span>

            <span style={{ fontSize: "9px", letterSpacing: "0.15em", color: "#999", textTransform: "uppercase" }}>{item.label}</span>

          </a>

        ))}

      </div>

    </nav>

  );

} 

