import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
// import Tabs from "./Tabs";
import Tab from "../../../../reusable-ui/Tab";

function AdminTabs({ setToggleTabs, isCollapsed, setIsCollapsed }) {
  // state -------------------
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  // comportement ---------------
  const selectAddTab = (index) => {
    setToggleTabs(index);
    setIsEditSelected(false);
    setIsAddSelected(true);
    setIsCollapsed(false);
  };

  const selectEditTab = (index) => {
    setToggleTabs(index);
    setIsEditSelected(true);
    setIsAddSelected(false);
    setIsCollapsed(false);
  };

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <AdminTabsStyled>
      <Tab
        className={isEditSelected ? "icon-activ" : ""}
        label={"Modifier un produit"}
        Icon={<MdModeEditOutline className="icon" />}
        onClick={() => selectEditTab(2)}
      />

      <Tab
        className={isAddSelected ? "icon-activ" : ""}
        label={"Ajouter un produit"}
        Icon={<AiOutlinePlus className="icon" />}
        onClick={() => selectAddTab(1)}
      />

      <Tab
        className={isCollapsed ? "icon-activ" : ""}
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={toggleCollapsed}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 40px;
  width: 40%;
  border: 1px solid green;
  position: absolute;
  top: -45px;
  left: 10px;
  border: 1px solid transparent;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }

  .icon-activ {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    background-color: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;

export default AdminTabs;
