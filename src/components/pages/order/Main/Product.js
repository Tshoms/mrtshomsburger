import React from "react";

export default function Product({ imageSource, title, price }) {
  return (
    // <div>Product</div>
    <div className="produit">
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
    </div>
  );
}
