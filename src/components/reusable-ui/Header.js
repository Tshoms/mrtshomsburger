import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.div`
  height: 70px;
  padding: 0px 16px 0px 16px;
  background: ${theme.colors.background_dark};
`;

export default Header;
