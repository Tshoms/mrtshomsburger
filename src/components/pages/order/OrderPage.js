import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NavBar from "./Navbar/NavBar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { findObjectById } from "../../../utils/array";
import { useSearchParams } from "react-router-dom";
import { getMenu } from "../../../api/product";
import { getLocalStorage } from "../../../utils/window";
// import { getUser } from "../../../api/user";

function OrderPage() {
  // state ----------
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  // get userName ---
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("userName");
  // custom hooks ----
  const { menu, setMenu, handleAdd, handleEdit, handleDelete, resetMenu } =
    useMenu();
  const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } =
    useBasket();

  const handleProductSelected = async (idProductClicked) => {
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = findObjectById(idProductClicked, menu);
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };
  // provider for context w state.
  const orderContextValue = {
    userName,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  };

  const initialiseMenu = async () => {
    const receivedMenu = await getMenu(userName);
    setMenu(receivedMenu);
  };

  const initialBasket = () => {
    const basketReceived = getLocalStorage(userName); // localstorage est synchrone pas besoin de await .
    console.log("basket received :", basketReceived);
    if (basketReceived) setBasket(basketReceived);
  };

  const initialeUserSession = async () => {
    await initialiseMenu();
    initialBasket();
  };

  useEffect(() => {
    initialeUserSession();
  }, []);

  // rendu ------------
  return (
    <OrderStyled>
      <div className="container">
        <OrderContext.Provider value={orderContextValue}>
          <NavBar />
          <Main />
        </OrderContext.Provider>
      </div>
    </OrderStyled>
  );
}

const OrderStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    display: flex;
    flex-direction: column;
    width: 1400px;
    position: relative; /* imporant pour le composant <Admin/> */
  }
`;

export default OrderPage;
