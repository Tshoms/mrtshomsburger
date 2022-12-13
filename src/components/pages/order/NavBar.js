import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar({ userName }) {
  return (
    <NavBarStyled>
      <div className="left-side"></div>
      <div className="right-side">
        <div className="admin-left"></div>
        <div className="login-right">
          <h1>Hey,{userName}</h1>
          <Link to="/">
            <button>Déconnexion</button>
          </Link>
        </div>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  height: 10vh;
  background-color: blue;
  display: flex;
  justify-content: space-between;

  .left-side {
    border: 1px solid red;
    width: 40%;
  }

  .right-side {
    display: flex;
    flex-direction: row-reverse;
    border: 1px solid red;
    width: 40%;
  }

  h1 {
    font-size: 15px;
  }
`;

export default NavBar;
