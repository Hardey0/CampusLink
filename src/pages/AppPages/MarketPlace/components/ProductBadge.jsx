import { AppIcon } from "../../../../components/icons";

/**
 * Absolute-positioned "Hot" or "New" badge rendered inside a product card.
 * The parent card must have `position: relative` (already the case via `group relative`).
 */
export default function ProductBadge({ type }) {
  if (!type) return null;

  return (
    <span
      className={`absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded text-[10px] font-bold
        tracking-wide uppercase flex items-center gap-1
        ${type === "hot" ? "bg-danger-strong text-white" : "bg-primary text-white"}`}
    >
      <AppIcon name={type === "hot" ? "zap" : "tag"} className="size-3" />
      {type === "hot" ? "Hot" : "New"}
    </span>
  );
}
