import React, { useState } from "react";
import { Button } from "../../components/UI/Button";

/* ─── Data ───────────────────────────────────────────────────────── */
const REVENUE_BARS = [
  { height: 42, label: "Mon", tip: "₦4,200" },
  { height: 62, label: "Tue", tip: "₦6,800" },
  { height: 45, label: "Wed", tip: "₦5,100" },
  { height: 82, label: "Thu", tip: "₦9,400" },
  { height: 55, label: "Fri", tip: "₦6,200" },
  { height: 72, label: "Sat", tip: "₦8,000" },
  { height: 92, label: "Sun", tip: "₦12,200" },
];

const ALL_TRANSACTIONS = [
  { icon: "💰", bg: "bg-primary-soft", title: "Order #ORD-0078 — Lenovo ThinkPad", sub: "Today · 2:14 PM · Product Sale", amount: "+₦320,000", credit: true },
  { icon: "💰", bg: "bg-primary-soft", title: "Order #ORD-0077 — JBL Tune 510BT", sub: "Today · 10:20 AM · Product Sale", amount: "+₦24,000", credit: true },
  { icon: "🏦", bg: "bg-danger-soft", title: "Withdrawal to GTBank ****4821", sub: "28 Feb · 9:00 AM · Bank Transfer", amount: "-₦80,000", credit: false },
  { icon: "💰", bg: "bg-primary-soft", title: 'Order #ORD-0076 — Dell 24" Monitor', sub: "Yesterday · 4:45 PM · Product Sale", amount: "+₦95,000", credit: true },
  { icon: "🎓", bg: "bg-primary-soft", title: "Tutoring Session — Adeola B.", sub: "24 Feb · CSC301 · 1hr", amount: "+₦3,000", credit: true },
  { icon: "📹", bg: "bg-primary-soft", title: "Course Enrollment — Ada N.", sub: "20 Feb · UI/UX Design Course", amount: "+₦5,000", credit: true },
];

const REVENUE_BREAKDOWN = [
  { icon: "📦", label: "Product Sales", val: "₦530k", pct: 80, color: "bg-accent" },
  { icon: "🎓", label: "Tutoring", val: "₦144k", pct: 22, color: "bg-primary" },
  { icon: "📹", label: "Courses", val: "₦395k", pct: 60, color: "bg-warning" },
  { icon: "🛠️", label: "Services", val: "₦29k", pct: 5, color: "bg-accent-strong" },
];

const PAYOUT_ACCOUNTS = [
  { code: "GTB", bank: "GTBank", num: "**** 4821", isDefault: true, color: "bg-primary-navy" },
  { code: "UBA", bank: "UBA", num: "**** 9034", isDefault: false, color: "bg-accent-strong" },
];

const STATS = [
  { val: "₦664k", label: "Total Earned", change: "All time", changeColor: "text-primary" },
  { val: "₦142.5k", label: "In Wallet", change: null, changeColor: "" },
  { val: "₦25k", label: "Pending", change: "Clearing in 24h", changeColor: "text-warning" },
  { val: "98%", label: "Fulfillment Rate", change: "↑ Excellent", changeColor: "text-primary" },
];

const TX_TABS = [
  { key: "all", label: "All" },
  { key: "credit", label: "Credits" },
  { key: "debit", label: "Withdrawals" },
];

