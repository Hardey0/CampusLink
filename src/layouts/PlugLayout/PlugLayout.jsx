import { Outlet } from "react-router-dom";
import { Header, CartDrawer, Footer } from "../../components/StructuralElement/PlugStructure";

function PlugLayout({ 
  onOpenCart,
  cartQty,
  cartOpen,
  onclose,
  cartItems,
  updateQty,
  removeItem,
  subtotal,
  serviceFee,
  total
}) {
  return (
    <>
      <Header
        onOpenCart={onOpenCart}
        cartQty={cartQty}
      />

      <CartDrawer
        open={cartOpen}
        onClose={onclose}
        items={cartItems}
        onQty={updateQty}
        onRemove={removeItem}
        subtotal={subtotal}
        serviceFee={serviceFee}
        total={total}
      />

      <Outlet />
      <Footer />
    </>
  );
}

export default PlugLayout;