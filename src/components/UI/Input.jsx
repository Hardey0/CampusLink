import React from "react";

export function Input({
  placeholder,
  type = "text",
  variant = "default",
  className = "",
  ...props
}) {
  const variants = {
    default:
      "border-2 border-gray-200 focus:border-green-500 focus:bg-white focus:outline-none bg-gray-100",
    search:
      "border-2 border-gray-200 focus:border-green-500 bg-gray-100 focus:bg-white",
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full px-4 py-2 rounded-lg text-sm font-sans placeholder-gray-500 transition-all ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
