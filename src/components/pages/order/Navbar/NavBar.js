import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { refreshPage } from "../../../../utils/window";
import Brand from "../../../reusable-ui/Brand";
import NavbarRightStyle from "./NavbarRightStyle";

function NavBar() {
  return (
    <NavBarStyled>
      <Brand className="logo-order-page" onClick={refreshPage} />

      <NavbarRightStyle />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  height: 10vh;
  background: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-order-page {
    cursor: pointer;
  }
`;

export default NavBar;
