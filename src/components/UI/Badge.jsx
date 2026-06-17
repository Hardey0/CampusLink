import React from "react";

export function Badge({ children, variant = "green", className = "" }) {
  const variants = {
    green: "bg-green-100 text-green-700 border border-green-300",
    blue: "bg-blue-100 text-blue-700 border border-blue-300",
    gray: "bg-gray-100 text-gray-700 border border-gray-300",
    red: "bg-red-100 text-red-700 border border-red-300",
  };

  return (
    <span
      className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