/* ─── Root ───────────────────────────────────────────────────────── */
export default function ProviderWallet() {
  const [txTab, setTxTab] = useState("all");
  const [chartRange, setChartRange] = useState("Last 7 days");

  const filteredTx =
    txTab === "all" ? ALL_TRANSACTIONS :
    txTab === "credit" ? ALL_TRANSACTIONS.filter((t) => t.credit) :
                         ALL_TRANSACTIONS.filter((t) => !t.credit);

  return (
    <main className="lg:ml-60 bg-bg-secondary min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">Wallet</h1>
            <p className="text-muted text-sm mt-1">TechLink Stores · Business Account</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="card" className="hover:border-primary hover:text-primary transition-colors rounded-xl  gap-2">Bank Settings</Button>
            <Button size="sm" className="rounded-xl">Withdraw Funds</Button>
          </div>
        </div>

        {/* Hero Wallet Card */}
        <div className="bg-gradient-to-br from-navy-background to-[#1A3447] rounded-3xl p-6 mb-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent/10 pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 w-64 h-64 rounded-full bg-primary/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Balance Section */}
            <div className="flex-1">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">
                Available Balance
              </p>
              <p className="text-4xl sm:text-5xl font-bold text-white">₦142,500</p>
              <p className="text-white/40 text-xs mt-1 mb-5">+ ₦25,000 pending clearance</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 py-3 rounded-2xl bg-accent text-white text-sm font-semibold hover:brightness-110 transition-all">
                  Withdraw
                </button>
                <button className="flex-1 py-3 rounded-2xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-all">
                  Transfer
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 lg:gap-12 items-end">
              {[
                { label: "This Month", val: "₦68,400", sub: "Revenue" },
                { label: "Total Orders", val: "31", sub: "Completed" },
                { label: "Withdrawal", val: "₦80,000", sub: "Last transfer" },
              ].map((s) => (
                <div key={s.label} className="min-w-[120px]">
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">
                    {s.label}
                  </p>
                  <p className="text-2xl font-bold text-white">{s.val}</p>
                  <p className="text-white/40 text-xs mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {STATS.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-3xl p-5 hover:-translate-y-1 transition-all">
              <div className="text-2xl font-bold text-text">{s.val}</div>
              <div className="text-sm text-muted mt-1">{s.label}</div>
              {s.change && (
                <div className={`text-xs font-medium mt-1.5 ${s.changeColor}`}>{s.change}</div>
              )}
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Revenue Chart */}
            <div className="bg-card border border-border rounded-3xl p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                <h3 className="font-semibold text-lg text-text">Revenue Chart</h3>
                <select
                  value={chartRange}
                  onChange={(e) => setChartRange(e.target.value)}
                  className="bg-bg-secondary border border-border rounded-xl px-4 py-2 text-sm text-text outline-none cursor-pointer self-start sm:self-auto"
                >
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                </select>
              </div>
              <BarChart bars={REVENUE_BARS} />
            </div>

            {/* Transaction History */}
            <div className="bg-card border border-border rounded-3xl p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-lg text-text">Transaction History</h3>
                <button className="text-xs font-semibold text-accent hover:underline">Export ↓</button>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 bg-bg-secondary p-1 rounded-xl overflow-x-auto mb-6 scrollbar-hide">
                {TX_TABS.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setTxTab(tab.key)}
                    className={`px-6 py-2.5 whitespace-nowrap rounded-xl text-sm font-medium transition-all flex-shrink-0
                      ${txTab === tab.key
                        ? "bg-card text-text shadow-sm"
                        : "text-muted hover:text-text"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Transactions */}
              <div className="flex flex-col gap-1">
                {filteredTx.map((tx, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-3 py-3.5 rounded-xl hover:bg-bg-secondary transition-colors cursor-pointer"
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

                {filteredTx.length === 0 && (
                  <p className="text-center text-muted text-sm py-12">
                    No transactions in this category.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Revenue Breakdown */}
            <div className="bg-card border border-border rounded-3xl p-5 sm:p-6">
              <h3 className="font-semibold text-base text-text mb-5">Revenue Breakdown</h3>
              <div className="flex flex-col gap-5">
                {REVENUE_BREAKDOWN.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-muted flex items-center gap-2">
                        {item.icon} {item.label}
                      </span>
                      <span className="text-sm font-bold text-text">{item.val}</span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payout Accounts */}
            <div className="bg-card border border-border rounded-3xl p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-base text-text">Payout Accounts</h3>
                <button className="text-xs font-semibold text-accent hover:underline">+ Add</button>
              </div>
              <div className="flex flex-col gap-3">
                {PAYOUT_ACCOUNTS.map((acct) => (
                  <div
                    key={acct.num}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all cursor-pointer
                      ${acct.isDefault
                        ? "border-accent/40 bg-accent-soft"
                        : "border-border hover:border-accent"
                      }`}
                  >
                    <div className={`w-12 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0 ${acct.color}`}>
                      {acct.code}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-text">{acct.bank}</p>
                      <p className="text-xs text-muted">{acct.num}</p>
                    </div>
                    {acct.isDefault && (
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-accent-soft text-accent">
                        Default
                      </span>
                    )}
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

/* ─── Reusable BarChart ──────────────────────────────────────────── */
function BarChart({ bars }) {
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
              className="w-full bg-accent rounded-t-lg hover:brightness-110 transition-all cursor-pointer"
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