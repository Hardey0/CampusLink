import React, { useState } from "react";
import { Button } from "../../components/UI/Button";

/* ─── Data ───────────────────────────────────────────────────────── */
const ALL_ORDERS = [
  { id: "ORD-0078", product: "Lenovo ThinkPad E14", buyer: "Adeola B. · UNILAG", amount: 320000, status: "pending" },
  { id: "ORD-0077", product: "JBL Tune 510BT", buyer: "Chisom E. · Covenant U", amount: 24000, status: "processing" },
  { id: "ORD-0076", product: 'Dell 24" Monitor', buyer: "Emeka O. · UNILAG", amount: 95000, status: "completed" },
  { id: "ORD-0075", product: "iPhone 13 – 256GB", buyer: "Funmi A. · LASU", amount: 180000, status: "pending" },
  { id: "ORD-0074", product: "Student Desk Chair", buyer: "Kolade A. · OAU", amount: 45000, status: "cancelled" },
];

const CHART_BARS = [
  { height: 40, label: "Mon", tip: "₦4,200" },
  { height: 60, label: "Tue", tip: "₦6,800" },
  { height: 45, label: "Wed", tip: "₦5,100" },
  { height: 80, label: "Thu", tip: "₦9,400" },
  { height: 55, label: "Fri", tip: "₦6,200" },
  { height: 70, label: "Sat", tip: "₦8,000" },
  { height: 90, label: "Sun", tip: "₦12,200" },
];

const LISTINGS = [
  { icon: "💻", title: "Lenovo ThinkPad E14", price: "₦320,000", meta: "📍 UNILAG, Covenant U", sold: 12, active: true },
  { icon: "🎧", title: "JBL Tune 510BT", price: "₦24,000", meta: "📍 UNILAG", sold: 20, active: true },
  { icon: "🖥️", title: 'Dell 24" Monitor', price: "₦95,000", meta: "📍 UNILAG", sold: 5, active: false },
  { icon: "📱", title: "iPhone 13 – 256GB", price: "₦180,000", meta: "📍 UNILAG, LASU", sold: 7, active: true },
];

const TRANSACTIONS = [
  { icon: "💰", bg: "bg-primary-soft", title: "Order #ORD-0076 payment", sub: "Today · 2:14 PM", amount: "+₦95,000", credit: true },
  { icon: "💰", bg: "bg-primary-soft", title: "Order #ORD-0073 payment", sub: "Yesterday · 11:30 AM", amount: "+₦24,000", credit: true },
  { icon: "🏦", bg: "bg-danger-soft", title: "Withdrawal to GTBank", sub: "28 Feb · 9:00 AM", amount: "-₦80,000", credit: false },
  { icon: "💰", bg: "bg-primary-soft", title: "Order #ORD-0070 payment", sub: "27 Feb · 4:45 PM", amount: "+₦180,000", credit: true },
];

const STATUS_CLASSES = {
  pending: "bg-warning-soft text-warning",
  processing: "bg-accent-soft text-accent",
  completed: "bg-primary-soft text-primary",
  cancelled: "bg-danger-soft text-danger",
};

const ORDER_TABS = [
  { key: "all", label: "All", count: 31 },
  { key: "pending", label: "Pending", count: 4 },
  { key: "processing", label: "Processing", count: 6 },
  { key: "completed", label: "Completed", count: 21 },
];

/* ─── Root ───────────────────────────────────────────────────────── */
export default function ProviderDashboard() {
  const [activeOrderTab, setActiveOrderTab] = useState("all");

  const filteredOrders =
    activeOrderTab === "all"
      ? ALL_ORDERS
      : ALL_ORDERS.filter((o) => o.status === activeOrderTab);

  return (
    <main className="lg:ml-60 bg-bg-secondary min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
              CampusPLug
            </h1>
            <p className="text-muted text-sm mt-1">
              TechLink Stores • Monday, 2 March 2026 • UNILAG & Covenant University
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="card" className="hover:border-primary hover:text-primary transition-colors rounded-xl  gap-2">+ Add Service</Button>
            <Button className="rounded-xl">+ Create Listing</Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <StatCard icon="💰" iconBg="bg-primary-soft" value="₦142,500" label="Wallet Balance" change="↑ ₦18k this week" positive />
          <StatCard icon="📦" iconBg="bg-accent-soft" value="12" label="Active Listings" change="+2 this month" positive />
          <StatCard icon="🛒" iconBg="bg-warning-soft" value="4" label="Pending Orders" change="⚠ Needs attention" warning />
          <StatCard icon="✉️" iconBg="bg-bg-secondary" value="2" label="Unread Messages" change="Reply to earn more" positive />
          <StatCard icon="⭐" iconBg="bg-primary-soft" value="4.8" label="Average Rating" change="48 total reviews" positive />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Revenue Overview */}
            <div className="bg-card border border-border rounded-3xl p-5 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-lg text-text">Revenue Overview</h3>
                <select className="bg-bg-secondary border border-border rounded-xl px-3 py-2 text-sm text-text outline-none cursor-pointer">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>This month</option>
                </select>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4 mb-6">
                <div>
                  <p className="text-2xl font-bold text-text">₦68,400</p>
                  <p className="text-sm text-muted">Total Revenue</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">₦12,200</p>
                  <p className="text-sm text-muted">This Week</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-text">31</p>
                  <p className="text-sm text-muted">Total Orders</p>
                </div>
              </div>

              <RevenueChart />
            </div>

            {/* Recent Orders */}
            <div className="bg-card border border-border rounded-3xl p-5 sm:p-6">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-semibold text-lg text-text">Recent Orders</h3>
                <Button variant="ghost" size="sm">View all orders →</Button>
              </div>
              <OrdersTable
                orders={filteredOrders}
                activeTab={activeOrderTab}
                setActiveTab={setActiveOrderTab}
              />
            </div>

            {/* Active Listings */}
            <div className="bg-card border border-border rounded-3xl p-5 sm:p-6">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-semibold text-lg text-text">My Listings (12 Active)</h3>
                <Button variant="ghost" size="sm">Manage all →</Button>
              </div>
              <ListingsGrid />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">
            <WalletQuickView />
            <QuickStats />
            <RecentTransactions />
            <CampusCoverage />
          </div>
        </div>
      </div>
    </main>
  );
}

