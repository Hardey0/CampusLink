import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppIcon } from "../../icons";
import { Logo } from "../../UI/Logo";

const OVERVIEW = [
  { to: "/plug/dashboard", icon: "dashboard", label: "Dashboard" },
  { to: "/plug/listing", icon: "products", label: "Listing" },
  { to: "/plug/services", icon: "service", label: "Services" },
  { to: "/plug/tutoring", icon: "graduationCap", label: "Tutoring" },
  { to: "/plug/skill-courses", icon: "library", label: "Skill Courses" },
]; 

const BUSINESS = [
  { to: "/plug/orders", icon: "marketplace", label: "Orders", badge: "2" },
  { to: "/plug/messages", icon: "messages", label: "Messages", badge: "5" },
  { to: "/plug/wallet", icon: "wallet", label: "Wallet" },
  { to: "/plug/analytics", icon: "analytics", label: "Analytics" },
];

const SETTINGS = [
  { to: "/plug/profile", icon: "profile", label: "Profile" },
  { to: "/plug/settings", icon: "settings", label: "Settings" },
];

const linkCls =
  "flex items-center gap-2.5 px-3 py-2.5 text-base text-white/60 hover:text-white/90 hover:bg-white/10 rounded-lg transition-all";
const activeCls =
  "flex items-center gap-2.5 px-3 py-2.5 text-base text-accent bg-accent-strong/15 rounded-lg transition-all";

const NavItem = ({ item, pathname, onNavigate }) => (
  <Link
    to={item.to}
    onClick={onNavigate}
    className={pathname === item.to ? activeCls : linkCls}
  >
    <AppIcon name={item.icon} className="w-4 h-4" />
    <span className="text-sm font-medium">{item.label}</span>
    {item.badge && (
      <span className="ml-auto bg-primary-strong text-white text-xs font-bold px-2 py-0.5 rounded-full">
        {item.badge}
      </span>
    )}
  </Link>
);

export function Sidebar({ isOpen, onNavigate }) {
  const location = useLocation();

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 w-60 bg-navy-background z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} border-r border-white/10`}
    >
      <div className="flex items-center p-5 border-b border-white/10 h-16">
        <Logo size="sm" className="flex items-center justify-center text-white" />
        <span className="text-white font-bold text-base">CampusLink</span>
      </div>
      <div className="flex-1 overflow-y-auto">

        <div className="px-3 pt-5 pb-2 text-xs font-bold uppercase text-white/25 tracking-wider">
          Overview
        </div>
        <nav className="space-y-0.5 px-2">
          {OVERVIEW.map((item) => (
            <NavItem
              key={item.to}
              item={item}
              pathname={location.pathname}
              onNavigate={onNavigate}
            />
          ))}
        </nav>

        <div className="px-3 pt-5 pb-2 text-xs font-bold uppercase text-white/25 tracking-wider">
          Business
        </div>
        <nav className="space-y-0.5 px-2">
          {BUSINESS.map((item) => (
            <NavItem
              key={item.to}
              item={item}
              pathname={location.pathname}
              onNavigate={onNavigate}
            />
          ))}
        </nav>

        <div className="px-3 pt-5 pb-2 text-xs font-bold uppercase text-white/25 tracking-wider">
          Settings
        </div>
        <nav className="space-y-0.5 px-2">
          {SETTINGS.map((item) => (
            <NavItem
              key={item.to}
              item={item}
              pathname={location.pathname}
              onNavigate={onNavigate}
            />
          ))}
        </nav>

      </div>


      <div className="border-t border-white/10 p-3">
        <div className="flex items-center gap-2.5 p-2.5 rounded-lg cursor-pointer hover:bg-white/10 transition-all">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs flex-shrink-0">
            A
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-white">Adeola Bello</div>
            <div className="text-xs text-white/35">300L · Computer Science</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
