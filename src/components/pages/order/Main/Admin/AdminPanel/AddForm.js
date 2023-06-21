import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
// import { theme } from "../../../../../../theme";
// import TextInput from "../../../../../reusable-ui/TextInput";
// import { FaHamburger } from "react-icons/fa";
// import { BsFillCameraFill } from "react-icons/bs";
// import { BiEuro } from "react-icons/bi";
// import SelectStore from "../select/SelectStore";
// import SelectPub from "../select/SelectPub";
// import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import OrderContext from "../../../../../../context/OrderContext";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  // state --------
  const { handleAdd } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmit, setisSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaysuccessMSG();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const displaysuccessMSG = () => {
    setisSubmit(true);
    setTimeout(() => {
      setisSubmit(false);
    }, 2000);
  };
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div>Aucune image</div>
        )}
      </div>
      <div className="input-fields">
        <input
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          type="text"
          placeholder="Nom du produit (ex: super burger)"
        />
        <input
          name="imageSource"
          value={newProduct.imageSource}
          onChange={handleChange}
          type="text"
          placeholder="lien Url d'une image (ex: https://la-photo-de-mon-image.png)"
        />
        <input
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
          type="text"
          placeholder="prix"
        />
      </div>
      <div className="submit">
        <button className="submit-btn">button</button>{" "}
        {isSubmit && (
          <div className="submit-messag">
            <FiCheck />
            <span>Ajouter au panier!</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  height: 100%;
  width: 70%;
  border: 1px solid black;
  // grid.
  display: grid;
  grid-template-columns: 1fr 3fr; // nb colone (columns).
  grid-template-rows: repeat(4, 1fr); // nb étage (rows).

  .image-preview {
    background-color: red;
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .input-fields {
    background-color: blue;
    grid-area: 1 / 2 / -2 / 2;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  .submit {
    background-color: green;
    grid-area: 4 / -2 / -2 / -1;
    width: 50%;
    display: flex;
    align-items: center;
    /* justify-content: center; */

    .submit-btn {
      width: 50%;
    }

    .submit-messag {
    }
  }
`;
