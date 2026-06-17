import React, { useState } from "react";
import { AppIcon } from "../../components/icons";
import { Button } from "../../components/UI/Button";
import { Tabs } from "../../components/UI/Tabs";

const STATS = [
  { icon: "orders",  label: "Total Orders", value: "12",      sub: "Since Jan 2025",  subColor: "text-muted"   },
  { icon: "check",   label: "Delivered",    value: "9",       sub: "All received",    subColor: "text-primary" },
  { icon: "pending", label: "In Transit",   value: "2",       sub: "On the way",      subColor: "text-accent"  },
  { icon: "wallet",  label: "Total Spent",  value: "₦47,200", sub: "This semester",   subColor: "text-muted"   },
];

const STAT_ICONS = [
  { color: "text-accent",  bg: "bg-accent-soft"  },
  { color: "text-primary", bg: "bg-primary-soft" },
  { color: "text-accent",  bg: "bg-accent-soft"  },
  { color: "text-accent",  bg: "bg-accent-soft"  },
];

const STATUS_STYLES = {
  delivered:  { bg: "bg-primary-soft", text: "text-primary", icon: "check",   label: "Delivered"  },
  completed:  { bg: "bg-primary-soft", text: "text-primary", icon: "check",   label: "Completed"  },
  enrolled:   { bg: "bg-primary-soft", text: "text-primary", icon: "check",   label: "Enrolled"   },
  transit:    { bg: "bg-accent-soft",  text: "text-accent",  icon: "pending", label: "In Transit" },
  processing: { bg: "bg-warning-soft", text: "text-warning", icon: "pending", label: "Processing" },
  cancelled:  { bg: "bg-danger-soft",  text: "text-danger",  icon: "close",   label: "Cancelled"  },
};

const ALL_ORDERS = [
  {
    id: "ORD-2847", icon: "file", iconBg: "bg-primary-soft", iconColor: "text-primary",
    name: "CSC303 – Computer Architecture Full Textbook",
    meta: "Sold by Admin · Digital Resource",
    status: "delivered", price: "₦800", date: "28 Feb 2026",
    actions: [
      { label: "Download",     icon: "download", style: "primary" },
      { label: "Leave Review", icon: "star",     style: "ghost"   },
      { label: "Buy Again",    icon: "add",      style: "ghost"   },
    ],
  },
  {
    id: "ORD-2831", icon: "orders", iconBg: "bg-accent-soft", iconColor: "text-accent",
    name: "Texas Instruments TI-84 Calculator",
    meta: "Sold by Kolade A. · Physical Item",
    status: "transit", price: "₦18,500", date: "2 Mar 2026",
    actions: [
      { label: "Track Order",    icon: "target",   style: "primary" },
      { label: "Message Seller", icon: "messages", style: "ghost"   },
      { label: "Cancel",         icon: "close",    style: "ghost"   },
    ],
  },
  {
    id: "ORD-2819", icon: "graduationCap", iconBg: "bg-accent-soft", iconColor: "text-accent",
    name: "Tutoring Session — CSC301 Data Structures (1hr)",
    meta: "with Tunde Adesanya · Session",
    status: "completed", price: "₦3,000", date: "24 Feb 2026",
    actions: [
      { label: "Book Again",   icon: "calendar", style: "primary" },
      { label: "Rate Session", icon: "star",     style: "ghost"   },
    ],
  },
  {
    id: "ORD-2800", icon: "file", iconBg: "bg-warning-soft", iconColor: "text-warning",
    name: "CSC307 – Software Engineering Video Series",
    meta: "Sold by Ada N. · Digital Resource",
    status: "processing", price: "₦1,200", date: "1 Mar 2026",
    actions: [
      { label: "Contact Seller", icon: "messages", style: "ghost" },
      { label: "Cancel",         icon: "close",    style: "ghost" },
    ],
  },
  {
    id: "ORD-2788", icon: "palette", iconBg: "bg-accent-soft", iconColor: "text-accent",
    name: "UI/UX Design Fundamentals — Skill Course",
    meta: "by Kolade Adeyemi · Enrolled Course",
    status: "enrolled", price: "₦5,000", date: "18 Feb 2026",
    actions: [
      { label: "Continue Course", icon: "preview", style: "primary" },
      { label: "Leave Review",    icon: "star",    style: "ghost"   },
    ],
  },
];

const ORDER_TABS = [
  { id: "all",       label: "All Orders (12)"  },
  { id: "transit",   label: "In Transit (2)"   },
  { id: "delivered", label: "Delivered (9)"    },
  { id: "digital",   label: "Digital (8)"      },
];

