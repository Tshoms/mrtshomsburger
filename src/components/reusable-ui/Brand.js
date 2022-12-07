import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

function Brand() {
  return (
    <BrandStyled>
      <h1>Crazee</h1>
      <img src="/images/LogoStyled.png" alt="Logo" />
      <h1>Burger</h1>
    </BrandStyled>
  );
}

const BrandStyled = styled.div`
  border: 2px solid blue;
  display: flex;
  align-items: center;
  transform: scale(2.5);

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
    margin: 0 5px;
  }
`;

// const BrandLogo = styled.image`
//   height: 179px;
//   width: 60%;
//   background-image: url(${LogoBrand});
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   margin: 10px;
// `;

export default Brand;
