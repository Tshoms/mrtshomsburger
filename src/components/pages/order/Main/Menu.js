import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import Product from "./Product";

export default function Menu() {
  /* state ----------- */
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <MenuStyled>
      {menu.map(({ id, imageSource, title, price }) => {
        return (
          <Product
            key={id}
            imageSource={imageSource}
            title={title}
            price={price}
            leftDescription={formatPrice(price)}
            label={"Ajouter"}
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
