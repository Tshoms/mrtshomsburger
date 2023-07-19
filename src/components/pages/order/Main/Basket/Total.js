import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import Header from "../../../../reusable-ui/Header";
import { calculateSumToPay } from "./helper";

function Total() {
  // state -------
  const { basket, menu } = useContext(OrderContext);
  const totalPrice = calculateSumToPay(basket, menu);

  // comportement --------

  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="amount">{formatPrice(totalPrice)}</span>
      </TotalStyled>
    </Header>
  );
}

const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;

export default Total;
