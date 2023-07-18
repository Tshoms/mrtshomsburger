import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { isEmpty } from "../../../../../utils/array";
import BasketProduct from "./BasketProduct";
import EmptyBasket from "./EmptyBasket";
import Footer from "./Footer";
import Total from "./Total";

function Basket() {
  // state ------
  const { basket } = useContext(OrderContext);

  // comportement ------

  return (
    <BasketStyled>
      <Total />
      {isEmpty(basket) ? (
        <EmptyBasket basketProduct={basket} />
      ) : (
        <BasketProduct />
      )}
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;
`;

export default Basket;
