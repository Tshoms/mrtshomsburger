import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findInArray } from "../utils/array";

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
    } else {
      // 4. le cas ou le produit est dans l'array.
      const indexOfProductIncrement = basket.findIndex(
        (basketProduct) => basketProduct.id === productAdd.id
      );

      console.log("index of product: ", basketCopy[indexOfProductIncrement]);
      basketCopy[indexOfProductIncrement].quantity += 1;
      // 5. update le state de l'array.
      setBasket(basketCopy);
    }

    //4. le cas ou le produit est dans l'array.
  };
  return { basket, handleAddToBasket };
};
