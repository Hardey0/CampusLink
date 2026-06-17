import { AppIcon } from "../../../../components/icons";
import { CATEGORY_OPTIONS, SORT_OPTIONS } from "../constants/listings";

/**
 * FilterBar
 * Search input + category dropdown + sort dropdown.
 *
 * @param {{
 *   search: string,
 *   onSearchChange: (value: string) => void,
 *   category: string,
 *   onCategoryChange: (value: string) => void,
 *   sort: string,
 *   onSortChange: (value: string) => void,
 * }} props
 */
export default function FilterBar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sort,
  onSortChange,
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {/* Search */}
      <div className="relative flex-1 min-w-[180px]">
        <AppIcon
          name="search"
          className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search listings…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border bg-card text-sm text-text placeholder-muted outline-none focus:border-accent/50 transition-colors"
        />
      </div>

      {/* Category */}
      <SelectFilter
        value={category}
        onChange={onCategoryChange}
        options={CATEGORY_OPTIONS}
      />

      {/* Sort */}
      <SelectFilter
        value={sort}
        onChange={onSortChange}
        options={SORT_OPTIONS}
      />
    </div>
  );
}

// ─── Private helper ───────────────────────────────────────────────────────────

function SelectFilter({ value, onChange, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none pl-3 pr-8 py-2.5 rounded-xl border border-border bg-card text-sm text-primary-navy  outline-none focus:border-accent/50 transition-colors cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
      <AppIcon
        name="chevronDown"
        className="size-4 absolute right-2.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
      />
    </div>
  );
}
