import React, { useState } from "react";
import { AppIcon } from "../../components/icons";
import { Button } from "../../components/UI/Button";
import { Tabs } from "../../components/UI/Tabs";

const STATS = [
  {
    icon: "wallet",
    label: "Wallet Balance",
    value: "₦24,500",
    change: "Paystack connected ✓",
    changeColor: "text-muted",
  },
  {
    icon: "orders",
    label: "Active Orders",
    value: "3",
    change: "↑ 1 new today",
    changeColor: "text-primary",
  },
  {
    icon: "file",
    label: "Resources Unlocked",
    value: "14",
    change: "↑ 2 this week",
    changeColor: "text-primary",
  },
  {
    icon: "graduationCap",
    label: "Tutor Sessions",
    value: "2",
    change: "Next: Today 4PM",
    changeColor: "text-muted",
  },
];

const STAT_ICONS = [
  { color: "text-primary", bg: "bg-primary-soft" },
  { color: "text-accent", bg: "bg-accent-soft" },
  { color: "text-accent", bg: "bg-accent-soft" },
  { color: "text-warning", bg: "bg-warning-soft" },
];

const PRODUCTS = [
  {
    icon: "laptop",
    iconColor: "text-accent",
    bg: "bg-accent-soft",
    title: "Lenovo ThinkPad E14",
    location: "UNILAG",
    price: "₦320k",
    rating: "4.8",
    sold: "12",
  },
  {
    icon: "phone",
    iconColor: "text-primary",
    bg: "bg-primary-soft",
    title: "iPhone 13 (Used)",
    location: "Covenant U",
    price: "₦180k",
    rating: "4.6",
    sold: "7",
  },
  {
    icon: "headphones",
    iconColor: "text-accent",
    bg: "bg-accent-soft",
    title: "JBL Headphones",
    location: "Oduduwa U",
    price: "₦24,000",
    rating: "4.9",
    sold: "20",
  },
  {
    icon: "shirt",
    iconColor: "text-warning",
    bg: "bg-warning-soft",
    title: "Laundry Service",
    location: "UNILAG",
    price: "₦2,500",
    rating: "4.7",
    sold: "50+",
  },
];

const TUTORS = [
  {
    icon: "profile",
    iconColor: "text-primary",
    bg: "bg-primary-soft",
    name: "Tunde Adesanya",
    subjects: "Data Structures · Algorithms · CSC301",
    price: "₦3,000/hr",
    rating: "4.9",
  },
  {
    icon: "graduationCap",
    iconColor: "text-accent",
    bg: "bg-accent-soft",
    name: "Chisom Eze",
    subjects: "Thermodynamics · Physics 201",
    price: "₦2,500/hr",
    rating: "4.7",
  },
  {
    icon: "profile",
    iconColor: "text-accent",
    bg: "bg-accent-soft",
    name: "Emeka Obi",
    subjects: "Linear Algebra · Calculus 300",
    price: "₦2,000/hr",
    rating: "4.8",
  },
];

const COURSES = [
  {
    code: "CSC301",
    name: "Data Structures & Algorithms",
    resources: 8,
    tutors: 3,
  },
  { code: "CSC303", name: "Computer Organisation", resources: 5, tutors: 2 },
  { code: "CSC305", name: "Database Management", resources: 10, tutors: 4 },
  { code: "MAT301", name: "Mathematical Methods", resources: 6, tutors: 2 },
];

const QUICK_ACTIONS = [
  { icon: "add", label: "Sell Item" },
  { icon: "file", label: "Order Resources" },
  { icon: "graduationCap", label: "Book Tutor" },
  { icon: "community", label: "Community" },
];

const ACTIVITY = [
  {
    icon: "wallet",
    bg: "bg-primary-soft",
    color: "text-primary",
    text: "Wallet funded with",
    bold: "₦10,000",
    suffix: "via Paystack",
    time: "2m",
  },
  {
    icon: "graduationCap",
    bg: "bg-accent-soft",
    color: "text-accent",
    text: "Tunde confirmed your session for",
    bold: "4:00 PM",
    suffix: "",
    time: "1h",
  },
  {
    icon: "orders",
    bg: "bg-warning-soft",
    color: "text-warning",
    text: "Your order",
    bold: "#ORD-0042",
    suffix: "has been shipped",
    time: "3h",
  },
  {
    icon: "academicHub",
    bg: "bg-accent-soft",
    color: "text-accent",
    text: "",
    bold: "CSC301",
    suffix: "resources unlocked",
    time: "1d",
  },
];

