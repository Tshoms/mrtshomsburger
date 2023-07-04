import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";
import EmptyBasket from "./EmptyBasket";
import Footer from "./Footer";
import Total from "./Total";

function Basket() {
  const { basket } = useContext(OrderContext);
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <EmptyBasket basketProduct={basket} />
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