const TAB_FILTER = {
  all:       () => true,
  transit:   (o) => ["transit", "processing"].includes(o.status),
  delivered: (o) => ["delivered", "completed", "enrolled"].includes(o.status),
  digital:   (o) => ["ORD-2847", "ORD-2800", "ORD-2788"].includes(o.id),
};

function OrderCard({ icon, iconBg, iconColor, name, meta, id, status, price, date, actions }) {
  const s = STATUS_STYLES[status];
  return (
    <div className="border border-border rounded-xl p-3 sm:p-4 mb-3 transition-all cursor-pointer hover:border-primary-mid hover:shadow-md bg-card">
      <div className="flex items-start gap-2 sm:gap-3 mb-3">
        <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
          <AppIcon name={icon} className={`w-5 h-5 sm:w-7 sm:h-7 ${iconColor}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs sm:text-sm font-semibold text-text mb-1 leading-snug line-clamp-2">{name}</div>
          <div className="text-xs text-muted mb-2 truncate">{meta} · #{id}</div>
          <span className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-bold ${s.bg} ${s.text}`}>
            <AppIcon name={s.icon} className="w-3 h-3" /> {s.label}
          </span>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-xs sm:text-sm font-bold text-text">{price}</div>
          <div className="text-xs text-muted mt-0.5 hidden sm:block">{date}</div>
        </div>
      </div>
      <div className="text-xs text-muted mb-2 sm:hidden">{date}</div>
      <div className="flex gap-1.5 sm:gap-2 pt-3 border-t border-border flex-wrap">
        {actions.map(({ label, icon: aIcon, style }) => (
          <Button
            key={label}
            variant={style === "primary" ? "primary" : "ghost"}
            size="sm"
            className="flex items-center gap-1 sm:gap-1.5 rounded-lg text-xs"
          >
            <AppIcon name={aIcon} className="w-3 h-3" />
            <span className="hidden sm:inline">{label}</span>
            <span className="sm:hidden">{label.split(" ")[0]}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("all");
  const filtered = ALL_ORDERS.filter(TAB_FILTER[activeTab]);

  return (
    <main className="lg:ml-60 bg-bg-secondary min-h-screen px-3 sm:px-4 py-6 lg:px-8 md:mb-0 mb-20">

      <div className="mb-6">
        <div className="text-xs font-bold tracking-widest uppercase text-muted mb-1">Account</div>
        <h1 className="text-xl sm:text-2xl font-bold font-heading text-text flex items-center gap-2">
          <AppIcon name="orders" className="w-5 h-5 sm:w-6 sm:h-6 text-primary" /> My Orders
        </h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6">
        {STATS.map(({ icon, label, value, sub, subColor }, i) => {
          const { color, bg } = STAT_ICONS[i];
          return (
            <div key={label} className="bg-card rounded-xl border border-border p-3 sm:p-4 hover:-translate-y-0.5 transition-all cursor-pointer hover:shadow-md">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                  <AppIcon name={icon} className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${color}`} />
                </div>
                <span className="truncate">{label}</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-text">{value}</div>
              <div className={`text-xs mt-1 ${subColor}`}>{sub}</div>
            </div>
          );
        })}
      </div>

      {/* Tabs using Tabs component */}
      <Tabs
        tabs={ORDER_TABS}
        activeTab={activeTab}
        onChange={setActiveTab}
        variant="default"
        className="mb-6"
      />

      <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold font-heading text-text text-sm sm:text-base">
            {activeTab === "all"       && "Recent Orders"}
            {activeTab === "transit"   && "In Transit / Processing"}
            {activeTab === "delivered" && "Delivered Orders"}
            {activeTab === "digital"   && "Digital Purchases & Courses"}
          </h2>
          <Button variant="card" size="sm" className="flex items-center gap-1.5 rounded-lg text-xs">
            <AppIcon name="settings" className="w-3.5 h-3.5" /> Filter
          </Button>
        </div>

        {filtered.length > 0 ? (
          filtered.map((order) => <OrderCard key={order.id} {...order} />)
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-14 h-14 rounded-full bg-bg-secondary flex items-center justify-center mb-3">
              <AppIcon name="orders" className="w-7 h-7 text-muted" />
            </div>
            <div className="text-sm font-semibold text-muted">No orders here yet</div>
            <div className="text-xs text-muted mt-1">Orders in this category will appear here</div>
          </div>
        )}
      </div>

    </main>
  );
}