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

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <AdminTabsStyled>
      <Tab
        className={isEditSelected ? "icon-activ" : ""}
        label={"Modifier un produit"}
        Icon={<MdModeEditOutline className="icon" />}
        onClick={() => selectTab("edit")}
      />

      <Tab
        className={isAddSelected ? "icon-activ" : ""}
        label={"Ajouter un produit"}
        Icon={<AiOutlinePlus className="icon" />}
        onClick={() => selectTab("add")}
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
