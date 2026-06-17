import Stars from "./Stars";
import {
  CAMPUS_OPTIONS,
  CATEGORY_OPTIONS,
  CONDITION_OPTIONS,
  RATING_OPTIONS,
} from "../data/marketplaceData";

/**
 * Pure filter form content — no positioning or scrolling of its own.
 * Consumed by both FilterSidebar (desktop) and MobileFilterModal.
 *
 * Props:
 *   conditionName – radio group name string (must differ between desktop/mobile
 *                   so the two groups don't interfere with each other)
 */
export default function FilterPanel({ conditionName = "condition" }) {
  return (
    <>
      {/* Campus + Category checkbox groups */}
      {[
        { label: "Campus", opts: CAMPUS_OPTIONS },
        { label: "Category", opts: CATEGORY_OPTIONS },
      ].map((sec) => (
        <div key={sec.label} className="mb-5">
          <span className="block text-[10.5px] font-bold uppercase tracking-widest
            text-muted mb-2.5">
            {sec.label}
          </span>
          <div className="flex flex-col gap-1.5">
            {sec.opts.map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-2 text-[13px] text-muted cursor-pointer hover:text-text transition-colors"
              >
                <input
                  type="checkbox"
                  defaultChecked={opt.includes("All")}
                  className="accent-primary w-3.5 h-3.5"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}

      {/* Price range */}
      <div className="mb-5">
        <span className="block text-[10.5px] font-bold uppercase tracking-widest
          text-muted mb-2.5">
          Price Range (₦)
        </span>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            className="w-full px-3 py-2 rounded-xl border border-border bg-transparent text-[12px] text-muted  outline-none focus:border-primary text-center transition-all"
          />
          <input
            type="number"
            placeholder="Max"
            className="w-full px-3 py-2 rounded-xl border border-border bg-transparent text-[12px] text-muted outline-none
              focus:border-primary text-center transition-all"
          />
        </div>
      </div>

      {/* Condition radio group */}
      <div className="mb-5">
        <span className="block text-[10.5px] font-bold uppercase tracking-widest
          text-muted mb-2.5">
          Condition
        </span>
        <div className="flex flex-col gap-1.5">
          {CONDITION_OPTIONS.map((c) => (
            <label
              key={c}
              className="flex items-center gap-2 text-[13px] text-muted cursor-pointer"
            >
              <input
                type="radio"
                name={conditionName}
                defaultChecked={c === "Any"}
                className="accent-primary w-3.5 h-3.5"
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      {/* Rating checkboxes */}
      <div className="mb-2">
        <span className="block text-[10.5px] font-bold uppercase tracking-widest
          text-muted mb-2.5">
          Rating
        </span>
        <div className="flex flex-col gap-1.5">
          {RATING_OPTIONS.map((r) => (
            <label
              key={r}
              className="flex items-center gap-2 text-[13px] text-muted cursor-pointer"
            >
              <input type="checkbox" className="accent-primary w-3.5 h-3.5" />
              <Stars rating={r} />
              <span>{r}.0{r < 5 ? "+" : ""}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
