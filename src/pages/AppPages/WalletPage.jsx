import React, { useState } from "react";
import { AppIcon } from "../../components/icons";
import { Button } from "../../components/UI/Button";

const transactions = [
  {
    id: 1,
    type: "credit",
    iconName: "wallet",
    title: "Wallet Top-up",
    subtitle: "Via Paystack · Ref: TXN-9182",
    amount: "+₦20,000",
    date: "Today",
  },
  {
    id: 2,
    type: "debit",
    iconName: "file",
    title: "CSC303 Textbook",
    subtitle: "Academic Hub · Order #ORD-2847",
    amount: "-₦800",
    date: "28 Feb",
  },
  {
    id: 3,
    type: "debit",
    iconName: "graduationCap",
    title: "Tutoring Session - Tunde A.",
    subtitle: "CSC301 · 1hr · Order #ORD-2819",
    amount: "-₦3,000",
    date: "24 Feb",
  },
  {
    id: 4,
    type: "credit",
    iconName: "creditCard",
    title: "Wallet Top-up",
    subtitle: "Via Bank Transfer · Ref: TXN-8977",
    amount: "+₦15,000",
    date: "20 Feb",
  },
  {
    id: 5,
    type: "debit",
    iconName: "palette",
    title: "UI/UX Design Course",
    subtitle: "Skill Courses · Order #ORD-2788",
    amount: "-₦5,000",
    date: "18 Feb",
  },
];

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredTransactions = transactions.filter((txn) => {
    if (activeTab === "all") return true;
    return txn.type === activeTab;
  });

  return (
    <main className="lg:ml-60 bg-bg-secondary min-h-screen px-6 py-7 lg:px-8 md:mb-0 mb-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <p className="text-xs font-bold tracking-widest uppercase text-muted">
            Account
          </p>
          <h1 className="text-3xl font-bold text-text tracking-tight">
            Wallet
          </h1>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-navy-background to-[#1A3447] text-white rounded-3xl p-8 md:p-10 relative overflow-hidden mb-8">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 left-20 w-52 h-52 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="uppercase text-xs tracking-[2px] text-white/70 font-semibold">
              Available Balance
            </p>
            <p className="text-5xl font-bold mt-3 mb-1">₦24,850.00</p>
            <p className="text-white/70">CampusLink Wallet • Adeola Bello</p>

            <div className="flex flex-wrap gap-3 mt-10">
              <Button className="bg-primary hover:bg-primary-strong text-white px-6 py-3.5 rounded-2xl font-semibold">
                + Add Money
              </Button>

              <Button
                variant="outline"
                className="px-6 py-3.5 rounded-2xl border-primary/30 text-white hover:bg-white/10 cursor-pointer"
              >
                ↑ Transfer
              </Button>

              <Button
                variant="outline"
                className="px-6 py-3.5 rounded-2xl border-white/30 text-white hover:bg-white/10 cursor-pointer"
              >
                ↓ Withdraw
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Quick Send */}
            <div className="bg-card border border-border rounded-3xl p-6">
              <h3 className="font-semibold text-lg mb-5 text-text">
                Quick Send to Contacts
              </h3>
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {["Tunde", "Chisom", "Emeka", "Ada"].map((name, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center cursor-pointer group flex-shrink-0"
                  >
                    <div className="w-14 h-14 bg-bg-hover group-hover:ring-4 ring-primary/30 rounded-2xl flex items-center justify-center transition-all">
                      <AppIcon name="profile" className="w-8 h-8 text-muted" />
                    </div>
                    <p className="text-xs text-muted mt-2 font-medium">{name}</p>
                  </div>
                ))}

                <div className="flex flex-col items-center cursor-pointer group flex-shrink-0">
                  <div className="w-14 h-14 bg-primary-soft text-primary rounded-2xl flex items-center justify-center group-hover:ring-4 ring-primary/30 transition-all">
                    <AppIcon name="add" className="w-8 h-8" />
                  </div>
                  <p className="text-xs text-muted mt-2 font-medium">New</p>
                </div>
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-card border border-border rounded-3xl p-6">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-semibold text-lg text-text">
                  Transaction History
                </h3>
                <Button variant="ghost" size="sm" className="flex items-center gap-1.5">
                  <AppIcon name="download" className="w-4 h-4" />
                  Export
                </Button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-border mb-6">
                {[
                  { label: "All", value: "all" },
                  { label: "Credits", value: "credit" },
                  { label: "Debits", value: "debit" },
                ].map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`px-6 py-3 border-b-2 font-medium transition-all ${
                      activeTab === tab.value
                        ? "border-primary text-primary"
                        : "border-transparent text-muted hover:text-text"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="space-y-1">
                {filteredTransactions.map((txn) => (
                  <div
                    key={txn.id}
                    className="flex items-center gap-4 p-4 hover:bg-bg-hover rounded-2xl cursor-pointer transition"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 
                        ${txn.type === "credit"
                          ? "bg-primary-soft text-primary"
                          : "bg-danger-soft text-danger"}`}
                    >
                      <AppIcon name={txn.iconName} className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-text">{txn.title}</p>
                      <p className="text-sm text-muted truncate">{txn.subtitle}</p>
                    </div>

                    <div className="text-right">
                      <p
                        className={`font-bold ${
                          txn.type === "credit" ? "text-primary" : "text-danger"
                        }`}
                      >
                        {txn.amount}
                      </p>
                      <p className="text-xs text-muted">{txn.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">
            <SpendingSummary />
            <PaymentMethods />
          </div>
        </div>
      </div>
    </main>
  );
}

