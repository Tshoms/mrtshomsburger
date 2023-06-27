import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminTabs from "./AdminTabs";
import AdminPanels from "./AdminPanels";
import OrderContext from "../../../../../context/OrderContext";

export default function Admin() {
  // state -------
  const { isCollapsed } = useContext(OrderContext);

  return (
    <AdminStyled>
      <AdminTabs />

      {!isCollapsed && <AdminPanels />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  background-color: white;
  /* border-bottom-left-radius: ${theme.borderRadius.extraRound}; */
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;
