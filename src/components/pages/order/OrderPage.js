import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";
import Main from "./Main";

function OrderPage() {
  // state ----------
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("userName");
  // comportement -------

  // rendu ------------
  return (
    <OrderStyled>
      <div className="container">
        <NavBar userName={userName} />
        <Main />
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
    height: 95vh;
    display: flex;
    flex-direction: column;
    background-color: red;
    width: 1400px;
    /* width: 1200px; */
  }
`;

export default OrderPage;
