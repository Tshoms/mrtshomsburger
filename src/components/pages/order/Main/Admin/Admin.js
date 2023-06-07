import React from "react";
import styled from "styled-components";
// import Tabs from "./tabs/Tabs";
// import { FaAngleDown, FaPen, FaPlus } from "react-icons/fa";
import { theme } from "../../../../../theme";
// import ButtonSize from "./tabs/ButtonSize";
import { useState } from "react";
// import TabsAdd from "./tabs/TabAdd";
// import TabUpdate from "./tabs/TabUpdate";
import AdminTabs from "./AdminTabs";
import AdminPanels from "./AdminPanels";

export default function Admin() {
  // state -------
  const [toggleTabs, setToggleTabs] = useState(1);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <AdminStyled>
      <AdminTabs
        setToggleTabs={setToggleTabs}
        setIsCollapsed={setIsCollapsed}
        isCollapsed={isCollapsed}
      />

      {!isCollapsed && <AdminPanels toggleTabs={toggleTabs} />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  background-color: white;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  left: 0;
  right: 0;
  bottom: 0;
`;
