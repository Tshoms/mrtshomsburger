import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import Product from "./Product";

export default function Menu() {
  /* state ----------- */
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <MenuStyled>
      {menu.map((produits) => {
        return (
          <Product
            imageSource={produits.imageSource}
            title={produits.title}
            price={produits.price}
          />
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
`;
