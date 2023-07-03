import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

function Basket() {
  return (
    <BasketStyled>
      <div className="head">head</div>
      <div className="body">body</div>
      <div className="footer">footer</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  .head {
    height: 70px;
    background: ${theme.colors.background_dark};
  }
  .body {
    flex: 1;
    background: ${theme.colors.background_white};
  }
  .footer {
    height: 70px;
    background: ${theme.colors.background_dark};
  }
`;

export default Basket;
