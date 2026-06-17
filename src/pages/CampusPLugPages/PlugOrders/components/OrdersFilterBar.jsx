import { AppIcon } from "../../../../components/icons";
import { TYPE_OPTIONS, CAMPUS_OPTIONS } from "../constants/orders";

const SELECT_CLASS =
  "appearance-none bg-card border border-border " +
  "rounded-lg px-3 py-2 pr-7 text-[13px] text-primary-navy/70 " +
  "outline-none focus:border-accent/50 " +
  "transition-colors cursor-pointer " +
  "bg-[url(\"data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath " +
  "d='M1 1l4 4 4-4' stroke='%236B7A8A' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\")] " +
  "bg-no-repeat bg-[right_10px_center]";

/**
 * Search input + Type + Campus dropdowns for the "All" tab.
 *
 * @param {{
 *   search: string,
 *   onSearchChange: (v: string) => void,
 *   typeFilter: string,
 *   onTypeChange: (v: string) => void,
 *   campusFilter: string,
 *   onCampusChange: (v: string) => void,
 *   typeOptions?: string[],
 *   campusOptions?: string[],
 * }} props
 */
export function OrdersFilterBar({
  search,
  onSearchChange,
  typeFilter,
  onTypeChange,
  campusFilter,
  onCampusChange,
  typeOptions   = TYPE_OPTIONS,
  campusOptions = CAMPUS_OPTIONS,
}) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 mb-4">
      {/* Search */}
      <div className="relative flex-1 min-w-44">
        <AppIcon
          name="search"
          className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
        />
        <input
          type="text"
          placeholder="Search by order ID, product or buyer…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-8 pr-3 py-2 border-[1.5px] border-border rounded-lg text-[13px] bg-card  text-primary-navy/90 placeholder-muted/70 outline-none focus:border-accent/70 transition-colors"
        />
      </div>

      {/* Type */}
      <div className="relative">
        <select
          value={typeFilter}
          onChange={(e) => onTypeChange(e.target.value)}
          className={SELECT_CLASS}
        >
          {typeOptions.map((o) => <option key={o}>{o}</option>)}

        </select>

        <AppIcon name="chevronDown" className="size-4 absolute right-2.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
      </div>

      {/* Campus */}
      <div className="relative">
        <select
          value={campusFilter}
          onChange={(e) => onCampusChange(e.target.value)}
          className={SELECT_CLASS}
        >
          {campusOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
        <AppIcon name="chevronDown" className="size-4 absolute right-2.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
      </div>
      
    </div>
  );
}
