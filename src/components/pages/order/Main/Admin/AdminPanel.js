import React from "react";
import styled from "styled-components";
// import Tabs from "./tabs/Tabs";
// import { FaAngleDown, FaPen, FaPlus } from "react-icons/fa";
import { theme } from "../../../../../theme";
// import ButtonSize from "./tabs/ButtonSize";
import { useState } from "react";
import TabsAdd from "./tabs/TabAdd";
import TabUpdate from "./tabs/TabUpdate";
import AdminTabs from "./tabs/AdminTabs";

export default function AdminPanel() {
  // state -------
  const [toggleTabs, setToggleTabs] = useState(1);

  return (
    <Adminstyled>
      <div className="container-tabs">
        <AdminTabs setToggleTabs={setToggleTabs} />

        <div className="bloc-contenu-tabs">
          <div className={toggleTabs === 1 ? <TabsAdd /> : "contents-add"}>
            <TabsAdd />
          </div>
          <div className={toggleTabs === 2 ? <TabUpdate /> : "contents-update"}>
            <TabUpdate />
          </div>
        </div>
      </div>
    </Adminstyled>
  );
}

const Adminstyled = styled.div`
  height: 280px;
  width: 100%;
  /* border: 1px solid red; */
  background-color: white;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  position: absolute; /* imporant pour le composant <Admin/> */
  bottom: 0;

  .container-tabs {
    height: 100%;
    width: 100%;
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
  }
`;
