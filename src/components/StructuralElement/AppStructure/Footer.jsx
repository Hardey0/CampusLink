import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppIcon } from "../../icons";

export function Footer() {
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", icon: "dashboard", label: "Dashboard" },
    { path: "/marketplace", icon: "products", label: "Products" },
    { path: "/community", icon: "community", label: "Community" },
    { path: "/wallet", icon: "wallet", label: "Wallet" },
    { path: "/profile", icon: "profile", label: "Profile" },
  ];

  return (
    <>
      {/* Mobile Navigation - Bottom nav for mobile devices only */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-0 py-2 md:hidden">
        <div className="flex justify-around items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center gap-1 py-2 px-3 cursor-pointer border-none bg-none"
            >
              <AppIcon name={item.icon} className="w-4 h-4" />
              <span
                className={`text-xs font-medium ${
                  location.pathname === item.path
                    ? "text-green-500"
                    : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
              {location.pathname === item.path && (
                <div className="w-1 h-1 rounded-full bg-green-500"></div>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Bottom spacing for mobile nav
      <div className="h-20 md:h-0" /> */}
    </>
  );
}
