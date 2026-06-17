import React, { useState } from "react";
import { Button } from "../../components/UI/Button";

/* ─── Data ───────────────────────────────────────────────────────── */
const REVENUE_BARS = [
  { height: 40, label: "Mon", tip: "₦4,200" },
  { height: 60, label: "Tue", tip: "₦6,800" },
  { height: 45, label: "Wed", tip: "₦5,100" },
  { height: 80, label: "Thu", tip: "₦9,400" },
  { height: 55, label: "Fri", tip: "₦6,200" },
  { height: 70, label: "Sat", tip: "₦8,000" },
  { height: 90, label: "Sun", tip: "₦12,200" },
];

const ORDERS_BARS = [
  { height: 30, label: "Mon", tip: "2 orders" },
  { height: 55, label: "Tue", tip: "4 orders" },
  { height: 40, label: "Wed", tip: "3 orders" },
  { height: 75, label: "Thu", tip: "6 orders" },
  { height: 50, label: "Fri", tip: "4 orders" },
  { height: 65, label: "Sat", tip: "5 orders" },
  { height: 88, label: "Sun", tip: "7 orders" },
];

const TOP_PRODUCTS = [
  { rank: 1, icon: "💻", name: "Lenovo ThinkPad E14", sub: "12 units sold", val: "₦320k/unit" },
  { rank: 2, icon: "📱", name: "iPhone 13 – 256GB", sub: "7 units sold", val: "₦180k/unit" },
  { rank: 3, icon: "🎧", name: "JBL Tune 510BT", sub: "20 units sold", val: "₦24k/unit" },
  { rank: 4, icon: "🎨", name: "UI/UX Design Course", sub: "27 students", val: "₦5k each" },
];

const CATEGORIES = [
  { icon: "📦", label: "Products", pct: 80, color: "bg-accent" },
  { icon: "📹", label: "Courses", pct: 15, color: "bg-warning" },
  { icon: "🎓", label: "Tutoring", pct: 4, color: "bg-primary" },
  { icon: "🛠️", label: "Services", pct: 1, color: "bg-purple-500" },
];

const CAMPUSES = [
  { icon: "🏛️", name: "UNILAG", orders: 22, pct: 75, val: "₦480k" },
  { icon: "🏫", name: "Covenant U", orders: 9, pct: 40, val: "₦140k" },
  { icon: "🏫", name: "LASU", orders: 2, pct: 15, val: "₦44k" },
];

const KEY_METRICS = [
  { label: "Avg. Order Value", val: "₦21,400", color: "text-text" },
  { label: "Fulfillment Rate", val: "98%", color: "text-primary" },
  { label: "Repeat Buyers", val: "11", color: "text-text" },
  { label: "Response Rate", val: "95%", color: "text-primary" },
  { label: "Cancellation Rate", val: "2%", color: "text-danger" },
];

const STATS = [
  { val: "₦664k", label: "Total Revenue", change: "↑ 14% vs last month" },
  { val: "31", label: "Orders This Month", change: "↑ 7 vs last month" },
  { val: "87", label: "Course Students", change: "↑ 12 new this week" },
  { val: "4.8⭐", label: "Avg. Rating", change: "48 total reviews" },
];

