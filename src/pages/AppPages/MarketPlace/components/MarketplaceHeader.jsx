import { Button } from "../../../../components/UI/Button"
import { AppIcon } from "../../../../components/icons";

/**
 * Page-level header: title, subtitle, and "Create Listing" CTA.
 *
 * Props:
 *   onCreateListing – () => void   (optional; wires up the CTA button)
 */
export default function MarketplaceHeader({ onCreateListing }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between
      gap-3 mb-5 sm:mb-6">
      <div>
        <h1 className="text-heading-sm font-heading font-extrabold tracking-tight text-text flex items-center gap-2">
          <AppIcon name={"shoppingBag"}className="size-6 text-primary shrink-0" />
          Marketplace
        </h1>
        <p className="text-caption text-muted mt-0.5">
          Browse products and services from your campus community
        </p>
      </div>

      <Button
        variant="primary"
        size="md"
        onClick={onCreateListing}
        className="flex items-center gap-2 px-4 py-2 rounded-xl 
           text-[13px] font-semibold w-fit transition-all
          active:scale-95 shadow-lg shadow-primary/25 shrink-0"
      >
        <AppIcon name={"add"} className="size-5" />
        Create Listing
      </Button>
    </div>
  );
}
