import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import {
  deepClone,
  removedObjectById,
  findObjectById,
  findIndexById,
} from "../utils/array";

export const useBasket = () => {
  //state ------
  const [basket, setBasket] = useState(fakeBasket.EMPTY);
  //comportement ------

  const handleAddToBasket = (idProductToAdd) => {
    //1. copy du state (deepclone);
    const basketCopy = deepClone(basket);
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy);
    //2. manip de la copy du state;
    if (productAlreadyInBasket) {
      incrementProductInBasket(idProductToAdd, basketCopy);
      return;
    }

    createNewBasketProduct(idProductToAdd, basketCopy, setBasket);
  };

  const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket) => {
    // I do not re-create a whole product, I only add extrat info.
    const newBasketProduct = { id: idProductToAdd, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketCopy];
    //3. update du state
    setBasket(newBasket);
  };

  const incrementProductInBasket = (idProductToAdd, basketCopy) => {
    const indexOfProductIncrement = findIndexById(idProductToAdd, basketCopy);
    basketCopy[indexOfProductIncrement].quantity += 1;

    setBasket(basketCopy);
  };

  const handleDeleteBasketProduct = (idOfBasketProduct) => {
    //1. copy du state.
    const basketCopy = deepClone(basket);

    //2. manip de la COPY du state.
    const basketUpdate = removedObjectById(idOfBasketProduct, basketCopy);

    //3. Update du state.
    setBasket(basketUpdate);
  };
  return { basket, handleAddToBasket, handleDeleteBasketProduct };
};
