import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import BasketProduct from "./BasketProduct";
import EmptyBasket from "./EmptyBasket";
import Footer from "./Footer";
import Total from "./Total";

function Basket() {
  const { basket } = useContext(OrderContext);

  const isBasketEmpty = basket.length === 0;
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      {isBasketEmpty ? (
        <EmptyBasket basketProduct={basket} />
      ) : (
        <BasketProduct basket={basket} />
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
