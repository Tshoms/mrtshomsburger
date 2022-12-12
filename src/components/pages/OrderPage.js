import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../NavBar";

function OrderPage() {
  // state ----------
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("userName");
  // comportement -------

  // rendu ------------
  return (
    <OrderStyled>
      <div className="container">
        <NavBar />
        <h2>{`Bonjour ${userName}`}</h2>
      </div>
    </OrderStyled>
  );
}

const OrderStyled = styled.div`
  background-color: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: red;
    height: 95vh;
    /* width: 1400px; */
    width: 1200px;
  }
`;

export default OrderPage;
