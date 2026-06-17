import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppIcon } from "../../icons";

export function Topbar({ onMenuClick, onOpenCart, cartQty }) {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-card border-b border-border flex items-center justify-between px-6 lg:pl-60 transition-all">
      <div className="flex items-center gap-3 flex-1">
        {/* Menu Button - Mobile Only */}
        <button
          onClick={onMenuClick}
          className="lg:hidden flex w-9 h-9 rounded-lg border border-border bg-bg-secondary items-center justify-center transition-all cursor-pointer"
        >
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            className="text-text"
          >
            <path
              d="M1 1h16M1 7h16M1 13h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xs relative">
          <AppIcon
            name="search"
            className="absolute mx-2 left-3 w-3.5 h-3.5 text-muted"
          />
          <input
            type="text"
            placeholder="Search posts, groups, events…"
            className="w-full pl-10 pr-4 mx-2 py-2 border-2 border-border rounded-lg text-sm focus:bg-card/80 focus:border-primary/40 focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-2">
        {/* Cart */}
        <button
          onClick={onOpenCart}
          className="relative w-9 h-9 rounded-lg bg-bg-secondary border border-border flex items-center justify-center  transition-all curaor-pointer text-lg cursor-pointer"
        >
          <AppIcon name="marketplace" className="w-4 h-4 text-text" />

          {cartQty > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
              {cartQty}
            </span>
          )}
        </button>

        {/* Notifications */}
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative w-9 h-9 rounded-lg bg-bg-secondary border border-border flex items-center justify-center transition-all text-lg cursor-pointer"
        >
          <AppIcon name="notifications" className="w-4 h-4 text-navy" />
          <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            5
          </span>
          {showNotifications && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-bg-secondary border-2 border-border rounded-lg shadow-lg z-50 p-3 space-y-2">
              <div className="text-xs font-semibold text-primary-navy mb-2">
                Notifications
              </div>
              {[
                "Your order #123 has been shipped.",
                "New message from Tunde Adesanya.",
                "New review on your tutoring session.",
                "Course enrollment confirmed.",
                "Special offer: 20% off academic resources.",
              ].map((n, i) => (
                <div
                  key={i}
                  className="text-xs p-2 bg-card rounded hover:bg-card/20 cursor-pointer"
                >
                  {n}
                </div>
              ))}
              <div className="text-xs text-primary font-medium mt-2 cursor-pointer hover:underline">
                View all notifications →
              </div>
            </div>
          )}
        </button>

        {/* Avatar */}
        <Link
          to="/profile"
          className="w-9 h-9 rounded-full bg-[#0D1F2D] text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition-all"
        >
          AB
        </Link>
      </div>
    </header>
  );
}
