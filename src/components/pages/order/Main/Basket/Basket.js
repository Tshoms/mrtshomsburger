import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import Header from "../../../../reusable-ui/Header";
import Footer from "./Footer";
import Total from "./Total";

function Basket() {
  return (
    <BasketStyled>
      <Total AmountToPay={formatPrice(0)} />

      <div className="body">body</div>
      <Header>
        <Footer />
      </Header>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;

  .body {
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }
`;

export default Basket;
