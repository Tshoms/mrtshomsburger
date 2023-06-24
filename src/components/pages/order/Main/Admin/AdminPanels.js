import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { getTabIndexSelected, tabsConfig } from "./TabsConfig";

function AdminPanels() {
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = tabsConfig;
  const TabSelected = getTabIndexSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyle>{TabSelected && TabSelected.content}</AdminPanelStyle>
  );
}

const AdminPanelStyle = styled.div`
  height: 240px;
  padding-left: 20px;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 30px 5%;
  box-sizing: border-box;
`;

export default AdminPanels;
