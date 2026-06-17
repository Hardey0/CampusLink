
export function formatNaira(price) {

  return price.toLocaleString('en-NG', {
    style: 'currency',
    currency: 'NGN', 
    minimumFractionDigits: 0,
  });

}