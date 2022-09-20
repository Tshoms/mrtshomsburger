import React from "react";
import styled from "styled-components";
import LogoBrand from "../assets/LogoStyled.png";

function Brand() {
  return (
    <DivLogo>
      <PLogo>Tshoms</PLogo>
      <BrandLogo />
      <PLogo>Burger</PLogo>
    </DivLogo>
  );
}

const DivLogo = styled.div`
  display: flex;
  flex-direction: row;
  height: 270px;
  width: 55%;

  justify-content: center;
  align-items: center;
`;

const BrandLogo = styled.image`
  height: 179px;
  width: 40%;
  background-image: url(${LogoBrand});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  marging: 10px;
`;

const PLogo = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
  font-family: "Amatic SC", cursive;
  font-size: 55px;
  color: orange;
`;

export default Brand;
