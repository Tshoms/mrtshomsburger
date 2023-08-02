import { getMenu } from "../../../../api/product";
import { getLocalStorage } from "../../../../utils/window";

const initialiseMenu = async (userName, setMenu) => {
  const receivedMenu = await getMenu(userName);
  setMenu(receivedMenu);
};

const initialBasket = (userName, setBasket) => {
  const basketReceived = getLocalStorage(userName); // localstorage est synchrone pas besoin de await .
  console.log("basket received :", basketReceived);
  if (basketReceived) setBasket(basketReceived);
};

export const initialeUserSession = async (userName, setMenu, setBasket) => {
  await initialiseMenu(userName, setMenu);
  initialBasket(userName, setBasket);
};
