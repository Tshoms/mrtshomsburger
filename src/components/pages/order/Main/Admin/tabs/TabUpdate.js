import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { HiCursorClick } from "react-icons/hi";

export default function TabUpdate() {
  return (
    <TabUpdateStyled>
      <div className="container-update">
        <span>cliquer sur un produit du menu pour le modifier</span>
        <HiCursorClick className="icon" />
      </div>
    </TabUpdateStyled>
  );
}

const TabUpdateStyled = styled.div`
  height: 278px;
  width: 100%;
  /* border: 3px solid green; */

  .container-update {
    display: flex;
    height: 100%;
    width: 50%;
    /* border: 1px solid red; */
    justify-content: center;
    align-items: center;

    span {
      color: ${theme.colors.greyBlue};
      font-family: "Amatic SC", cursive;
      font-size: 27px;
      margin-right: 7px;
    }

    .icon {
      font-size: 29px;
      color: ${theme.colors.greyBlue};
    }
  }
`;
