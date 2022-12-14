import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

function Brand({ className }) {
  return (
    <BrandStyled className={className}>
      <h1>Crazee</h1>
      <img src="/images/LogoStyled.png" alt="Logo" />
      <h1>Burger</h1>
    </BrandStyled>
  );
}

const BrandStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: 36px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;

export default Brand;
