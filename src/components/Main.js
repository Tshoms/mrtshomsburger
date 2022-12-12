import React from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <MainStyled>
      <h1>Main</h1>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: 85vh;
  background-color: green;
`;