/* ====================== Sub Components ====================== */

function SpendingSummary() {
  return (
    <div className="bg-card border border-border rounded-3xl p-6">
      <h3 className="font-semibold text-lg mb-6 text-text">Spending Summary</h3>
      <div className="space-y-7">
        <SpendingBar label="Academic Resources" amount={6150} percent={42} color="primary" />
        <SpendingBar label="Tutoring" amount={9000} percent={62} color="accent" />
        <SpendingBar label="Marketplace" amount={32050} percent={80} color="warning" />
      </div>
    </div>
  );
}

function SpendingBar({ label, amount, percent, color }) {
  const colorMap = {
    primary: "bg-primary",
    accent: "bg-accent",
    warning: "bg-warning",
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-muted">{label}</span>
        <span className="font-bold text-text">₦{amount.toLocaleString()}</span>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <div
          className={`${colorMap[color]} h-full rounded-full transition-all`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function PaymentMethods() {
  return (
    <div className="bg-card border border-border rounded-3xl p-6">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-semibold text-lg text-text">Payment Methods</h3>
        <Button variant="ghost" size="sm">
          <AppIcon name="add" className="w-4 h-4" /> Add
        </Button>
      </div>

      <div className="space-y-3">
        <PaymentMethod bank="GTBank" number="**** **** 4821" isDefault />
        <PaymentMethod bank="UBA" number="**** **** 9034" />
        <PaymentMethod bank="Paystack" number="ade@email.com" />
      </div>
    </div>
  );
}

function PaymentMethod({ bank, number, isDefault = false }) {
  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
        isDefault
          ? "border-primary bg-primary-soft"
          : "border-border hover:border-primary/30"
      }`}
    >
      <div className="w-12 h-9 bg-primary text-white text-xs font-bold flex items-center justify-center rounded-lg">
        {bank.slice(0, 3)}
      </div>
      <div className="flex-1 cursor-pointer">
        <p className="font-semibold text-text">{bank}</p>
        <p className="text-sm text-muted">{number}</p>
      </div>
      {isDefault && (
        <span className="text-xs bg-primary-soft text-primary px-3 py-1 rounded-full font-medium">
          Default
        </span>
      )}
    </div>
  );
}