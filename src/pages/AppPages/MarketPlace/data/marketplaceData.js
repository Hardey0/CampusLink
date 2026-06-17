// ── Products ──────────────────────────────────────────────────────────────────
export const PRODUCTS = [
  { id: 1, title: "Lenovo ThinkPad E14 Gen 3", campus: "UNILAG", price: 320000, seller: "Tunde A.", rating: 4.9, reviews: 12, badge: "hot", icon: "laptop", category: "Electronics" },
  { id: 2, title: "iPhone 13 – 256GB Midnight", campus: "Covenant U", price: 180000, seller: "Chisom E.", rating: 4.7, reviews: 7, badge: "new", icon: "smartphone", category: "Electronics" },
  { id: 3, title: "JBL Tune 510BT Headphones", campus: "UNILAG", price: 24000, seller: "Ada N.", rating: 5.0, reviews: 20, badge: null, icon: "headphones", category: "Electronics" },
  { id: 4, title: "Textbook Bundle – Engineering 300L", campus: "UI", price: 8500, seller: "Emeka O.", rating: 4.8, reviews: 34, badge: null, icon: "academicHub", category: "Books" },
  { id: 5, title: "Student Desk Chair – Ergonomic", campus: "LASU", price: 45000, seller: "Funmi A.", rating: 4.6, reviews: 9, badge: "hot", icon: "armchair", category: "Electronics" },
  { id: 6, title: "Dell 24\" Monitor – IPS Panel", campus: "UNILAG", price: 95000, seller: "Kolade A.", rating: 4.9, reviews: 15, badge: null, icon: "monitor", category: "Electronics" },
];

// ── Services ──────────────────────────────────────────────────────────────────
export const SERVICES = [
  { id: 1, title: "Laundry & Ironing", provider: "Emeka Laundry Services", campus: "UNILAG", price: 2500, unit: "load", desc: "Same-day laundry pickup and delivery. Pickup from your hostel, delivered clean and ironed.", icon: "shirt", color: "from-emerald-500/20 to-teal-500/20", iconColor: "text-emerald-500" },
  { id: 2, title: "Printing & Binding", provider: "QuickPrint Campus", campus: "UNILAG", price: 50, unit: "page", desc: "Fast printing, spiral binding, and lamination. Pick up in under 30 minutes on campus.", icon: "printer", color: "from-blue-500/20 to-indigo-500/20", iconColor: "text-blue-500" },
  { id: 3, title: "Photography - Events", provider: "LensKraft", campus: "Covenant U", price: 15000, unit: "event", desc: "Professional event photography for convocations, parties, and graduations. High-res delivery.", icon: "camera", color: "from-purple-500/20 to-violet-500/20", iconColor: "text-purple-500" },
  { id: 4, title: "Meal Prep & Delivery", provider: "Mama Put Digital", campus: "UNILAG", price: 1800, unit: "meal", desc: "Homemade Nigerian food delivered to your hostel. Weekly plans and individual orders available.", icon: "utensils", color: "from-orange-500/20 to-amber-500/20", iconColor: "text-orange-500" },
];

// ── Filter chips ──────────────────────────────────────────────────────────────
export const CATEGORY_CHIPS = ["All", "Electronics", "Books", "Clothing", "Food", "Services"];

// ── Filter options used by FilterPanel ───────────────────────────────────────
export const CAMPUS_OPTIONS = ["All Campuses", "UNILAG", "Covenant University", "Uni. of Ibadan", "OAU"];
export const CATEGORY_OPTIONS = ["All", "Electronics", "Books & Notes", "Clothing", "Food & Snacks", "Services"];
export const CONDITION_OPTIONS = ["Any", "New", "Used – Good", "Used – Fair"];
export const RATING_OPTIONS = [5, 4, 3];
