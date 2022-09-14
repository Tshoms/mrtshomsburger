import React from "react";
import styled from "styled-components";
import LogoBrand from "../assets/LogoStyled.png";

function Brand() {
  return (
    <div>
      <BrandLogo src={LogoBrand} alt="logo" />
    </div>
  );
}

const BrandLogo = styled.image`
  height: 20px;
  width: 20px;
`;

export default Brand;
