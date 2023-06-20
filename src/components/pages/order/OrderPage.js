import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./Navbar/NavBar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext";

function OrderPage() {
  // state ----------
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  // provider for context w state.

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  };
  // comportement -------

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
