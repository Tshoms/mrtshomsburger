import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: 85vh;
  background-color: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  /*css grid */
  display: grid;
  grid-template-columns: 1fr; /* comportement en rows */
  overflow-y: scroll; /*important pour le scroll */

  /* .basket {
    background-color: pink;
  } */
`;
