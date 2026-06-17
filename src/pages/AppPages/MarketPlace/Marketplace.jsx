import { useState, useEffect } from "react";
import { AppIcon } from "../../../components/icons";

import { PRODUCTS, SERVICES } from "./data/marketplaceData";

import MarketplaceHeader  from "./components/MarketplaceHeader";
import FilterBar          from "./components/FilterBar";
import FilterSidebar      from "./components/FilterSidebar";
import MobileFilterModal  from "./components/MobileFilterModal";
import ProductsView       from "./components/ProductsView";
import ServicesView       from "./components/ServicesView";
/* import CartDrawer         from "./components/CartDrawer"; */

// Tab definitions — kept here so the page controls its own routing
const TABS = [
  { id: "products", label: "Products", icon: "products" },
  { id: "services", label: "Services", icon: "service"  },
];

export default function Marketplace({ setCartItems, cartOpen }) {
  // ── UI state ────────────────────────────────────────────────────────────────
  const [activeChip,  setActiveChip]  = useState("All");
  const [activeTab,   setActiveTab]   = useState("products");
  const [gridView,    setGridView]    = useState(true);
  //const [cartOpen,    setCartOpen]    = useState(false);
  const [filterOpen,  setFilterOpen]  = useState(false);
  const [search,      setSearch]      = useState("");

  // ── Cart state ───────────────────────────────────────────────────────────────
  //const [cartItems, setCartItems] = useState([]);
  const [saved,     setSaved]     = useState(new Set());

  // Prevent body scroll while any overlay is open
  useEffect(() => {
    document.body.style.overflow = filterOpen || cartOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [filterOpen, cartOpen]);

  // ── Cart handlers ────────────────────────────────────────────────────────────
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  /* const updateQty = (id, delta) =>
    setCartItems((prev) =>
      prev.map((i) => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
    ); */

  /* const removeItem = (id) =>
    setCartItems((prev) => prev.filter((i) => i.id !== id)); */

  const toggleSave = (id) =>
    setSaved((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  // ── Derived values ───────────────────────────────────────────────────────────
  /* const subtotal   = cartItems.reduce((a, b) => a + b.price * b.qty, 0);
  const serviceFee = Math.round(subtotal * 0.01);
  const total      = subtotal + serviceFee; */
  //const cartQty    = cartItems.reduce((a, b) => a + b.qty, 0);

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchChip   = activeChip === "All" || p.category === activeChip;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchChip && matchSearch;
  });

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="lg:ml-60 bg-bg-secondary min-h-screen
      px-3 py-5 sm:px-4 sm:py-6 lg:px-8 md:mb-0 mb-20 transition-colors duration-300">
      <div className="max-w-screen-2xl mx-auto">

        {/* ── Page header ───────────────────────────────────────────────────── */}
        <MarketplaceHeader />

        {/* ── Filter bar (chips + selects + triggers) ───────────────────────── */}
        <FilterBar
          search={search}
          onSearchChange={setSearch}
          activeChip={activeChip}
          onChipChange={setActiveChip}
          onOpenFilter={() => setFilterOpen(true)}
          //onOpenCart={() => setCartOpen(true)}
          //cartQty={cartQty}
        />

        {/* ── Two-column layout: sidebar (desktop) + main content ───────────── */}
        <div className="grid lg:grid-cols-[220px_1fr] gap-5 items-start">

          {/* Desktop sticky sidebar */}
          <FilterSidebar />

          {/* Main content area */}
          <div className="min-w-0">

            {/* Tab switcher */}
            <div className="flex gap-1 bg-card border border-border p-1.5
              rounded-xl w-fit mb-4 sm:mb-5">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg
                    text-[12.5px] sm:text-[13px] font-medium transition-all duration-200
                    ${activeTab === tab.id
                      ? "bg-primary-strong text-white shadow-sm"
                      : "text-muted hover:text-muted/50 cursor-pointer"
                    }`}
                >
                  <AppIcon name={tab.icon} className="size-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {activeTab === "products" && (
              <ProductsView
                products={filteredProducts}
                gridView={gridView}
                onGridView={setGridView}
                onAddToCart={addToCart}
                saved={saved}
                onToggleSave={toggleSave}
              />
            )}

            {activeTab === "services" && (
              <ServicesView services={SERVICES} />
            )}
          </div>
        </div>
      </div>

      {/* ── Mobile filter overlay ─────────────────────────────────────────────── */}
      <MobileFilterModal
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
      />

      {/* ── Cart drawer ───────────────────────────────────────────────────────── */}
      {/* <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onQty={updateQty}
        onRemove={removeItem}
        subtotal={subtotal}
        serviceFee={serviceFee}
        total={total}
      /> */}
    </div>
  );
}
