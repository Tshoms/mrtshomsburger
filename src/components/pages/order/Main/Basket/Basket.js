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
  // state ------
  const { basket, isModeAdmin } = useContext(OrderContext);
  const isBasketEmpty = basket.length === 0;
  // comportement ------
  const totalPrice = basket.reduce((total, BasketProduct) => {
    // if (isNaN(BasketProduct.price)) return total;
    total += BasketProduct.price * BasketProduct.quantity;
    return total;
  }, 0);
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(totalPrice)} />
      {isBasketEmpty ? (
        <EmptyBasket basketProduct={basket} />
      ) : (
        <BasketProduct basket={basket} isModeAdmin={isModeAdmin} />
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
