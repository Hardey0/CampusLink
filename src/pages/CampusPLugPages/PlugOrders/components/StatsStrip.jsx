import { STATS } from "../constants/orders";

/**
 * Four-up summary strip at the top of the Orders page.
 * Data comes from the STATS constant; pass a custom `stats` prop to override.
 *
 * @param {{ stats?: typeof STATS }} props
 */
export function StatsStrip({ stats = STATS }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-card rounded-xl px-4 py-4 shadow-sm
            border border-border dark:border-accent/30"
        >
          <div className="text-[22px] font-extrabold text-primary-navy leading-none">
            {s.value}
          </div>
          <div className="text-[12px] text-muted mt-1">
            {s.label}
          </div>
          {s.change && (
            <div className={`text-[11px] mt-1 font-medium ${s.changeColor}`}>
              {s.change}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
