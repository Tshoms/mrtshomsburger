import React, { useContext } from "react";
import styled from "styled-components";
import TabAdd from "./tabs/TabAdd";
import TabUpdate from "./tabs/TabUpdate";
import OrderContext from "../../../../../context/OrderContext";

function AdminPanels() {
  const { isAddSelected, isEditSelected } = useContext(OrderContext);
  return (
    <AdminPanelStyle>
      {isAddSelected ? <TabAdd /> : ""}
      {isEditSelected ? <TabUpdate /> : ""}
    </AdminPanelStyle>
  );
}

const AdminPanelStyle = styled.div`
  /* height: 100%;
  width: 100%; */
  position: relative;

  .contents-add {
    height: 100%;
    width: 100%;
    background-color: white;
    border: 3px solid green;
    display: none;
  }

  .contents-update {
    height: 100%;
    width: 100%;
    background-color: white;
    border: 3px solid blue;
    display: none;
  }
`;

export default AdminPanels;
