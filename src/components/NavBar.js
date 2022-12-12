import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar({ userName }) {
  return (
    <NavBarStyled>
      <h1>Bonjour {userName}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  background-color: blue;
  height: 15vh;
`;

export default NavBar;
