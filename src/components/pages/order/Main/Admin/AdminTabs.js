import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Tab from "../../../../reusable-ui/Tab";
import { getTabsConfig } from "./tabsConfig";
import OrderContext from "../../../../../context/OrderContext";

function AdminTabs() {
  // state -------------------
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);
  // comportement ---------------

  const selectTab = (tabSelect) => {
    setIsCollapsed(false);
    setCurrentTabSelected(tabSelect);
  };

  const tabs = getTabsConfig();

  return (
    <AdminTabsStyled>
      {tabs.map((tab) => {
        return (
          <Tab
            key={tab.index}
            label={tab.label}
            Icon={tab.icon}
            onClick={() => selectTab(tab.index)}
            className={currentTabSelected === tab.index ? "icon-activ" : ""}
          />
        );
      })}
      <Tab
        className={isCollapsed ? "icon-activ" : ""}
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  top: -44px;
  left: 45px;
  /* border: 1px solid red; */

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
  }

  .icon-activ {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border: none;
  }

  button {
    margin-left: 1px;
  }
`;

export default AdminTabs;
