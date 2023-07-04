import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
import Admin from "./Admin/Admin";
import Basket from "./Basket/Basket";
import Menu from "./Menu/Menu";

export default function Main() {
  // state -------
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  flex: 1;

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  /*css grid */
  display: grid;
  grid-template-columns: 25% 1fr; /* comportement en rows */
  overflow-y: scroll; /*important pour le scroll */

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
  }
`;
