import React from "react";
import styled from "styled-components";
// import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NavbarRightStyle({ userName }) {
  return (
    <NavbarRightSide>
      {/* <div className="admin-container">
        <h1>admin</h1>
      </div> */}
      <div className="profile">
        <h1>Hey, {userName}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </NavbarRightSide>
  );
}

const NavbarRightSide = styled.div`
  background: purple;
  display: flex;
  align-items: center;

  /* .admin-container {
    background: lightblue;
  } */

  .profile {
    background: yellow;
  }

  h1 {
    font-size: 15px;
  }
`;
