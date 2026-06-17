import { ChevronRight, ShoppingBag, ShoppingCart, X } from "lucide-react";
import CartItem from "./CartItem";
import { Button } from "../../UI/Button";

/**
 * Sliding cart drawer + backdrop overlay.
 *
 * Props:
 *   open       – boolean
 *   onClose    – () => void
 *   items      – cart item array
 *   onQty      – (id, delta) => void
 *   onRemove   – (id) => void
 *   subtotal   – number
 *   serviceFee – number
 *   total      – number
 */
export function CartDrawer({
  open,
  onClose,
  items,
  onQty,
  onRemove,
  subtotal,
  serviceFee,
  total,
}) {
  const totalQty = items.reduce((a, b) => a + b.qty, 0);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-bg/50 backdrop-blur-sm z-[60]"
          onClick={onClose}
        />
      )}

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-bg z-[70] shadow-2xl flex flex-col transition-transform duration-300
          ease-[cubic-bezier(0.4,0,0.2,1)]
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b
          border-border shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingCart size={18} className="text-primary" />
            <span className="font-heading text-[17px] text-primary-navy font-bold">
              My Cart
            </span>
            {totalQty > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-primary-soft
                text-primary text-[12px] font-bold">
                {totalQty}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-bg-secondary flex items-center justify-center hover:bg-muted/30 transition-all"
          >
            <X size={15} className="text-muted" />
          </button>
        </div>

        {/* Items list */}
        <div className="custom-scrollbar flex-1 overflow-y-auto px-5 py-2">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
              <div className="w-16 h-16 rounded-2xl bg-bg-secondary
                flex items-center justify-center">
                <ShoppingBag size={28} className="text-muted" />
              </div>
              <p className="text-[14px] font-semibold text-muted">
                Your cart is empty
              </p>
              <p className="text-[12.5px] text-muted/70">
                Add some items to get started!
              </p>
            </div>
          ) : (
            items.map((item) => (
              <CartItem key={item.id} item={item} onQty={onQty} onRemove={onRemove} />
            ))
          )}
        </div>

        {/* Footer — only shown when cart has items */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-border shrink-0">
            <div className="flex justify-between text-[13px] text-muted mb-1.5">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[13px] text-muted mb-3">
              <span>Service fee (1%)</span>
              <span>₦{serviceFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-black text-[17px]
              text-primary-navy mb-4">
              <span>Total</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
            <Button
              size="md"
              variant="primary"
              className="w-full py-3.5 rounded-xl font-semibold transition-all shadow-xl
              shadow-primary/25 flex items-center justify-center gap-2">
              Proceed to Checkout
              <ChevronRight size={16} />
            </Button>
            <Button
              variant="card"
              size="md"
              onClick={onClose}
              className="w-full py-2.5 rounded-xl border
                font-medium text-[13px] mt-2.5 transition-all"
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
