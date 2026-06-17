import { Minus, Plus, Trash2 } from "lucide-react";
import { AppIcon } from "../../icons";

/**
 * A single row inside the cart drawer.
 *
 * Props:
 *   item     – cart item object (product + qty)
 *   onQty    – (id, delta) => void   — delta is +1 or -1
 *   onRemove – (id) => void
 */
export default function CartItem({ item, onQty, onRemove }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-border last:border-0">

      {/* Thumbnail */}
      <div className="w-12 h-12 rounded-xl bg-bg-secondary
        flex items-center justify-center shrink-0">
        <AppIcon name={item.icon} className="w-6 h-6 text-muted" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-semibold text-primary-navy truncate">
          {item.title}
        </div>
        <div className="text-[11px] text-muted">{item.seller}</div>
        <div className="text-[14px] font-bold text-primary mt-1">
          ₦{item.price.toLocaleString()}
        </div>
      </div>

      {/* Qty controls + remove */}
      <div className="flex flex-col items-end gap-2 shrink-0">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onQty(item.id, -1)}
            className="w-6 h-6 rounded-md border border-border 
              bg-card flex items-center justify-center
              hover:border-primary hover:bg-primary-soft
              transition-all"
          >
            <Minus size={12} className="text-muted" />
          </button>
          <span className="text-[13px] font-semibold text-muted w-5 text-center">
            {item.qty}
          </span>
          <button
            onClick={() => onQty(item.id, 1)}
            className="w-6 h-6 rounded-md border border-border
              bg-card flex items-center justify-center
              hover:border-primary hover:bg-primary-soft
              transition-all"
          >
            <Plus size={12} className="text-muted" />
          </button>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="w-full h-6 rounded-md bg-bg-secondary flex items-center justify-center hover:bg-danger-soft hover:text-danger-strong
            text-muted transition-all"
        >
          <Trash2 size={12} />
        </button>
      </div>
    </div>
  );
}
