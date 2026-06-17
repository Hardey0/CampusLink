// ─── Static Data ──────────────────────────────────────────────────────────────

export const ORDERS = [
  {
    id: "#ORD-0078",
    time: "Just now",
    product: "Lenovo ThinkPad E14",
    type: "Product · 1 unit",
    buyer: "Adeola B.",
    level: "300L · CSC",
    amount: "₦320,000",
    campus: "UNILAG",
    status: "pending",
  },
  {
    id: "#ORD-0077",
    time: "2h ago",
    product: "JBL Tune 510BT",
    type: "Product · 1 unit",
    buyer: "Chisom E.",
    level: "300L · CSC",
    amount: "₦24,000",
    campus: "Covenant U",
    status: "processing",
  },
  {
    id: "#ORD-0076",
    time: "Yesterday",
    product: 'Dell 24" Monitor',
    type: "Product · 1 unit",
    buyer: "Emeka O.",
    level: "400L · MAT",
    amount: "₦95,000",
    campus: "UNILAG",
    status: "completed",
  },
  {
    id: "#ORD-0075",
    time: "Yesterday",
    product: "iPhone 13 – 256GB",
    type: "Product · 1 unit",
    buyer: "Funmi A.",
    level: "200L · ENG",
    amount: "₦180,000",
    campus: "LASU",
    status: "pending",
  },
  {
    id: "#ORD-0074",
    time: "2 days ago",
    product: "Laptop Repair Service",
    type: "Service · OS Reinstall",
    buyer: "Kolade A.",
    level: "300L · CSC",
    amount: "₦8,000",
    campus: "UNILAG",
    status: "cancelled",
  },
  {
    id: "#ORD-0073",
    time: "3 days ago",
    product: "UI/UX Design Course",
    type: "Skill Course · Enrollment",
    buyer: "Ada N.",
    level: "400L · CSC",
    amount: "₦5,000",
    campus: "UNILAG",
    status: "completed",
  },
];

export const TABS = [
  { id: "all",        label: "All (31)" },
  { id: "pending",    label: "Pending (4)" },
  { id: "processing", label: "Processing (6)" },
  { id: "completed",  label: "Completed (21)" },
];

export const STATS = [
  {
    value: "4",
    label: "Pending",
    change: "Needs action",
    changeColor: "text-amber-600 dark:text-amber-400",
  },
  {
    value: "6",
    label: "Processing",
    change: null,
  },
  {
    value: "21",
    label: "Completed",
    change: "↑ 98% fulfillment",
    changeColor: "text-primary",
  },
  {
    value: "₦664k",
    label: "Total Revenue",
    change: "↑ 14% vs last month",
    changeColor: "text-primary",
  },
];

export const TYPE_OPTIONS   = ["All Types", "Products", "Services", "Tutoring", "Courses"];
export const CAMPUS_OPTIONS = ["All Campuses", "UNILAG", "Covenant U", "LASU"];

export const TAB_PLACEHOLDER = {
  pending:    "Showing 4 pending orders requiring your action.",
  processing: "Showing 6 orders in processing.",
  completed:  "Showing 21 completed orders.",
};

export const STATUS_STYLES = {
  pending:    "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  processing: "bg-accent-soft  text-accent",
  completed:  "bg-primary-soft text-primary",
  cancelled:  "bg-danger-soft text-danger-strong",
};

export const TABLE_HEADERS = [
  "Order ID",
  "Product / Service",
  "Buyer",
  "Amount",
  "Campus",
  "Status",
  "Actions",
];
