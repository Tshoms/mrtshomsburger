import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ label, Icon, onClick, className }) {
  return (
    <TabStyle className={className} onClick={onClick}>
      <div className="icon">{Icon}</div>
      {label && <span className="label">{label}</span>}
    </TabStyle>
  );
}

const TabStyle = styled.button`
  height: 43px;
  padding: 0 22px;

  // flex.
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  top: 1px;

  cursor: pointer;

  // font-size.
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
  /* box-sizing: border-box; */

  // border.
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};

  // border-radius.
  border-radius: ${theme.borderRadius.round};
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;

  .label {
    margin-left: 13px;
  }

  :hover {
    border-bottom: 2px solid ${theme.colors.white};
    .label {
      text-decoration: underline;
    }
  }

  .icon {
    display: flex;
  }
`;
