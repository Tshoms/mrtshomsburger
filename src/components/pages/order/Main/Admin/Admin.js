import React from "react";
import styled from "styled-components";

export default function Admin() {
  return (
    <Adminstyled>
      <div className="container-tabs">
        <div className="bloc-tabs">
          <div className="tabs-button-add">
            <h3>ajouter</h3>
          </div>
          <div className="tabs-button-modif">
            <h3>modifier</h3>
          </div>
        </div>
        <div className="bloc-contenu-tabs">
          <div className="tabs-add">
            <h1>contenu-jouter 1</h1>
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
      width: 30%;
      border: 1px solid green;
      background: grey;
      position: absolute;
      top: -63px;
      left: 55px;

      .tabs-button-add {
        display: flex;
        height: 100%;
        width: 40%;
        align-items: center;
        justify-content: center;
        background-color: white;
        border: 1px solid green;
      }
      .tabs-button-modif {
        display: flex;
        height: 100%;
        width: 40%;
        align-items: center;
        justify-content: center;
        background-color: white;
        border: 1px solid green;
      }
    }

    .tabs-add {
    }

    .tabs-modif {
    }
  }
`;
