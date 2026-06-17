import { AppIcons } from "../../../../components/icons";

const { laptop, headphones, monitor, smartphone, printer, zap } = AppIcons;

// ─── Stat strip data (static) ─────────────────────────────────────────────────
export const STATS = [
  {
    value: "12",
    label: "Active Listings",
    change: "↑ 2 this week",
    iconName: "grid",
    accent: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
  },
  {
    value: "156",
    label: "Units Sold",
    change: "↑ 22 this month",
    iconName: "orders",
    accent:
      "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400",
  },
  {
    value: "₦68k",
    label: "Revenue (30d)",
    change: "↑ 14% vs last month",
    iconName: "analytics",
    accent:
      "bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-400",
  },
  {
    value: "4.8★",
    label: "Avg. Rating",
    change: "48 reviews",
    iconName: "star",
    accent:
      "bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400",
  },
];

// ─── Listing data ────────────────────────────────────────────────────────────
export const LISTINGS = [
  {
    id: 1,
    icon: laptop,
    category: "Electronics",
    title: "Lenovo ThinkPad E14",
    price: "₦320,000",
    location: "UNILAG, Covenant U",
    sold: 12,
    stock: 3,
    rating: 4.9,
    status: "active",
  },
  {
    id: 2,
    icon: headphones,
    category: "Accessories",
    title: "JBL Tune 510BT Headphones",
    price: "₦24,000",
    location: "UNILAG",
    sold: 20,
    stock: 8,
    rating: 4.7,
    status: "active",
  },
  {
    id: 3,
    icon: monitor,
    category: "Electronics",
    title: 'Dell 24" Monitor',
    price: "₦95,000",
    location: "UNILAG",
    sold: 5,
    stock: 0,
    rating: null,
    status: "inactive",
  },
  {
    id: 4,
    icon: smartphone,
    category: "Electronics",
    title: "iPhone 13 – 256GB",
    price: "₦180,000",
    location: "UNILAG, LASU",
    sold: 7,
    stock: 2,
    rating: 5.0,
    status: "active",
  },
  {
    id: 5,
    icon: printer,
    category: "Electronics",
    title: "HP LaserJet Printer",
    price: "₦85,000",
    location: "Covenant U",
    sold: 3,
    stock: 2,
    rating: null,
    status: "active",
  },
  {
    id: 6,
    // No gamepad icon in AppIcons — using zap as stand-in
    icon: zap,
    category: "Electronics",
    title: "PS5 DualSense Controller",
    price: "₦45,000",
    location: "Not published yet",
    sold: 0,
    stock: 0,
    rating: null,
    status: "draft",
  },
];

// Tab definitions — shape matches the shared Tabs component
export const TABS = [
  { id: "all",      label: "All (15)" },
  { id: "active",   label: "Active (12)" },
  { id: "inactive", label: "Inactive (2)" },
  { id: "draft",    label: "Draft (1)" },
];

// Maps tab index → status filter value used against LISTINGS
export const TAB_FILTERS = ["all", "active", "inactive", "draft"];

// ─── Status badge config ──────────────────────────────────────────────────────
export const STATUS_CONFIG = {
  active: {
    label: "Active",
    iconName: "check",
    className:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  },
  inactive: {
    label: "Inactive",
    iconName: "close",
    className:
      "bg-slate-100 text-slate-500 dark:bg-slate-700/60 dark:text-slate-400",
  },
  draft: {
    label: "Draft",
    iconName: "pending",
    className:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  },
};

// ─── Per-status icon background styles ───────────────────────────────────────
export const ICON_BG = {
  active: "bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
  inactive:
    "bg-slate-100 text-slate-400 dark:bg-slate-700 dark:text-slate-500",
  draft: "bg-amber-50 text-amber-500 dark:bg-amber-900/30 dark:text-amber-500",
};

// ─── Filter bar options ───────────────────────────────────────────────────────
export const CATEGORY_OPTIONS = [
  "All Categories",
  "Electronics",
  "Books",
  "Furniture",
  "Accessories",
];

export const SORT_OPTIONS = [
  "Sort: Newest",
  "Price: High-Low",
  "Best Selling",
];
