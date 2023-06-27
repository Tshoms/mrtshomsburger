import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./Navbar/NavBar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../enums/product";

function OrderPage() {
  // state ----------
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  const handleAdd = (newProduct) => {
    //1. copy du state.
    const menuCopy = [...menu];
    // 2. manipulation su state.
    const menuUpdate = [newProduct, ...menuCopy];
    // 3. Update du state avec le setter.
    setMenu(menuUpdate);
  };

  const handleDelete = (idOfProduct) => {
    //1. copy du state.
    const menuCopy = [...menu];
    console.log("state before", menuCopy);
    //2. manip du state.
    const menuUpdate = menuCopy.filter((product) => product.id !== idOfProduct);
    console.log("state after: ", menuUpdate);
    //3. Update du state.
    setMenu(menuUpdate);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };
  // provider for context w state.
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
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
