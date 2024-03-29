import { findObjectById } from "../../../../../utils/array";

export const calculateSumToPay = (basket, menu) => {
  return basket.reduce((total, BasketProduct) => {
    // if (isNaN(BasketProduct.price)) return total;
    const menuProduct = findObjectById(BasketProduct.id, menu);
    if (isNaN(menuProduct.price)) return total;
    total += menuProduct.price * BasketProduct.quantity;
    return total;
  }, 0);
};
