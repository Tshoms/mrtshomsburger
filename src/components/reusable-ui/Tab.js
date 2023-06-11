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

  top: 1px;
  position: relative;
  color: ${theme.colors.greySemiDark};
  cursor: pointer;

  background: ${theme.colors.white};

  // font-size.
  font-size: ${theme.fonts.size.P0};

  // border.
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  border-width: 1px 1px 2px 1px;
  box-shadow: ${theme.shadows.subtle};
  box-sizing: border-box;
  // border-radius.
  border-radius: ${theme.borderRadius.round};
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;

  .label {
    margin-left: 13px;
  }

  :hover {
    .label {
      border-bottom: white;
      text-decoration: underline;
    }
  }

  .icon {
    display: flex;
  }
`;
