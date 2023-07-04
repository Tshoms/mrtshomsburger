import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = (second) => {
  //state ------
  const [basket, setBasket] = useState(fakeBasket.EMPTY);
  return { basket };
};
