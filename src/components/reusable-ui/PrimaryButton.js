import React from "react";
import styled from "styled-components";

export default function ({ Label, Icon }) {
  return (
    <PrimaryButtonStyle className="button_with_icon">
      <span>{Label}</span>
      {Icon && Icon}
    </PrimaryButtonStyle>
  );
}

const PrimaryButtonStyle = styled.button`
  display: flex;
  height: 40px;
  width: 51%;
  background-color: #ff9f1b;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 5px;
  border: none;

  &:hover:not(:disabled) {
    background-color: white;
    color: #ff9f1b;
  }
`;
