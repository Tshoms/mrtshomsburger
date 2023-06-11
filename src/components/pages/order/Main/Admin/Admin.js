import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useState } from "react";
import AdminTabs from "./AdminTabs";
import AdminPanels from "./AdminPanels";
import OrderContext from "../../../../../context/OrderContext";

export default function Admin() {
  // state -------
  const [toggleTabs, setToggleTabs] = useState(1);
  const { isCollapsed } = useContext(OrderContext);
  // const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <AdminStyled>
      <AdminTabs
        setToggleTabs={setToggleTabs}
        // setIsCollapsed={setIsCollapsed}
        // isCollapsed={isCollapsed}
      />

      {!isCollapsed && <AdminPanels toggleTabs={toggleTabs} />}
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
`;
