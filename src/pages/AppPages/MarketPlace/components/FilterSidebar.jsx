import { AppIcon } from "../../../../components/icons";
import FilterPanel from "./FilterPanel";
import { Button } from "../../../../components/UI/Button";

/**
 * Desktop sticky filter sidebar.
 * Hidden on screens below `lg`; visible from lg+ alongside the product grid.
 */
export default function FilterSidebar() {
  return (
    <aside className="hidden lg:flex flex-col bg-card border
      border-border rounded-2xl p-5 sticky top-6
      max-h-[calc(100vh-3rem)] overflow-y-auto">

      {/* Section heading */}
      <div className="flex items-center gap-2 mb-4 shrink-0">
        <AppIcon name={"sliders"} className="size-4 text-primary" />
        <span className="font-bold text-[14px] text-muted"
        >Filters</span>
      </div>

      {/* Scrollable filter form */}
      <div className="custom-scrollbar flex-1 overflow-y-auto pr-0.5">
        <FilterPanel conditionName="desktop-condition" />
      </div>

      {/* Apply button pinned at bottom */}
      <Button
        variant="primary"
        size="md"
        className="w-full py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-primary/20 mt-4 shrink-0">
        Apply Filters
      </Button>
    </aside>
  );
}
