import React from "react";
import styled from "styled-components";

export default function Product({ imageSource, title, price }) {
  return (
    <ProductStyled className="produit">
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="price">{price}</div>
          <button>ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  width: 200px;
  height: 300px;
  background: red;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  margin-top: 30px;

  .image {
    border: 1px solid yellow;
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .description {
    border: 1px solid yellow;
    display: flex;
    flex-direction: column;
    .price {
      width: 100%;
    }
  }
`;
