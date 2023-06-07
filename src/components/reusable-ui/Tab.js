import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ Icon }) {
  return (
    <TabStyle>
      <div className="icon">{Icon}</div>
    </TabStyle>
  );
}

const TabStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 43px;
  left: 71px;
  top: 1px;
  position: absolute;
  cursor: pointer;

  background: ${theme.colors.white};
  border-width: 1px 1px 2px 1px;
  /* box-sizing: border-box; */
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  border-radius: ${theme.borderRadius.round};
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;

  :hover {
    border-bottom: white;
  }

  .icon {
    display: flex;
  }
`;