/* ─── StatCard ───────────────────────────────────────────────────── */
function StatCard({ icon, iconBg, value, label, change, positive, warning }) {
  return (
    <div className="bg-card border border-border rounded-3xl p-5 hover:-translate-y-1 transition-all cursor-pointer">
      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl mb-4 ${iconBg}`}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-text mb-1">{value}</div>
      <div className="text-sm text-muted mb-1">{label}</div>
      <div className={`text-xs font-medium ${positive ? "text-primary" : warning ? "text-warning" : "text-muted"}`}>
        {change}
      </div>
    </div>
  );
}

/* ─── RevenueChart (Working + Responsive) ────────────────────────── */
function RevenueChart() {
  const [hovered, setHovered] = useState(null);
  const CHART_H = 160;

  return (
    <div className="bg-bg-secondary rounded-2xl px-4 sm:px-6 pt-9 pb-4 relative">
      <span className="absolute top-4 left-4 text-xs font-semibold text-muted">
        Revenue · Last 7 days
      </span>

      <div
        className="flex items-end gap-2 sm:gap-3 w-full"
        style={{ height: CHART_H }}
      >
        {CHART_BARS.map((bar, i) => (
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
              className="w-full bg-primary rounded-t-lg hover:brightness-110 transition-all cursor-pointer"
              style={{ height: `${bar.height}%` }}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-2 sm:gap-3 w-full mt-3">
        {CHART_BARS.map((bar) => (
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

/* ─── OrdersTable ────────────────────────────────────────────────── */
function OrdersTable({ orders, activeTab, setActiveTab }) {
  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-1 bg-bg-secondary p-1 rounded-xl overflow-x-auto mb-6 w-full scrollbar-hide">
        {ORDER_TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2.5 whitespace-nowrap rounded-xl text-sm font-medium transition-all flex-shrink-0
              ${activeTab === tab.key
                ? "bg-card text-text shadow-sm"
                : "text-muted hover:text-text"
              }`}
          >
            {tab.label}
            <span className={`ml-2 text-xs px-2 py-0.5 rounded-full font-bold
              ${activeTab === tab.key ? "bg-primary-soft text-primary" : "bg-border text-muted"}`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[680px]">
          <thead>
            <tr className="border-b border-border bg-bg-secondary">
              {["Order ID", "Product", "Buyer", "Amount", "Status", "Actions"].map((h) => (
                <th
                  key={h}
                  className="text-left px-4 py-4 text-xs font-bold text-muted uppercase tracking-wider last:text-right"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-border last:border-0 hover:bg-bg-secondary transition-colors">
                <td className="px-4 py-4 font-mono text-sm font-bold text-text">#{order.id}</td>
                <td className="px-4 py-4 font-medium text-text">{order.product}</td>
                <td className="px-4 py-4 text-muted text-sm">{order.buyer}</td>
                <td className="px-4 py-4 font-bold text-text">₦{order.amount.toLocaleString()}</td>
                <td className="px-4 py-4">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${STATUS_CLASSES[order.status]}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <div className="flex gap-2 justify-end">
                    <Button variant="ghost" size="sm">View</Button>
                    {order.status === "pending" && <Button size="sm">Confirm</Button>}
                    {order.status === "processing" && <Button size="sm">Ship</Button>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {orders.length === 0 && (
        <div className="text-center py-10 text-muted text-sm">
          No orders in this category yet.
        </div>
      )}
    </div>
  );
}

/* ─── ListingsGrid ───────────────────────────────────────────────── */
function ListingsGrid() {
  const [listings, setListings] = useState(LISTINGS);

  const toggleActive = (i) =>
    setListings((prev) =>
      prev.map((l, idx) => (idx === i ? { ...l, active: !l.active } : l))
    );

  const removeListing = (i) =>
    setListings((prev) => prev.filter((_, idx) => idx !== i));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {listings.map((listing, i) => (
        <div
          key={listing.title}
          className="border border-border rounded-2xl overflow-hidden hover:border-primary transition-all cursor-pointer"
        >
          <div className="h-32 bg-bg-secondary flex items-center justify-center text-5xl relative">
            {listing.icon}
            <span className={`absolute top-3 right-3 px-2.5 py-1 text-xs font-bold rounded-full
              ${listing.active ? "bg-primary-soft text-primary" : "bg-border text-muted"}`}>
              {listing.active ? "Active" : "Inactive"}
            </span>
          </div>
          <div className="p-4">
            <p className="font-semibold text-text text-sm">{listing.title}</p>
            <p className="text-primary font-bold text-sm mt-0.5">{listing.price}</p>
            <p className="text-xs text-muted mt-1">{listing.meta} · {listing.sold} sold</p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => toggleActive(i)}
                className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-accent-soft text-accent hover:bg-accent hover:text-white transition-all"
              >
                {listing.active ? "Edit" : "Activate"}
              </button>
              <button
                onClick={() => removeListing(i)}
                className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-bg-secondary text-muted hover:bg-danger-soft hover:text-danger transition-all"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Other Components ───────────────────────────────────────────── */
function WalletQuickView() {
  return (
    <div className="bg-gradient-to-br from-navy-background to-[#1A3447] rounded-3xl p-6 relative overflow-hidden">
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent/10 pointer-events-none" />
      <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">Available Balance</p>
      <p className="text-4xl font-bold text-white mt-2">₦142,500</p>
      <p className="text-white/40 text-xs mt-1">+ ₦25,000 pending clearance</p>
      <div className="flex gap-3 mt-5">
        <button className="flex-1 py-3 rounded-2xl bg-accent text-white text-sm font-semibold hover:brightness-110 transition-all">
          Withdraw
        </button>
        <button className="flex-1 py-3 rounded-2xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-all">
          History
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-white/10 text-center">
        <div><p className="font-bold text-white text-sm">₦68k</p><p className="text-white/40 text-xs mt-0.5">7-day Rev.</p></div>
        <div><p className="font-bold text-white text-sm">31</p><p className="text-white/40 text-xs mt-0.5">Orders</p></div>
        <div><p className="font-bold text-white text-sm">4.8 ⭐</p><p className="text-white/40 text-xs mt-0.5">Rating</p></div>
      </div>
    </div>
  );
}

function QuickStats() {
  return (
    <div className="bg-card border border-border rounded-3xl p-5">
      <h3 className="font-semibold text-base text-text mb-4">This Month</h3>
      <div className="grid grid-cols-2 gap-3">
        {[
          ["31", "Orders"],
          ["₦68k", "Revenue"],
          ["12", "Listings"],
          ["98%", "Fulfillment"],
        ].map(([val, label]) => (
          <div key={label} className="bg-bg-secondary rounded-2xl p-4 text-center">
            <p className="text-xl font-bold text-text">{val}</p>
            <p className="text-xs text-muted mt-1">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecentTransactions() {
  return (
    <div className="bg-card border border-border rounded-3xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-base text-text">Recent Transactions</h3>
        <button className="text-xs font-semibold text-accent hover:underline">View all</button>
      </div>
      <div className="flex flex-col gap-1">
        {TRANSACTIONS.map((tx, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-bg-secondary transition-colors cursor-pointer"
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0 ${tx.bg}`}>
              {tx.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text truncate">{tx.title}</p>
              <p className="text-xs text-muted">{tx.sub}</p>
            </div>
            <span className={`text-sm font-bold flex-shrink-0 ${tx.credit ? "text-primary" : "text-danger"}`}>
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CampusCoverage() {
  const [campuses] = useState([
    { icon: "🏛️", name: "University of Lagos", role: "Primary", sales: 22, bgColor: "bg-primary-soft", textColor: "text-primary" },
    { icon: "🏫", name: "Covenant University", role: "Secondary", sales: 9, bgColor: "bg-accent-soft", textColor: "text-accent" },
  ]);

  return (
    <div className="bg-card border border-border rounded-3xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-base text-text">Campus Coverage</h3>
        <button className="text-xs font-semibold text-accent hover:underline">Edit</button>
      </div>
      <div className="flex flex-col gap-2">
        {campuses.map((campus, i) => (
          <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-2xl ${campus.bgColor}`}>
            <span className="text-base">{campus.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-text">{campus.name}</p>
              <p className="text-xs text-muted">{campus.role} · {campus.sales} sales</p>
            </div>
            <span className={`text-xs font-bold ${campus.textColor}`}>Active</span>
          </div>
        ))}
        <button className="flex items-center gap-3 px-4 py-3 rounded-2xl border-2 border-dashed border-border text-muted hover:border-primary hover:text-primary transition-all w-full">
          <span className="text-base">➕</span>
          Add another campus
        </button>
      </div>
    </div>
  );
}