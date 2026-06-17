import { AppIcon } from "../../../../components/icons";
import Stars from "./Stars";
import { Button } from "../../../../components/ui/button";

/**
 * List-view product row. Used when the user switches to the list layout toggle.
 *
 * Props:
 *   product     – product data object
 *   onAddToCart – (product) => void
 */
export default function ProductListRow({ product, onAddToCart }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 bg-card border
      border-border rounded-2xl p-3 hover:border-primary
       transition-all cursor-pointer group min-w-0">

      {/* Thumbnail */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-muted/10
        flex items-center justify-center shrink-0">
        <AppIcon
          name={product.icon}
          className="w-7 h-7 sm:w-8 sm:h-8 text-muted
          transition-colors"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="text-[12.5px] sm:text-[13px] font-semibold text-primary-navy truncate">
          {product.title}
        </div>
        <div className="flex items-center gap-1 text-[10.5px] sm:text-[11px]
          text-muted/90 mt-0.5 truncate">
          <AppIcon name={"mapPin"} className="size-3 shrink-0" />
          <span className="truncate">{product.campus} · {product.seller}</span>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <Stars rating={product.rating} />
          <span className="text-[10px] sm:text-[10.5px] text-muted/90">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
      </div>

      {/* Price + action */}
      <div className="flex flex-col items-end gap-2 shrink-0">
        <span className="font-black text-[14px] sm:text-[15px] text-primary-navy tracking-tight whitespace-nowrap">
          ₦{product.price.toLocaleString()}
        </span>
        <Button
          variant="primary"
          size="sm"
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg font-semibold transition-all"
        >
          <AppIcon name={"add"} className="size-4" />
          <span className="">Cart</span>
        </Button>
      </div>
    </div>
  );
}
