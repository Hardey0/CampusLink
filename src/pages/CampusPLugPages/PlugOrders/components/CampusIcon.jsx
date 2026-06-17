import { AppIcon } from "../../../../components/icons";

/**
 * Inline campus label with a contextual icon.
 *
 * @param {{ campus: string }} props
 */
export function CampusIcon({ campus }) {
  const iconName = campus === "Covenant U" ? "graduationCap" : "campusPlug";

  return (
    <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
      <AppIcon name={iconName} className="size-4" />
      {campus}
    </span>
  );
}
