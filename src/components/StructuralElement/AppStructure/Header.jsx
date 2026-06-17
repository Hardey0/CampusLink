import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { Overlay } from "./Overlay";

export function Header({ onOpenCart, cartQty }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Overlay isVisible={sidebarOpen} onClick={closeSidebar} />
      <Sidebar isOpen={sidebarOpen} onNavigate={closeSidebar} />
      <Topbar
        onMenuClick={toggleSidebar}
        onOpenCart={onOpenCart}
        cartQty={cartQty}
      />

      {/* Spacing for fixed header */}
      <div className="h-16" />
    </>
  );
}
