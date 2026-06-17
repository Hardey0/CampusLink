import { AppIcon } from "../../../../components/icons";
import { STATUS_CONFIG } from "../constants/listings";

/**
 * StatusBadge
 * Renders a small pill badge for a listing's status: active | inactive | draft.
 *
 * @param {{ status: "active" | "inactive" | "draft" }} props
 */
export default function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status];

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide ${cfg.className}`}
    >
      <AppIcon name={cfg.iconName} className="size-3" />
      {cfg.label}
    </span>
  );
}
