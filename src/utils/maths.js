import { findObjectById } from "./array";

export function formatPrice(priceToFormat) {
  let price = priceToFormat;

  // @TODO: perhaps change this to if(!price) return 0
  if (!price) return "0,00 €";
  price = replaceFrenchCommaWithDot(price);

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
  return formattedPrice;
}

export function replaceFrenchCommaWithDot(price) {
  if (typeof price === "string") price = parseFloat(price.replace(",", "."));
  return price;
}

export const calculateSumToPay = (basket, menu) => {
  return basket.reduce((total, BasketProduct) => {
    // if (isNaN(BasketProduct.price)) return total;
    const menuProduct = findObjectById(BasketProduct.id, menu);
    total += menuProduct.price * BasketProduct.quantity;
    return total;
  }, 0);
};
