import { useState } from "react";
import { AppIcon } from "../../../components/icons";
import { Button, Tabs } from "../../../components/UI";

import {
  STATS,
  LISTINGS,
  TABS,
  TAB_FILTERS,
  CATEGORY_OPTIONS,
  SORT_OPTIONS,
} from "./constants/listings";

import StatCard from "./components/StatCard";
import FilterBar from "./components/FilterBar";
import ListingsGrid from "./components/ListingsGrid";
import CreateHint from "./components/CreateHint";



// ─── Component ────────────────────────────────────────────────────────────────

export default function PlugListings() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0]);
  const [sort, setSort] = useState(SORT_OPTIONS[0]);

  // Filter listings by the active tab id directly — no TAB_FILTERS map needed
  const filtered = activeTab === "all"
    ? LISTINGS
    : LISTINGS.filter((l) => l.status === activeTab);

  /* const filtered = LISTINGS.filter((listing) => {
    const tabFilter = TAB_FILTERS[activeTab];
    const matchTab = tabFilter === "all" || listing.status === tabFilter;
    const matchSearch = listing.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      category === CATEGORY_OPTIONS[0] || listing.category === category;
    return matchTab && matchSearch && matchCategory;
  }); */

  return (
    <div className="lg:ml-60 bg-bg-secondary min-h-screen
      px-3 py-5 sm:px-4 sm:py-6 lg:px-8 md:mb-0 mb-20 transition-colors duration-300">
      <div className="max-w-screen-2xl mx-auto">

        {/* ── Page Header ── */}
        <PageHeader />

        {/* ── Stats Strip ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* ── Tabs ── */}
        <Tabs
          tabs={TABS}
          activeTab={activeTab}
          onChange={setActiveTab}
          variant="underline-blue"
        />

        {/* ── Filters ── */}
        <FilterBar
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          sort={sort}
          onSortChange={setSort}
        />

        {/* ── Listings ── */}
        <ListingsGrid listings={filtered} />

        {/* ── Create CTA ── */}
        <CreateHint onClick={() => { }} />
      </div>
    </div>
  );
}

// ─── Private page-level sub-components ───────────────────────────────────────

function PageHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7">
      <div>
        <h1 className="text-heading-sm font-extrabold font-heading text-primary-navy tracking-tight">
          My Listings
        </h1>
        <p className="text-caption text-muted mt-0.5">
          12 active · 2 inactive · 1 draft
        </p>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <Button
          variant="card"
          size="md"
          className="inline-flex items-center gap-2 rounded-xl hover:border-accent hover:text-accent transition-colors">
          <AppIcon name="download" className="w-4 h-4" />
          Import CSV
        </Button>

        <Button
          variant="accent"
          size="md"
          className="inline-flex items-center gap-2 rounded-xl font-semibold shadow-md shadow-accent/40 transition-colors">
          <AppIcon name="add" className="w-4 h-4" />
          Create Listing
        </Button>
      </div>
    </div>
  );
}

function TabBar({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex border-b border-slate-200 dark:border-slate-700 mb-6 overflow-x-auto scrollbar-none">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => onTabChange(i)}
          className={`px-5 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 -mb-px ${activeTab === i
            ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold"
            : "border-transparent text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
