import React, { useRef, useState } from "react";
import styled from "styled-components";
import NavBar from "./Navbar/NavBar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";

function OrderPage() {
  // state ----------
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  // custom hooks ----
  const { menu, handleAdd, handleEdit, handleDelete, resetMenu } = useMenu();
  const { basket, handleAddToBasket, handleDeleteBasketProduct } = useBasket();

  // provider for context w state.
  const orderContextValue = {
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
  };

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
