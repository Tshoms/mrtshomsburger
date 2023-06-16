import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
// import Tabs from "./Tabs";
import Tab from "../../../../reusable-ui/Tab";
import OrderContext from "../../../../../context/OrderContext";

function AdminTabs() {
  // state -------------------
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(OrderContext);
  // comportement ---------------

  const selectTab = (tabSelect) => {
    setIsCollapsed(false);
    if (tabSelect === "add") {
      setIsEditSelected(false);
      setIsAddSelected(true);
    }

    if (tabSelect === "edit") {
      setIsEditSelected(true);
      setIsAddSelected(false);
    }
  };

  // coonfig file method!!!
  const tabsConfig = [
    {
      label: "Modifier un produit",
      icon: <MdModeEditOutline className="icon" />,
      className: isEditSelected ? "icon-activ" : "",
      onClick: () => selectTab("edit"),
    },
    {
      label: "Ajouter un produit",
      icon: <AiOutlinePlus className="icon" />,
      className: isAddSelected ? "icon-activ" : "",
      onClick: () => selectTab("add"),
    },
    {
      label: "",
      icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
      className: isCollapsed ? "icon-activ" : "",
      onClick: () => setIsCollapsed(!isCollapsed),
    },
  ];

  return (
    <AdminTabsStyled>
      {tabsConfig.map((tab) => {
        return (
          <Tab
            label={tab.label}
            Icon={tab.icon}
            onClick={tab.onClick}
            className={tab.className}
          />
        );
      })}
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
