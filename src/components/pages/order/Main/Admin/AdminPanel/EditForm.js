import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import HintMessage from "./HintMessage";
// import { HiCursorClick } from "react-icons/hi";

export default function UpdateForm() {
  return (
    <TabUpdateStyled>
      {/* <div className="container-update">
        <span>cliquer sur un produit du menu pour le modifier</span>
        <HiCursorClick className="icon" />
      </div> */}
      <HintMessage />
    </TabUpdateStyled>
  );
}

const TabUpdateStyled = styled.div`
  height: 278px;
  width: 100%;

  /* .container-update {
    display: flex;
    height: 100%;
    width: 50%;
    justify-content: center;
    align-items: center;

    span {
      color: ${theme.colors.greyBlue};
      font-family: ${theme.fonts.family.stylish};
      font-size: ${theme.fonts.size.P3};
      margin-right: 7px;
    }

    .icon {
      font-size: 29px;
      color: ${theme.colors.greyBlue};
    }
  } */
`;
