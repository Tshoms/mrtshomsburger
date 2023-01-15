import React from "react";
import styled from "styled-components";

export default function ButtonSize({ Icon }) {
  return <ButtonSizeStyled>{Icon && Icon}</ButtonSizeStyled>;
}

const ButtonSizeStyled = styled.button`
  display: flex;
  height: 100%;
  width: 10%;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  margin-right: 1px;
  border: 1px solid green;
`;
