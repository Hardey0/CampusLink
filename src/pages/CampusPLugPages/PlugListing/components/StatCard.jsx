import { AppIcon } from "../../../../components/icons";

/**
 * StatCard
 * A summary metric tile shown in the stats strip at the top of the page.
 *
 * @param {{
 *   value: string,
 *   label: string,
 *   change: string,
 *   iconName: string,
 *   accent: string   // Tailwind classes for the icon background + colour
 * }} props
 */
export default function StatCard({ value, label, change, iconName, accent }) {
  return (
    <div className="bg-card rounded-2xl p-4 border border-border dark:border-accent/30 shadow-sm flex flex-col gap-1">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
          {label}
        </span>
        <span
          className={`size-8 rounded-xl flex items-center justify-center ${accent}`}
        >
          <AppIcon name={iconName} className="size-4" />
        </span>
      </div>

      <div className="font-extrabold text-2xl text-primary-navy leading-none">
        {value}
      </div>

      <div className="text-caption text-primary font-medium mt-0.5">
        {change}
      </div>
    </div>
  );
}
