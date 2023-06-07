import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ Icon, onClick, className }) {
  return (
    <TabStyle className={className} onClick={onClick}>
      <div className="icon">{Icon}</div>
    </TabStyle>
  );
}

const TabStyle = styled.button`
  height: 43px;
  padding: 0 22px;
  left: 5%;
  top: 1px;
  position: absolute;
  cursor: pointer;
  background: ${theme.colors.white};
  // flex.
  display: flex;
  align-items: center;
  justify-content: center;

  // font-size.
  font-size: ${theme.fonts.size.P0};

  // border.
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  border-width: 1px 1px 2px 1px;
  box-shadow: ${theme.shadows.subtle};
  /* box-sizing: border-box; */
  // border-radius.
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
