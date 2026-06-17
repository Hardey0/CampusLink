import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-sm hover:shadow-md transition-all ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
