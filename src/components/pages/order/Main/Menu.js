import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";

export default function Menu() {
  /* state ----------- */
  const [menu] = useState(fakeMenu.MEDIUM);

  return (
    <MenuStyled>
      {menu.map(({ id, imageSource, title, price }) => {
        return (
          <Card
            key={id}
            imageSource={imageSource}
            title={title}
            price={price}
            leftDescription={formatPrice(price)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  position: relative;
  /* border: 1px solid blue; */
  background-color: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px; /*à maitriser */
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