/* ─── Root ───────────────────────────────────────────────────────── */
export default function ProviderAnalytics() {
  const [range, setRange] = useState("Last 30 days");

  return (
    <main className="lg:ml-60 bg-bg-secondary min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">Analytics</h1>
            <p className="text-muted text-sm mt-1">Performance overview · March 2026</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <select
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="bg-card border border-border rounded-xl px-4 py-2 text-sm text-text outline-none cursor-pointer"
            >
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>This year</option>
            </select>
            <Button variant="card" className="hover:border-primary hover:text-primary transition-colors rounded-xl  gap-2">Export PDF</Button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {STATS.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-3xl p-5 hover:-translate-y-1 transition-all">
              <div className="text-2xl font-bold text-text">{s.val}</div>
              <div className="text-sm text-muted mt-1">{s.label}</div>
              <div className="text-xs text-primary font-medium mt-1.5">{s.change}</div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Revenue Over Time */}
            <div className="bg-card border border-border rounded-3xl p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-lg text-text">Revenue Over Time</h3>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-4 mb-6">
                <div>
                  <p className="text-2xl font-bold text-text">₦68,400</p>
                  <p className="text-sm text-muted">This Week</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">+14%</p>
                  <p className="text-sm text-muted">vs last week</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-text">₦664k</p>
                  <p className="text-sm text-muted">All Time</p>
                </div>
              </div>
              <BarChart bars={REVENUE_BARS} color="bg-accent" />
            </div>

            {/* Orders Volume */}
            <div className="bg-card border border-border rounded-3xl p-5 sm:p-6">
              <h3 className="font-semibold text-lg text-text mb-5">Orders Volume</h3>
              <BarChart bars={ORDERS_BARS} color="bg-primary" />
            </div>

            {/* Top Products */}
            <div className="bg-card border border-border rounded-3xl p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-lg text-text">Top Products</h3>
                <button className="text-xs font-semibold text-accent hover:underline">See all</button>
              </div>
              <div className="flex flex-col gap-3">
                {TOP_PRODUCTS.map((item) => (
                  <div
                    key={item.rank}
                    className="flex items-center gap-3 p-4 rounded-2xl border border-border hover:border-accent hover:bg-accent-soft transition-all cursor-pointer"
                  >
                    <span className="text-sm font-bold text-accent w-5 flex-shrink-0 font-mono">
                      {item.rank}
                    </span>
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-text truncate">{item.name}</p>
                      <p className="text-xs text-primary font-medium">{item.sub}</p>
                    </div>
                    <span className="text-sm font-bold text-text flex-shrink-0">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Revenue by Category */}
            <div className="bg-card border border-border rounded-3xl p-5 sm:p-6">
              <h3 className="font-semibold text-base text-text mb-5">Revenue by Category</h3>
              <div className="flex flex-col gap-5">
                {CATEGORIES.map((cat) => (
                  <div key={cat.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-muted flex items-center gap-2">
                        {cat.icon} {cat.label}
                      </span>
                      <span className="text-sm font-bold text-text">{cat.pct}%</span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${cat.color} transition-all`}
                        style={{ width: `${cat.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Performance */}
            <div className="bg-card border border-border rounded-3xl p-5 sm:p-6">
              <h3 className="font-semibold text-base text-text mb-4">Campus Performance</h3>
              <div className="flex flex-col gap-3">
                {CAMPUSES.map((campus) => (
                  <div
                    key={campus.name}
                    className="flex items-center gap-3 p-4 rounded-2xl border border-border"
                  >
                    <span className="text-2xl">{campus.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-text">{campus.name}</p>
                      <p className="text-xs text-muted">{campus.orders} orders</p>
                    </div>
                    <div className="w-20 flex-shrink-0">
                      <div className="h-1.5 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${campus.pct}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-bold text-text flex-shrink-0">{campus.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-card border border-border rounded-3xl p-5 sm:p-6">
              <h3 className="font-semibold text-base text-text mb-4">Key Metrics</h3>
              <div className="flex flex-col gap-0 divide-y divide-border">
                {KEY_METRICS.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center justify-between py-4"
                  >
                    <span className="text-sm text-muted">{m.label}</span>
                    <span className={`text-sm font-bold ${m.color}`}>{m.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ─── Reusable BarChart (Improved + Reliable) ────────────────────── */
function BarChart({ bars, color }) {
  const [hovered, setHovered] = useState(null);
  const CHART_H = 160;

  return (
    <div className="bg-bg-secondary rounded-2xl px-4 sm:px-6 pt-8 pb-4 relative">
      <div
        className="flex items-end gap-2 sm:gap-3 w-full"
        style={{ height: CHART_H }}
      >
        {bars.map((bar, i) => (
          <div
            key={i}
            className="relative flex-1 flex items-end justify-center"
            style={{ height: "100%" }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === i && (
              <div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 text-xs font-bold bg-primary-navy text-white px-3 py-1 rounded-lg whitespace-nowrap z-10 shadow-md">
                {bar.tip}
              </div>
            )}

            <div
              className={`w-full ${color} rounded-t-lg hover:brightness-110 transition-all cursor-pointer`}
              style={{ height: `${bar.height}%` }}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-2 sm:gap-3 w-full mt-4">
        {bars.map((bar) => (
          <div key={bar.label} className="flex-1 text-center">
            <span className="text-xs sm:text-sm text-muted font-medium">
              {bar.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}