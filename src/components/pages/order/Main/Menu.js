import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { fakeMenu1, fakeMenu2 } from "../../../../fakeData/fakeMenu";

export default function Menu() {
  /* state ----------- */
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <MenuStyled>
      {menu.map((produits) => {
        return <div>{produits.title}</div>;
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background-color: purple;
`;
