import React from "react";
import styled from "styled-components";
import Tabs from "./tabs/Tabs";
import { FaAngleDown, FaPen, FaPlus } from "react-icons/fa";
import { theme } from "../../../../../theme";
import ButtonSize from "./tabs/ButtonSize";

export default function Admin() {
  return (
    <Adminstyled>
      <div className="container-tabs">
        <div className="bloc-tabs">
          <Tabs
            label={"Modifier un produit"}
            Icon={<FaPen className="icon" />}
          />

          <Tabs
            label={"Ajouter un produit"}
            Icon={<FaPlus className="icon" />}
          />

          <ButtonSize Icon={<FaAngleDown className="icon-button-size" />} />
        </div>
        <div className="bloc-contenu-tabs">
          <div className="tabs-add">
            <h1>contenu-ajouter 1</h1>
          </div>
          <div className="tabs-modif">
            <h1>contenu-modifier 2</h1>
          </div>
        </div>
      </div>
    </Adminstyled>
  );
}

const Adminstyled = styled.div`
  height: 280px;
  width: 100%;
  border: 1px solid red;
  background-color: white;
  position: absolute; /* imporant pour le composant <Admin/> */
  bottom: 0;

  .container-tabs {
    height: 100%;
    width: 100%;
    position: relative;
    .bloc-tabs {
      display: flex;
      flex-direction: row-reverse;
      height: 40px;
      width: 40%;
      border: 1px solid green;
      position: absolute;
      top: -65px;
      left: 55px;
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
        color: ${theme.colors.white};
      }
    }

    .tabs-add {
    }

    .tabs-modif {
    }
  }
`;
