import React from "react";
import styled from "styled-components";
import Brand from "../../reusable-ui/Brand";

import NavbarRightStyle from "./NavbarRightStyle";

function NavBar({ userName }) {
  return (
    <NavBarStyled>
      <Brand />

      <NavbarRightStyle userName={userName} />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  height: 10vh;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export default NavBar;
