import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";

export default function Menu() {
  /* state ----------- */
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <MenuStyled>
      {menu.map((produits) => {
        return (
          <div className="produit">
            <div className="image">
              <img src={produits.imageSource} alt={produits.title} />
            </div>
            <div className="info-text">
              <div className="title">{produits.title}</div>
              <div className="description">
                <div className="price">{produits.price}</div>
                <button>ajouter</button>
              </div>
            </div>
          </div>
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background-color: ${theme.colors.background_white};

  display: grid;
  grid-template-columns: repeat(4, 1fr); /*à maitriser */
  grid-row-gap: 60px; /*à maitriser */
  padding: 50px 50px 50px;
  justify-items: center;
  overflow-y: scroll; /* important pour le scroll */
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  .produit {
    width: 240px;
    height: 330px;
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .image {
      border: 1px solid yellow;
      width: 145px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .description {
      border: 1px solid yellow;
      display: flex;
      flex-direction: row;

      .price {
        width: 100%;
      }
    }
  }
`;
