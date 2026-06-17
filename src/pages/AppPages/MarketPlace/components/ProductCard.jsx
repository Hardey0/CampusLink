import { AppIcon } from "../../../../components/icons";
import Stars from "./Stars";
import ProductBadge from "./ProductBadge";
import { Button } from "../../../../components/ui/Button";

/**
 * Grid-view product card.
 *
 * Props:
 *   product      – product data object
 *   onAddToCart  – (product) => void
 *   saved        – boolean, whether this product is bookmarked
 *   onToggleSave – (id) => void
 */
export default function ProductCard({ product, onAddToCart, saved, onToggleSave }) {
  return (
    <div className="group relative flex flex-col bg-card border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300
      hover:-translate-y-1 hover:border-primary
      hover:shadow-xl hover:shadow-primary/10 min-w-0">

      <ProductBadge type={product.badge} />

      {/* Save / bookmark button */}
      <button
        onClick={(e) => { e.stopPropagation(); onToggleSave(product.id); }}
        className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm transition-all hover:bg-primary/10"
      >
        <AppIcon
          name={"heart"}
          className={`size-4 ${saved ? "fill-danger-strong text-danger-strong" : "text-muted"}`}
        />
      </button>

      {/* Icon / thumbnail area */}
      <div className="h-24 sm:h-28 flex items-center justify-center bg-bg-secondary shrink-0">
        <AppIcon
          name={product.icon}
          className="w-9 h-9 sm:w-11 sm:h-11 text-muted
            group-hover:text-primary transition-colors duration-300"
        />
      </div>

      {/* Card body — flex-1 keeps equal height across a grid row */}
      <div className="flex flex-col flex-1 p-2.5 sm:p-3 gap-1.5">

        {/* Campus */}
        <div className="flex items-center gap-1 text-[10px] sm:text-[10.5px] text-muted">
          <AppIcon name={"mapPin"} className="size-3" />
          <span className="truncate">{product.campus}</span>
        </div>

        {/* Title */}
        <div className="text-[12px] sm:text-[13px] font-semibold text-primary-navy
          leading-tight line-clamp-2 flex-1">
          {product.title}
        </div>

        {/* Seller row — avatar initial + name + inline star rating */}
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/20
            flex items-center justify-center text-[8px] sm:text-[9px] font-bold
            text-primary-strong shrink-0">
            {product.seller[0]}
          </div>
          <div className="flex items-center gap-1 text-[10px] sm:text-[11px]
            text-muted/90 min-w-0 overflow-hidden">
            <span className="truncate font-medium">{product.seller}</span>
            <span className="shrink-0">·</span>
            <div className="flex items-center gap-0.5 shrink-0">
              <AppIcon name={"star"} className="size-3 fill-rating text-rating shrink-0" />
              <span className="text-muted/90 font-semibold">
                {product.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        {/* Star row + review count */}
        <div className="flex items-center gap-1">
          <Stars rating={product.rating} />
          <span className="text-[9.5px] sm:text-[10.5px] text-muted/90 shrink-0">
            ({product.reviews})
          </span>
        </div>

        {/* Price + Add-to-cart button.
            flex-wrap lets the button fall to the next line when the card is
            narrow (e.g. 5-col desktop near a breakpoint) rather than
            truncating the price. ml-auto on the button keeps it right-aligned
            whether it sits inline or on its own line. */}
        <div className="flex items-center flex-wrap gap-x-1 gap-y-1.5 mt-auto pt-1">
          <span className="font-black text-[13px] sm:text-[14px] text-primary-navy
            tracking-tight whitespace-nowrap">
            ₦{product.price.toLocaleString()}
          </span>
          <Button
            variant="primary"
            size="sm"
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            className="ml-auto flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg font-semibold
              transition-all duration-200 active:scale-95 shrink-0"
          >
            <AppIcon name={"add"} />
            {/* Label hidden on very small screens; icon-only is still clear */}
            <span className="min-[450px]:inline">Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
