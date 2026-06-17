import { AppIcon } from "../../../../components/icons";
import ProductCard from "./ProductCard";
import ProductListRow from "./ProductListRow";

/**
 * Products tab content.
 * Renders a result count + view-toggle header, then either a responsive
 * grid of ProductCards or a stacked list of ProductListRows.
 *
 * Props:
 *   products     – filtered product array
 *   gridView     – boolean
 *   onGridView   – (isGrid: boolean) => void
 *   onAddToCart  – (product) => void
 *   saved        – Set<id>
 *   onToggleSave – (id) => void
 */
export default function ProductsView({
  products,
  gridView,
  onGridView,
  onAddToCart,
  saved,
  onToggleSave,
}) {
  return (
    <>
      {/* Result count + view toggle */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <span className="text-[12.5px] sm:text-[13px] text-muted">
          Showing{" "}
          <strong className="text-primary-navy">{products.length}</strong>{" "}
          results
        </span>
        <div className="flex gap-1.5">
          {[
            { iconName: "grid", isGrid: true },
            { iconName: "list", isGrid: false },
          ].map(({ iconName, isGrid }) => (
            <button
              key={String(isGrid)}
              onClick={() => onGridView(isGrid)}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border flex items-center
                justify-center transition-all
                ${gridView === isGrid
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card  text-muted hover:border-primary hover:text-muted/50"
                }`}
            >
              <AppIcon name={iconName} className="w-3.5 h-3.5" />
            </button>
          ))}
        </div>
      </div>

      {/* Grid view
          Breakpoint strategy:
            < 400px  → 1 col  (prevents cards crumbling on tiny phones)
            400–639  → 2 cols
            640–767  → 2 cols
            768–1023 → 3 cols (tablet; no sidebar)
            1024–1279→ 3 cols (desktop + sidebar)
            1280+    → 5 cols (wide desktop)
      */}
      {gridView ? (
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3
          lg:grid-cols-3 xl:grid-cols-5 gap-2.5 sm:gap-3">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={onAddToCart}
              saved={saved.has(p.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2.5 sm:gap-3">
          {products.map((p) => (
            <ProductListRow key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </>
  );
}
