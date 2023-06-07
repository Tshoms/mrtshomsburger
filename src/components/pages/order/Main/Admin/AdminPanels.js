import React from "react";
import styled from "styled-components";
import TabsAdd from "./tabs/TabAdd";
import TabUpdate from "./tabs/TabUpdate";

function AdminPanels({ toggleTabs }) {
  return (
    <AdminPanelStyle>
      <div className={toggleTabs === 1 ? <TabsAdd /> : "contents-add"}>
        <TabsAdd />
      </div>
      <div className={toggleTabs === 2 ? <TabUpdate /> : "contents-update"}>
        <TabUpdate />
      </div>
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
