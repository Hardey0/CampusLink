import { CATEGORY_CHIPS } from "../data/marketplaceData";
import { AppIcon } from "../../../../components/icons";
import { Button } from "../../../../components/UI/Button";

/**
 * Filter bar: mobile search, category chips, campus/sort selects,
 * filter toggle button (mobile), and cart trigger.
 *
 * Props:
 *   search        – string
 *   onSearchChange– (value: string) => void
 *   activeChip    – string
 *   onChipChange  – (chip: string) => void
 *   onOpenFilter  – () => void
 *   onOpenCart    – () => void
 *   cartQty       – number
 */
export default function FilterBar({
  search,
  onSearchChange,
  activeChip,
  onChipChange,
  onOpenFilter,
  // onOpenCart,
  // cartQty,
}) {
  return (
    <div className="flex flex-col gap-2.5 mb-5 sm:mb-6">

      {/* Search — mobile only (desktop search lives in the page header area) */}
      <div className="md:hidden relative">
        <AppIcon name="search" className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          type="text"
          placeholder="Search marketplace…"
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-card
            border border-border text-[13px] text-muted
            placeholder:text-muted outline-none
            focus:border-primary transition-all"
        />
      </div>

      {/* Category chips — always wrap, never scroll */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {CATEGORY_CHIPS.map((chip) => (
          <Button
            variant={`${activeChip === chip ? "primary" : "card"}`}
            size="sm"
            key={chip}
            onClick={() => onChipChange(chip)}
            className={`rounded-full
              font-medium transition-all duration-200 whitespace-nowrap border
              ${activeChip === chip
                ? "border-primary shadow-lg shadow-primary/20"
                : "border-border hover:border-primary hover:text-primary"
              }`}
          >
            {chip}
          </Button>
        ))}
      </div>

      {/* Controls row — selects + filter + cart */}
      <div className="flex items-center gap-2 flex-wrap justify-end">
        {/* Campus select */}
        <select className="px-2.5 sm:px-3 py-1.5 rounded-xl border border-border  bg-card text-muted text-[12px] sm:text-[12.5px] outline-none cursor-pointer max-w-[120px] sm:max-w-none">
          <option>All Campuses</option>
          <option>UNILAG</option>
          <option>Covenant University</option>
          <option>UI</option>
        </select>

        {/* Sort select — hidden on small screens */}
        <select className="px-3 py-1.5 rounded-xl border border-border bg-card text-muted text-[12.5px] outline-none cursor-pointer">
          <option>Trending</option>
          <option>Price: Low–High</option>
          <option>Price: High–Low</option>
          <option>Newest</option>
        </select>

        {/* Mobile filter toggle — hidden on lg+ where the sidebar is visible */}
        <button
          onClick={onOpenFilter}
          className="lg:hidden flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border border-border bg-card text-muted text-[12px] sm:text-[12.5px] whitespace-nowrap cursor-pointer"
        >
          <AppIcon name={"filter"} />
          Filters
        </button>

        {/* Cart trigger */}
        {/* <button
            onClick={onOpenCart}
            className="relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5
              rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white
              dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400
              hover:border-emerald-400 hover:text-emerald-500
              text-[12px] sm:text-[12.5px] transition-all whitespace-nowrap"
          >
            <AppIcon name="shopping-cart" className="size-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartQty > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full
                bg-emerald-500 text-white text-[9px] font-bold flex items-center
                justify-center">
                {cartQty}
              </span>
            )}
          </button> */}
      </div>
    </div>
  );
}
