import React from "react";
import styled from "styled-components";

export default function Admin() {
  return (
    <Adminstyled>
      <div className="container-tabs">
        <div className="bloc-tabs">
          <div className="tabs-button-modif">
            <span>Modifier un produit</span>
          </div>

          <div className="tabs-button-add">
            <span>Ajouter un produit</span>
          </div>

          <div className="button-panel-low">
            <button></button>
          </div>
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

      .tabs-button-add {
        display: flex;
        height: 100%;
        width: 40%;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        margin-right: 1px;
        border: 1px solid green;
      }
      .tabs-button-modif {
        display: flex;
        height: 100%;
        width: 40%;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        margin-right: 1px;
        border: 1px solid green;
      }

      .button-panel-low {
        display: flex;
        height: 100%;
        width: 10%;
        align-items: center;
        justify-content: center;
        background-color: black;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        margin-right: 1px;
        border: 1px solid green;
      }

      .span {
        font-weight: 500;
      }
    }

    .tabs-add {
    }

    .tabs-modif {
    }
  }
`;
