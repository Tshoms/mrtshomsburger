import React from "react";
import styled from "styled-components";
import LogoBrand from "../../assets/LogoStyled.png";
import { Container } from "../../Styles";

function Brand() {
  return (
    <BrandStyled>
      <Container>
        <h1>Tshoms</h1>
        <BrandLogo />
        <h1>Burger</h1>
      </Container>
    </BrandStyled>
  );
}

const BrandStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 270px;
  width: 55%;
  justify-content: center;
  align-items: center;
`;

const BrandLogo = styled.image`
  height: 179px;
  width: 60%;
  background-image: url(${LogoBrand});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 10px;
`;

export default Brand;
