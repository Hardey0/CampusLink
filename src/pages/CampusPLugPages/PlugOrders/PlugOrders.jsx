import { useState }           from "react";
import { AppIcon }             from "../../../components/icons";
import { ORDERS, TAB_PLACEHOLDER, TABS } from "./constants/orders";
import { useOrderFilters }     from "./hooks/useOrderFilters";
import { StatsStrip }          from "./components/StatsStrip";
//import { OrdersTabs }          from "./components/OrdersTabs";
import { OrdersFilterBar }     from "./components/OrdersFilterBar";
import { OrdersTable }         from "./components/OrdersTable";
import { Button, Tabs } from "../../../components/UI"

// ─── Card wrapper shared by both tab views ─────────────────────────────────────

function Card({ children }) {
  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-5">
      {children}
    </div>
  );
}

// ─── Page Header ──────────────────────────────────────────────────────────────

function PageHeader({ totalOrders }) {
  return (
    <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
      <div>
        <h1 className="text-heading-sm font-heading font-extrabold text-primary-navy tracking-tight">
          Orders
        </h1>
        <p className="text-caption text-muted mt-0.5">
          {totalOrders} total orders this month
        </p>
      </div>

      <Button
        variant="card"
        size="md"
        className="inline-flex items-center gap-2 rounded-xl  hover:border-accent hover:text-accent transition-all"
      >
        <AppIcon name="download" className="size-4" />
        Export CSV
      </Button>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("all");

  const {
    search,       setSearch,
    typeFilter,   setTypeFilter,
    campusFilter, setCampusFilter,
    filteredOrders,
  } = useOrderFilters(ORDERS);

  return (
    <main className="lg:ml-60 bg-bg-secondary min-h-screen
      px-3 py-5 sm:px-4 sm:py-6 lg:px-8 md:mb-0 mb-20 transition-colors duration-300">
      <PageHeader totalOrders={31} />

      <StatsStrip />

      <Tabs
        tabs={TABS}
        activeTab={activeTab}
        onChange={setActiveTab}
        variant="underline-blue"
      />

      {/* <OrdersTabs activeTab={activeTab} onTabChange={setActiveTab} /> */}

      {activeTab === "all" ? (
        <Card>
          <OrdersFilterBar
            search={search}           onSearchChange={setSearch}
            typeFilter={typeFilter}   onTypeChange={setTypeFilter}
            campusFilter={campusFilter} onCampusChange={setCampusFilter}
          />
          <OrdersTable orders={filteredOrders} />
        </Card>
      ) : (
        <Card>
          <p className="text-[13px] text-muted">
            {TAB_PLACEHOLDER[activeTab]}
          </p>
        </Card>
      )}
    </main>
  );
}
