import { AppIcon } from "../../../../components/icons";
import { ICON_BG } from "../constants/listings";
import { Button } from "../../../../components/UI";
import StatusBadge from "./StatusBadge";

/**
 * ListingCard
 * Renders a single product listing card including thumbnail, metadata,
 * stats, and context-sensitive action buttons.
 *
 * @param {{ listing: import("../constants/listings").Listing }} props
 */
export default function ListingCard({ listing }) {
  const ProductIcon = listing.icon;
  const iconBg = ICON_BG[listing.status];
  const isInactive = listing.status === "inactive";
  const isDraft = listing.status === "draft";

  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden transition-all duration-200 hover:border-accent/50 hover:shadow-md hover:shadow-accent/30 flex flex-col">
      {/* ── Thumbnail ── */}
      <div
        className={`relative h-32 flex items-center justify-center ${
          isDraft
            ? "bg-amber-50 dark:bg-amber-900/20"
            : isInactive
            ? "bg-slate-50 dark:bg-slate-700/30"
            : "bg-blue-50 dark:bg-slate-700/40"
        }`}
      >
        <span
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconBg} transition-transform duration-200 group-hover:scale-110`}
        >
          <ProductIcon size={28} />
        </span>
        <div className="absolute top-2.5 right-2.5">
          <StatusBadge status={listing.status} />
        </div>
      </div>

      {/* ── Body ── */}
      <div className="p-4 flex flex-col flex-1">
        <div className="text-[10px] font-bold tracking-widest uppercase text-muted mb-1">
          {listing.category}
        </div>

        <div className="text-[14px] font-heading font-semibold text-primary-navy mb-1 leading-snug">
          {listing.title}
        </div>

        <div className="text-[17px] font-bold text-accent mb-1.5">
          {listing.price}
        </div>

        <div className="flex items-center gap-1 text-[11px] text-muted mb-2.5">
          <AppIcon name="mapPin" className="w-2.5 h-2.5 shrink-0" />
          {listing.location}
        </div>

        {/* ── Stats ── */}
        <ListingStats listing={listing} isDraft={isDraft} />

        {/* ── Actions ── */}
        <ListingActions isDraft={isDraft} isInactive={isInactive} />
      </div>
    </div>
  );
}

// ─── Private sub-components ───────────────────────────────────────────────────

function ListingStats({ listing, isDraft }) {
  if (isDraft) {
    return (
      <div className="flex gap-3 mb-3">
        <span className="text-[11px] text-amber-600 dark:text-amber-500 font-semibold">
          Draft — incomplete
        </span>
      </div>
    );
  }

  return (
    <div className="flex gap-3 mb-3 flex-wrap">
      <span className="text-[11px] text-muted">
        <strong className="text-primary-navy font-bold">
          {listing.sold}
        </strong>{" "}
        sold
      </span>
      <span className="text-[11px] text-muted">
        <strong className="text-primary-navy font-bold">
          {listing.stock}
        </strong>{" "}
        in stock
      </span>
      {listing.rating != null && (
        <span className="text-[11px] text-rating flex items-center gap-0.5">
          <AppIcon name="star" className="w-2.5 h-2.5 fill-current" />
          {listing.rating}
        </span>
      )}
    </div>
  );
}

function ListingActions({ isDraft, isInactive }) {
  if (isDraft) {
    return (
      <div className="flex gap-2 mt-auto">
        <Button 
        variant="accent"
        size="sm"
        className="flex-1 rounded-lg font-semibold transition-colors duration-200">
          Finish &amp; Publish
        </Button>
      </div>
    );
  }

  if (isInactive) {
    return (
      <div className="flex gap-2 mt-auto">
        <Button 
        variant="accentLight"
        size="sm"
        className="flex-1 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-1">
          <AppIcon name="check" className="w-3 h-3" /> Activate
        </Button>

        <Button
        variant="dangerLight"
        size="sm"
        className="flex-1 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-1">
          <AppIcon name="trash" className="w-3 h-3" /> Remove
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-2 mt-auto">
      <Button
      variant="accentLight"
      size="sm"
      className="flex-1 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-1">
        <AppIcon name="edit" className="w-3 h-3" /> Edit
      </Button>
      <Button
      variant="dangerLight"
      size="sm"
      className="flex-1 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-1">
        <AppIcon name="trash" className="w-3 h-3" /> Remove
      </Button>
    </div>
  );
}
