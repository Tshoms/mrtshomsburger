import React from "react";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../theme";

function HintMessage() {
  return (
    <HintMessageStyled>
      <div className="container-update">
        <span>cliquer sur un produit du menu pour le modifier</span>
        <HiCursorClick />
      </div>
    </HintMessageStyled>
  );
}

const HintMessageStyled = styled.div`
  .container-update {
    display: flex;
    height: 100%;
    width: 50%;
    align-items: center;
    font-size: ${theme.fonts.size.P3};
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.greyBlue};
    position: relative;
    top: 50px;

    span {
      margin-right: 10px;
    }
  }
`;

export default HintMessage;