const MY_RESOURCES = [
  {
    icon: "file",
    bg: "bg-primary-soft",
    color: "text-primary",
    course: "CSC301",
    label: "Data Structures Notes",
    tag: "↓ PDF",
    tagColor: "text-primary",
  },
  {
    icon: "file",
    bg: "bg-accent-soft",
    color: "text-accent",
    course: "CSC305",
    label: "Past Questions 2023",
    tag: "↓ PDF",
    tagColor: "text-primary",
  },
  {
    icon: "lock",
    bg: "bg-accent-soft",
    color: "text-accent",
    course: "MAT301",
    label: "Tutorial Videos",
    tag: "Locked",
    tagColor: "text-warning",
  },
];

const SKILLS = [
  {
    icon: "palette",
    iconColor: "text-accent",
    bg: "bg-accent-soft",
    name: "UI/UX Design Fundamentals",
    sub: "by Kolade Adeyemi · 12 students",
    price: "₦5,000",
  },
  {
    icon: "laptop",
    iconColor: "text-accent",
    bg: "bg-accent-soft",
    name: "Web Development Bootcamp",
    sub: "by Ada Nwosu · 8 students",
    price: "₦8,000",
  },
];

const VIEW_TABS = [
  {
    id: "marketplace",
    icon: <AppIcon name="marketplace" className="w-3.5 h-3.5" />,
    label: "Marketplace",
  },
  {
    id: "academic",
    icon: <AppIcon name="academicHub" className="w-3.5 h-3.5" />,
    label: "Academic Hub",
  },
];

function StatCard({ icon, label, value, change, changeColor, idx }) {
  const { color, bg } = STAT_ICONS[idx] || STAT_ICONS[0];
  return (
    <div className="bg-card rounded-xl border border-border p-4 hover:-translate-y-0.5 transition-all hover:shadow-[var(--shadow-card)] cursor-pointer">
      <div className="flex items-center gap-2 text-xs font-medium text-muted mb-2">
        <div
          className={`w-7 h-7 rounded-lg ${bg} flex items-center justify-center`}
        >
          <AppIcon name={icon} className={`w-3.5 h-3.5 ${color}`} />
        </div>
        <span className="truncate">{label}</span>
      </div>
      <div className="text-xl sm:text-2xl font-bold font-heading text-text">
        {value}
      </div>
      <div className={`text-xs mt-1 ${changeColor}`}>{change}</div>
    </div>
  );
}

