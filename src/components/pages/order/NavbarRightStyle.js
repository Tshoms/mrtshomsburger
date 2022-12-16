import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
// import { BsPersonCircle } from "react-icons/bs";

export default function NavbarRightStyle({ userName }) {
  return (
    <NavbarRightSide>
      {/* <div className="admin-container">
        <h1>admin</h1>
      </div> */}
      <Profile userName={userName} />
    </NavbarRightSide>
  );
}

const NavbarRightSide = styled.div`
  /* background: purple; */
  display: flex;
  align-items: center;
  padding-right: 50px;

  /* .admin-container {
    background: lightblue;
  } */
`;
