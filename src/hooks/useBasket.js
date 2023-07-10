import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findInArray } from "../utils/array";
import { findIndexInArray } from "../utils/array";

export const useBasket = () => {
  //state ------
  const [basket, setBasket] = useState(fakeBasket.SMALL);
  //comportement ------
  const handleAddToBasket = (productAdd) => {
    // 1. copie du state ----
    const basketCopy = deepClone(basket);

    const isAlreadyInArray = findInArray(productAdd.id, basketCopy);
    console.log("in array basket:", isAlreadyInArray);

    //2. le cas ou le produit n'est pas dans l'array.
    if (!isAlreadyInArray) {
      const newBasketProduct = {
        ...productAdd,
        quantity: 1,
      };
      // 3. update du state.
      const basketUpdate = [newBasketProduct, ...basketCopy];
      setBasket(basketUpdate);
      return;
    }

    // 4. le cas ou le produit est dans l'array.
    incrementProductInBasket(productAdd, basketCopy);
  };

  const incrementProductInBasket = (productAdd, basketCopy) => {
    const indexOfProductIncrement = findIndexInArray(productAdd.id, basketCopy);
    basketCopy[indexOfProductIncrement].quantity += 1;
    // 5. update le state de l'array.
    setBasket(basketCopy);
  };

  return { basket, handleAddToBasket };
};
