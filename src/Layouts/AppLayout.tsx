import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import Sidebar from "./SideBar";

export default function AppLayout() {
  const [open, setOpen] = useState(false);
  const [isTopbarVisible, setTopbarVisible] = useState(true);
  const location = useLocation();
  const touchStartY = useRef<number | null>(null);

  const handleToggleDrawer = () => setOpen((prev) => !prev);

  // ✅ แสดง TopBar เฉพาะหน้า Home
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (isHome) {
      setTopbarVisible(true);
    } else {
      setTopbarVisible(false);
    }
  }, [location]);

  // ✅ Gesture แสดง TopBar (สำหรับหน้า Home เท่านั้น)
  useEffect(() => {
    if (!isHome) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current !== null) {
        const deltaY = e.touches[0].clientY - touchStartY.current;
        if (touchStartY.current < 40 && deltaY > 30) {
          setTopbarVisible(true);
        } else if (deltaY < -30) {
          setTopbarVisible(false);
        }
      }
    };

    const handleTouchEnd = () => (touchStartY.current = null);

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isHome]);

  return (
    <div className="relative h-screen overflow-hidden bg-gray-100">
      {/* ✅ TopBar แสดงเฉพาะหน้า Home */}
      {isHome && (
        <div
          className={`fixed top-0 left-0 right-0 z-[1200] transition-transform duration-300 ${isTopbarVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          <TopBar onMenuClick={handleToggleDrawer} />
        </div>
      )}

      <Sidebar
        open={open}
        onClose={handleToggleDrawer}
        role="chief"
        profile={{
          name: "นายเชี่ยวชาญ เฉียบแหลม",
          position: "หัวหน้า รปภ.",
          image: "/chief.jpg",
        }} />

      {/* ✅ Content */}
      <main
        className="h-full w-full"
        style={{
          paddingTop: isHome && isTopbarVisible ? "56px" : "0px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
