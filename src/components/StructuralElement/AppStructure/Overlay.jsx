import React from "react";

export function Overlay({ isVisible, onClick }) {
  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden transition-all ${
        isVisible
          ? "opacity-100 pointer-events-auto bg-white/20 backdrop-blur-md"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={onClick}
    />
  );
}
