import React from "react";

export function Avatar({
  initials,
  size = "md",
  variant = "default",
  className = "",
}) {
  const sizes = {
    sm: "w-6 h-6 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  const variants = {
    default: "bg-navy text-white",
    green: "bg-green-500/20 text-green-600",
    blue: "bg-blue-500/20 text-blue-600",
  };

  return (
    <div
      className={`rounded-full flex items-center justify-center font-bold font-syne ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {initials}
    </div>
  );
}
