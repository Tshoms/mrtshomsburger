import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
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
        <BasketProduct />
      )}
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
`;

export default Basket;
