import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { findObjectById } from "../../../../../utils/array";
import { IMAGE_COMING_SOON } from "../../../../enums/product";
import BasketCard from "./BasketCard";

function BasketProduct() {
  //  state ---------
  const { basket, isModeAdmin, handleDeleteBasketProduct, menu } =
    useContext(OrderContext);
  //  comportement ------
  const handleOnDelete = (id) => {
    handleDeleteBasketProduct(id);
  };
  return (
    <BasketProductStyled>
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu);
        return (
          <div className="basket-card" key={menuProduct.id}>
            <BasketCard
              {...menuProduct}
              quantity={basketProduct.quantity}
              imageSource={
                menuProduct.imageSource
                  ? menuProduct.imageSource
                  : IMAGE_COMING_SOON
              }
              onDelete={() => handleOnDelete(menuProduct.id)}
              isClickable={isModeAdmin}
            />
          </div>
        );
      })}
    </BasketProductStyled>
  );
}

const BasketProductStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .basket-card {
    /* border: 1px solid blue; */
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
      margin-top: 20px;
      /* border: 1px solid red; */
    }
    :last-child {
      margin-bottom: 20px;
    }
  }
`;

export default BasketProduct;
