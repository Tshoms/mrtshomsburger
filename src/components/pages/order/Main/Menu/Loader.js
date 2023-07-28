import React from "react";
import { theme } from "../../../../../theme";
import styled from "styled-components";

function Loading() {
  return (
    <LoaderStyled>
      <h1>Chargement en cours...</h1>
    </LoaderStyled>
  );
}

const LoaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  height: 100%;
  h1 {
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.weights.regular};
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
    margin-top: 0;
    margin-bottom: ${theme.spacing.md};
  }
`;

export default Loading;
