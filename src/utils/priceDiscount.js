
export function calculateDiscountPrice(originalPrice, discountPercent) {

  if (discountPercent <= 0) {
    return originalPrice;
  }

  const discountDecimal = discountPercent / 100;
  const paymentFactor = 1 - discountDecimal;

  return originalPrice * paymentFactor ;
}