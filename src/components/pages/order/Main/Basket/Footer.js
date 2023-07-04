import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

function Footer() {
  return (
    <FooterStyled>
      <span>Codé avec coeur et React!</span>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  span {
    color: white;
  }

  /* height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: ${theme.fonts.size.P2};
        font-family: ${theme.fonts.families.stylish};
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.white};
    } */
`;

export default Footer;
