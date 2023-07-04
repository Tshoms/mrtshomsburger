import React from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import BasketBody from "./BasketBody";
import Footer from "./Footer";
import Total from "./Total";

function Basket() {
  return (
    <BasketStyled>
      <Total AmountToPay={formatPrice(0)} />
      <BasketBody />
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
