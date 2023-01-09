import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./Navbar/NavBar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import PanelContext from "../../../context/PanelContext";

function OrderPage() {
  // state ----------
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("userName");

  // provider for context
  const [panelAdmin, setPanelAdmin] = useState(false);
  const panelContextValue = {
    panelAdmin,
    setPanelAdmin,
  };
  // comportement -------

  // rendu ------------
  return (
    <OrderStyled>
      <div className="container">
        <PanelContext.Provider value={panelContextValue}>
          <NavBar userName={userName} />
          <Main />
        </PanelContext.Provider>
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
  }
`;

export default OrderPage;
