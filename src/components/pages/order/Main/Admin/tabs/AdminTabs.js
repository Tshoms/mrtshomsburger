import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { FaAngleDown, FaPen, FaPlus } from "react-icons/fa";
import Tabs from "./Tabs";
import ButtonSize from "./ButtonSize";

function AdminTabs({ setToggleTabs }) {
  // state -------------------

  // comportement ---------------
  const toggletab = (index) => {
    setToggleTabs(index);
  };
  return (
    <AdminTabsStyled>
      <Tabs
        label={"Modifier un produit"}
        Icon={<FaPen className="icon" />}
        onClick={() => toggletab(2)}
      />

      <Tabs
        label={"Ajouter un produit"}
        Icon={<FaPlus className="icon" />}
        onClick={() => toggletab(1)}
      />

      <ButtonSize
        Icon={<FaAngleDown className="icon-button-size" />}
        onClick={toggletab}
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
  top: -40px;
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

  .icon-button-size {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: ${theme.colors.greyDark};
  }

  .active-tabs {
    background-color: white;
  }
`;

export default AdminTabs;