function WalletCard() {
  return (
    <div className="relative rounded-xl p-5 text-white overflow-hidden bg-gradient-to-br from-navy-background to-[#1A3447]">
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/10" />
      <div className="absolute -bottom-6 right-4 w-16 h-16 rounded-full bg-primary/10" />
      <div className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">
        Wallet Balance
      </div>
      <div className="relative z-10 text-3xl font-bold font-heading mb-4">
        ₦24,500.00
      </div>
      <div className="relative z-10 flex gap-2">
        <Button variant="primary" size="sm" className="flex-1 rounded-lg">
          Fund Wallet
        </Button>
        <button className="flex-1 py-2 rounded-lg text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors border-none cursor-pointer">
          Withdraw
        </button>
      </div>
      <div className="flex gap-4 mt-4 pt-3 border-t border-white/10">
        {[
          { v: "₦48k", l: "Total Spent" },
          { v: "₦12k", l: "Total Earned" },
          { v: "3", l: "Orders" },
        ].map(({ v, l }) => (
          <div key={l} className="flex-1 text-center">
            <div className="text-sm font-bold text-white">{v}</div>
            <div className="text-xs text-white/35">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCard({
  icon,
  iconColor,
  bg,
  title,
  location,
  price,
  rating,
  sold,
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden cursor-pointer transition-all hover:border-primary-mid hover:shadow-md hover:-translate-y-0.5 bg-card">
      <div className={`h-20 sm:h-24 flex items-center justify-center ${bg}`}>
        <AppIcon
          name={icon}
          className={`w-8 h-8 sm:w-10 sm:h-10 ${iconColor}`}
        />
      </div>
      <div className="p-2 sm:p-2.5">
        <div className="text-xs font-semibold text-text mb-1 truncate">
          {title}
        </div>
        <div className="flex items-center gap-1 text-xs text-muted mb-1.5 truncate">
          <AppIcon name="campusPrimary" className="w-3 h-3 flex-shrink-0" />{" "}
          {location}
        </div>
        <div className="flex items-center justify-between gap-1">
          <span className="text-xs sm:text-sm font-bold text-primary truncate">
            {price}
          </span>
          <button className="w-6 h-6 rounded-md bg-primary-soft border-none cursor-pointer flex items-center justify-center hover:bg-primary hover:text-white transition-colors flex-shrink-0">
            <AppIcon name="add" className="w-3 h-3 text-primary" />
          </button>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted mt-1">
          <AppIcon name="star" className="w-3 h-3 text-warning flex-shrink-0" />{" "}
          {rating} · {sold} sold
        </div>
      </div>
    </div>
  );
}

function TutorRow({ icon, iconColor, bg, name, subjects, price, rating }) {
  return (
    <div className="flex items-center gap-3 p-3 border border-border rounded-xl cursor-pointer transition-all hover:border-primary-mid hover:bg-primary-soft">
      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${bg}`}>
        <AppIcon name={icon} className={`w-4 h-4 sm:w-5 sm:h-5 ${iconColor}`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-text truncate">{name}</div>
        <div className="text-xs text-muted truncate">{subjects}</div>
      </div>
      <div className="text-right flex-shrink-0">
        <div className="text-xs sm:text-sm font-bold text-text">{price}</div>
        <div className="flex items-center justify-end gap-1 text-xs text-muted">
          <AppIcon name="star" className="w-3 h-3 text-warning" /> {rating}
        </div>
        <Button variant="primary" size="sm" className="mt-1 rounded-lg text-xs">
          Book
        </Button>
      </div>
    </div>
  );
}

function CourseCard({ code, name, resources, tutors }) {
  return (
    <div className="p-3 sm:p-3.5 border border-border rounded-xl cursor-pointer transition-all hover:border-primary-mid hover:bg-primary-soft bg-card">
      <span className="inline-block text-xs font-bold tracking-wider uppercase text-primary bg-primary-soft px-2 py-0.5 rounded mb-2">
        {code}
      </span>
      <div className="text-sm font-semibold text-text mb-1 leading-snug line-clamp-2">
        {name}
      </div>
      <div className="flex items-center gap-2 sm:gap-3 text-xs text-muted flex-wrap">
        <span className="flex items-center gap-1">
          <AppIcon name="file" className="w-3 h-3" /> {resources}
        </span>
        <span className="flex items-center gap-1">
          <AppIcon name="graduationCap" className="w-3 h-3" /> {tutors}
        </span>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("marketplace");

  return (
    <main className="lg:ml-60 bg-bg-secondary min-h-screen px-3 sm:px-4 py-6 lg:px-8 md:mb-0 mb-20">
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold font-heading text-text mb-1">
          Good morning, <span className="text-primary">Adeola 👋</span> 
        </h1>
        <p className="text-xs sm:text-sm text-muted">
          Monday, 2 March 2026 · 300 Level · Computer Science · CampusPlug
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6">
        {STATS.map((s, i) => (
          <StatCard key={s.label} {...s} idx={i} />
        ))}
      </div>

      {/* View toggle using Tabs pills variant */}
      <Tabs
        tabs={VIEW_TABS}
        activeTab={activeTab}
        onChange={setActiveTab}
        variant="pills"
        className="mb-5"
      />

      {activeTab === "marketplace" && (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5 items-start">
          <div className="space-y-5">
            <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold font-heading text-text flex items-center gap-2 text-sm sm:text-base">
                  <AppIcon
                    name="marketplace"
                    className="w-4 h-4 text-primary flex-shrink-0"
                  />{" "}
                  Trending on Campus
                </h2>
                <a className="text-xs font-medium text-primary cursor-pointer hover:underline flex-shrink-0">
                  See all →
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {PRODUCTS.map((p) => (
                  <ProductCard key={p.title} {...p} />
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold font-heading text-text flex items-center gap-2 text-sm sm:text-base">
                  <AppIcon
                    name="graduationCap"
                    className="w-4 h-4 text-primary flex-shrink-0"
                  />{" "}
                  Recommended Tutors
                </h2>
                <a className="text-xs font-medium text-primary cursor-pointer hover:underline flex-shrink-0">
                  See all →
                </a>
              </div>
              <div className="space-y-2.5">
                {TUTORS.map((t) => (
                  <TutorRow key={t.name} {...t} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <WalletCard />
            <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
              <h2 className="font-bold font-heading text-text mb-3 text-sm sm:text-base">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {QUICK_ACTIONS.map(({ icon, label }) => (
                  <Button
                    key={label}
                    variant="card"
                    className="flex flex-col items-center gap-1.5 py-3 sm:py-3.5 rounded-xl w-full hover:border-primary hover:bg-primary-soft"
                  >
                    <AppIcon name={icon} className="w-5 h-5 text-primary" />
                    <span className="text-xs font-semibold text-text">
                      {label}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold font-heading text-text text-sm sm:text-base">
                  Recent Activity
                </h2>
                <a className="text-xs font-medium text-primary cursor-pointer hover:underline">
                  See all
                </a>
              </div>
              <div className="space-y-1">
                {ACTIVITY.map(
                  ({ icon, bg, color, text, bold, suffix, time }, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 sm:gap-2.5 p-2 rounded-lg cursor-pointer hover:bg-bg-secondary transition-colors"
                    >
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}
                      >
                        <AppIcon
                          name={icon}
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${color}`}
                        />
                      </div>
                      <div className="text-xs text-text leading-snug flex-1 min-w-0">
                        {text} <strong>{bold}</strong> {suffix}
                      </div>
                      <div className="text-xs text-muted flex-shrink-0">
                        {time}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "academic" && (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5 items-start">
          <div className="space-y-5">
            <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold font-heading text-text flex items-center gap-2 text-sm sm:text-base">
                  <AppIcon
                    name="academicHub"
                    className="w-4 h-4 text-primary flex-shrink-0"
                  />{" "}
                  My Courses — CSC 300L
                </h2>
                <a className="text-xs font-medium text-primary cursor-pointer hover:underline flex-shrink-0">
                  Full Hub →
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {COURSES.map((c) => (
                  <CourseCard key={c.code} {...c} />
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold font-heading text-text flex items-center gap-2 text-sm sm:text-base">
                  <AppIcon
                    name="target"
                    className="w-4 h-4 text-primary flex-shrink-0"
                  />{" "}
                  Skill Learning
                </h2>
                <a className="text-xs font-medium text-primary cursor-pointer hover:underline flex-shrink-0">
                  Browse all
                </a>
              </div>
              <div className="space-y-2.5">
                {SKILLS.map(({ icon, iconColor, bg, name, sub, price }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 p-3 border border-border rounded-xl cursor-pointer hover:border-primary-mid hover:bg-primary-soft transition-all"
                  >
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${bg}`}
                    >
                      <AppIcon
                        name={icon}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${iconColor}`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-text truncate">
                        {name}
                      </div>
                      <div className="text-xs text-muted truncate">{sub}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-bold text-text mb-1">
                        {price}
                      </div>
                      <Button
                        variant="accent"
                        size="sm"
                        className="rounded-lg text-xs"
                      >
                        Enroll
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <WalletCard />
            <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold font-heading text-text text-sm sm:text-base">
                  My Resources
                </h2>
                <a className="text-xs font-medium text-primary cursor-pointer hover:underline">
                  View library
                </a>
              </div>
              <div className="space-y-1">
                {MY_RESOURCES.map(
                  ({ icon, bg, color, course, label, tag, tagColor }) => (
                    <div  
                      key={label}
                      className="flex items-center gap-2 sm:gap-2.5 p-2 rounded-lg cursor-pointer hover:bg-bg-secondary transition-colors"
                    >
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}
                      >
                        <AppIcon
                          name={icon}
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${color}`}
                        />
                      </div>
                      <div className="text-xs text-text flex-1 truncate min-w-0">
                        <strong>{course}</strong> — {label}
                      </div>
                      <span
                        className={`text-xs font-semibold flex-shrink-0 ${tagColor}`}
                      >
                        {tag}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
