import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function Tabs({ label, Icon, className, onClick }) {
  return (
    <TabsStyled className={className} onClick={onClick}>
      {Icon && Icon}
      <span>{label}</span>
    </TabsStyled>
  );
}

const TabsStyled = styled.button`
  display: flex;
  height: 100%;
  width: 40%;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  margin-right: 1px;
  border: 1px solid green;

  span {
    font-size: 17px;
    color: ${theme.colors.greyBlue};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: ${theme.colors.greyDark};
    }
  }
`;
