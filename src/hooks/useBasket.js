import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import {
  deepClone,
  removedObjectById,
  findObjectById,
  findIndexById,
} from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {
  //state ------
  const [basket, setBasket] = useState([]);
  //comportement ------

  const handleAddToBasket = (idProductToAdd, username) => {
    //1. copy du state (deepclone);
    const basketCopy = deepClone(basket);
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy);
    //2. manip de la copy du state;
    if (productAlreadyInBasket) {
      incrementProductInBasket(idProductToAdd, basketCopy, username);
      return;
    }

    createNewBasketProduct(idProductToAdd, basketCopy, setBasket, username);
  };

  const createNewBasketProduct = (
    idProductToAdd,
    basketCopy,
    setBasket,
    username
  ) => {
    // I do not re-create a whole product, I only add extrat info.
    const newBasketProduct = { id: idProductToAdd, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketCopy];
    //3. update du state
    setBasket(newBasket);
    setLocalStorage(username, newBasket);
  };

  const incrementProductInBasket = (idProductToAdd, basketCopy, username) => {
    const indexOfProductIncrement = findIndexById(idProductToAdd, basketCopy);
    basketCopy[indexOfProductIncrement].quantity += 1;

    setBasket(basketCopy);
    setLocalStorage(username, basketCopy);
  };

  const handleDeleteBasketProduct = (idOfBasketProduct) => {
    const basketUpdate = removedObjectById(idOfBasketProduct, basket);
    setBasket(basketUpdate);
  };
  return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct };
};
