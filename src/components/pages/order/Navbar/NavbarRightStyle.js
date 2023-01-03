import React from "react";
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";
// import { BsPersonCircle } from "react-icons/bs";

export default function NavbarRightStyle({ userName }) {
  return (
    <NavbarRightSide>
      <ToggleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
      />
      <Profile userName={userName} />
    </NavbarRightSide>
  );
}

const NavbarRightSide = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  /* .admin-container {
    background: lightblue;
  } */
`;
