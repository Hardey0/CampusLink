import React, { useState, useMemo } from "react";
import { AppIcon } from "../../components/icons";
import { Button } from "../../components/UI/Button";

const services = [
  {
    id: 1,
    icon: "🔧",
    name: "Laptop Repair & Setup",
    category: "Tech Repairs",
    desc: "Hardware fixes, OS reinstalls, RAM/SSD upgrades, software setup. Available on UNILAG and Covenant U campuses.",
    price: "From ₦5,000",
    orders: 18,
    status: "active",
  },
  {
    id: 2,
    icon: "🖨️",
    name: "Printing & Binding",
    category: "Print Services",
    desc: "A4 printing, colour printing, spiral binding, lamination. Campus pickup or delivery available.",
    price: "From ₦20/page",
    orders: 56,
    status: "active",
  },
  {
    id: 3,
    icon: "🚚",
    name: "Campus Delivery",
    category: "Logistics",
    desc: "Same-day item delivery within UNILAG and Covenant U campuses. Track your delivery in real time.",
    price: "From ₦500",
    orders: 32,
    status: "active",
  },
  {
    id: 4,
    icon: "📱",
    name: "Phone Screen Repair",
    category: "Tech Repairs",
    desc: "iPhone and Android screen replacement, battery swap, charging port repairs. 24–48hr turnaround.",
    price: "From ₦8,000",
    orders: 11,
    status: "active",
  },
  {
    id: 5,
    icon: "📸",
    name: "ID Photo Shoot",
    category: "Photography",
    desc: "Passport photos, student ID photos, professional headshots. Printed or digital delivery within 30 minutes.",
    price: "From ₦1,500",
    orders: 7,
    status: "active",
  },
  {
    id: 6,
    icon: "🔋",
    name: "Power Bank Rental",
    category: "Draft",
    desc: "Rent a power bank by the hour. Pick up at our stall — return within 24 hours.",
    price: "₦300/hr",
    orders: 0,
    status: "draft",
  },
];

export default function ProviderServices() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices = useMemo(() => {
    if (activeTab === "all") return services;

    return services.filter((service) => {
      const cat = service.category.toLowerCase();
      const tab = activeTab.toLowerCase();

      if (tab === "repairs") return cat.includes("repair") || cat.includes("tech");
      if (tab === "logistics" || tab === "delivery") return cat.includes("logistics") || cat.includes("delivery");
      if (tab === "printing") return cat.includes("print");

      return cat.includes(tab);
    });
  }, [activeTab]);

  return (
    <main className="lg:ml-60 bg-bg-secondary min-h-screen px-4 py-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text tracking-tight">Services</h1>
            <p className="text-muted">6 active services across your campuses</p>
          </div>
          <Button className="rounded-xl">+ Add Service</Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard value="6" label="Active Services" change="↑ 1 new this month" />
          <StatCard value="44" label="Service Orders" change="↑ 8 this week" />
          <StatCard value="₦29k" label="Service Revenue" change="↑ 22% vs last month" />
          <StatCard value="4.9⭐" label="Avg. Rating" />
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border mb-6 overflow-x-auto pb-1 scrollbar-hide">
          {[
            { label: "All (6)", value: "all" },
            { label: "Repairs", value: "repairs" },
            { label: "Delivery", value: "logistics" },
            { label: "Printing", value: "printing" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-3 border-b-2 font-medium whitespace-nowrap transition-all text-sm ${
                activeTab === tab.value
                  ? "border-primary text-primary font-semibold"
                  : "border-transparent text-muted hover:text-text"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-muted">
              No services found in this category.
            </div>
          )}
        </div>

        {/* Create New Hint */}
        <div className="mt-12 border-2 border-dashed border-border rounded-3xl p-12 text-center hover:border-primary hover:bg-primary-soft/30 transition cursor-pointer">
          <div className="text-5xl mb-4">➕</div>
          <h3 className="font-semibold text-lg text-text">Add a new service</h3>
          <p className="text-muted mt-2">Define your service, pricing, delivery options, and campus availability</p>
        </div>
      </div>
    </main>
  );
}

/* ====================== SUB COMPONENTS ====================== */

function StatCard({ value, label, change }) {
  return (
    <div className="bg-card border border-border rounded-3xl p-6">
      <div className="text-3xl font-bold text-text">{value}</div>
      <div className="text-sm text-muted mt-1">{label}</div>
      {change && <div className="text-xs text-primary mt-2">{change}</div>}
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="bg-card border border-border rounded-3xl p-6 hover:border-primary transition-all group">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-bg-hover flex items-center justify-center text-3xl flex-shrink-0">
          {service.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-text leading-tight pr-2">{service.name}</h3>
            <span className={`text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 ${
              service.status === "active" 
                ? "bg-primary-soft text-primary" 
                : "bg-warning-soft text-warning"
            }`}>
              {service.status === "active" ? "Active" : "Draft"}
            </span>
          </div>
          <p className="text-xs text-muted mt-1">{service.category}</p>
        </div>
      </div>

      <p className="text-sm text-muted line-clamp-3 mb-6">{service.desc}</p>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-primary font-bold">{service.price}</p>
          <p className="text-xs text-muted">{service.orders} orders</p>
        </div>

        <div className="flex gap-2">
          <Button variant="primary" size="sm" className="rounded-xl px-5">Edit</Button>
          <Button variant="primary" size="sm" className="text-danger hover:bg-danger-soft rounded-xl">Remove</Button>
        </div>
      </div>
    </div>
  );
}