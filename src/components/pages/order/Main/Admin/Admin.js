import React from "react";
import styled from "styled-components";

export default function Admin() {
  return <Adminstyled>Admin</Adminstyled>;
}

const Adminstyled = styled.div`
  height: 280px;
  width: 100%;
  border: 1px solid red;
  background-color: white;
  position: absolute; /* imporant pour le composant <Admin/> */
  bottom: 0;
`;
