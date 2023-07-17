import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, filter, findInArray } from "../utils/array";
import { findIndexInArray } from "../utils/array";

export const useBasket = () => {
  //state ------
  const [basket, setBasket] = useState(fakeBasket.EMPTY);
  //comportement ------
  const handleAddToBasket = (productAdd) => {
    // 1. copie du state ----
    const basketCopy = deepClone(basket);

    const isAlreadyInArray = findInArray(productAdd.id, basketCopy);

    //2. le cas ou le produit n'est pas dans l'array.
    if (!isAlreadyInArray) {
      createNewProductInBasket(productAdd, basketCopy, setBasket);
      return;
    }

    // 3. le cas ou le produit est dans l'array.
    incrementProductInBasket(productAdd, basketCopy);
  };

  const createNewProductInBasket = (productAdd, basketCopy, setBasket) => {
    const newBasketProduct = {
      ...productAdd,
      quantity: 1,
    };

    const basketUpdate = [newBasketProduct, ...basketCopy];
    setBasket(basketUpdate);
  };

  const incrementProductInBasket = (productAdd, basketCopy) => {
    const indexOfProductIncrement = findIndexInArray(productAdd.id, basketCopy);
    basketCopy[indexOfProductIncrement].quantity += 1;

    setBasket(basketCopy);
  };

  const handleDeleteBasketProduct = (idOfBasketProduct) => {
    //1. copy du state.
    const basketCopy = deepClone(basket);

    //2. manip de la COPY du state.
    const basketUpdate = filter(idOfBasketProduct, basketCopy);

    //3. Update du state.
    setBasket(basketUpdate);
  };
  return { basket, handleAddToBasket, handleDeleteBasketProduct };
};
