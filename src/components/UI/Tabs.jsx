import React from "react";

export function Tabs({
  tabs,
  activeTab,
  onChange,
  variant = "default",
  className = "",
}) {
  return (
    <div
      className={`${
        variant === "pills"
          ? "flex gap-2 mb-6"
          : variant === "underline-blue"
          ? "flex border-b border-border mb-6 overflow-x-auto scrollbar-none"
          : "border-b-2 border-border mb-6 overflow-x-auto"  // default — unchanged
      } ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`${
            variant === "pills"
              ? `px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`
              : variant === "underline-blue"
              ? `px-5 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 -mb-px ${
                  activeTab === tab.id
                    ? "border-accent text-accent font-semibold"
                    : "border-transparent text-muted hover:text-primary-navy dark:hover:text-slate-300"
                }`
              : `px-5 py-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${  // default — unchanged
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted hover:text-primary-navy"
                }`
          }`}
        >
          {tab.icon && <span className="mr-2">{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
}