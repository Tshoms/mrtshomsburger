import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Brand from "../../reusable-ui/Brand";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../theme";

function NavBar({ userName }) {
  return (
    <NavBarStyled>
      <Brand />

      <div className="right-side">
        <div className="admin-left">
          <h1>admin</h1>
        </div>
        <div className="login-right">
          <h1>Hey, {userName}</h1>
          <Link to="/">
            <button>Déconnexion</button>
          </Link>
        </div>
        <div className="avatar-container">
          <BsPersonCircle className="icon-nav" />
        </div>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  height: 10vh;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;

  .right-side {
    display: flex;
    flex-direction: flex-start;
    border: 1px solid red;
    width: 40%;
  }

  .admin-left {
    border: 1px solid yellow;
    width: 50%;
  }

  .login-right {
    border: 1px solid green;
    width: 30%;

    h1 {
      font-size: 15px;
      font-family: "Open Sans", sans-serif;
    }
  }

  .avatar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    width: 20%;
  }

  .icon-nav {
    font-size: 40px;
    color: ${theme.colors.greySemiDark};
  }
`;

export default NavBar;
