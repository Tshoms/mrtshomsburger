import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import Tabs from "./Tabs";
import Tab from "../../../../reusable-ui/Tab";

function AdminTabs({ setToggleTabs, isCollapsed, setIsCollapsed }) {
  // state -------------------

  // comportement ---------------
  // const toggletab = (index) => {
  //   setToggleTabs(index);
  // };

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <AdminTabsStyled>
      {/* <Tab
        label={"Modifier un produit"}
        Icon={<FaPen className="icon" />}
        onClick={() => toggletab(2)}
      />

      <Tab
        label={"Ajouter un produit"}
        Icon={<FaPlus className="icon" />}
        onClick={() => toggletab(1)}
      /> */}
      {/* <ButtonSize /> */}

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
    color: ${theme.colors.greyDark};
    font-size: 14px;
    margin-right: 7px;
  }

  .icon-activ {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin-right: 7px;
    background-color: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
  }

  .icon-button-size {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: ${theme.colors.greySemiDark};
  }

  .active-tabs {
    background-color: white;
  }
`;

export default AdminTabs;
