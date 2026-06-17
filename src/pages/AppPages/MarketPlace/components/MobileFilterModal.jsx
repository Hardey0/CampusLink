import FilterPanel from "./FilterPanel";
import { Button } from "../../../../components/UI/Button";
import { AppIcon } from "../../../../components/icons";

/**
 * Mobile filter overlay.
 * - Bottom-sheet on phones (slides up from bottom).
 * - Left-panel on small tablets (sm+).
 * - Header and "Apply" footer are pinned; the filter content scrolls between them.
 * - Only rendered below `lg` breakpoint.
 *
 * Props:
 *   open    – boolean
 *   onClose – () => void
 */
export default function MobileFilterModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      {/* Scrim — closes modal on tap */}
      <div
        className="fixed inset-0 bg-card/50 backdrop-blur-sm z-[60] lg:hidden"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="fixed inset-x-0 bottom-0 sm:inset-y-0 sm:left-0 sm:right-auto sm:w-80
          z-[70] lg:hidden bg-bg rounded-t-3xl sm:rounded-none
          sm:rounded-r-3xl shadow-2xl flex flex-col h-[100dvh] sm:h-screen"
      >
        {/* Pinned header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 shrink-0">
          <div className="flex items-center gap-2">
            <AppIcon name={"sliders"} className="size-4 text-primary" />
            <span className="font-bold text-[14px] text-primary-navy">Filters</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-bg-secondary flex items-center justify-center hover:bg-muted/20 transition-all"
          >
            <AppIcon name={"close"} className=" size-4 text-muted" />
          </button>
        </div>

        {/* Scrollable filter content */}
        <div className="custom-scrollbar flex-1 overflow-y-auto px-5 pb-2">
          <FilterPanel conditionName="mobile-condition" />
        </div>

        {/* Pinned Apply button */}
        <div className="px-5 py-4 border-t border-border shrink-0">
          <Button
          size="md"
          variant="primary"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl
               font-semibold transition-all shadow-lg
              shadow-primary/20"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </>
  );
}
