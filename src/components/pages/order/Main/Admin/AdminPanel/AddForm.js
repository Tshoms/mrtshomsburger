import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { FiCheck } from "react-icons/fi";
import TextInput from "../../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

// import SelectStore from "../select/SelectStore";
// import SelectPub from "../select/SelectPub";
// import Button from "../../../../../reusable-ui/Button";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  // state --------
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
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
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        <TextInput
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          type="text"
          placeholder="Nom du produit (ex: super burger)"
          Icon={<FaHamburger />}
          version="minimaliste"
        />
        <TextInput
          name="imageSource"
          value={newProduct.imageSource}
          onChange={handleChange}
          type="text"
          placeholder="lien Url d'une image (ex: https://la-photo-de-mon-image.png)"
          Icon={<BsFillCameraFill />}
          version="minimaliste"
        />
        <TextInput
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
          type="text"
          placeholder="prix"
          Icon={<MdOutlineEuro />}
          version="minimaliste"
        />
      </div>
      <div className="submit">
        <Button
          className="submit-btn"
          version="minimaliste"
          label={"Ajouter un nouveaux produit au menu."}
        />
        {isSubmit && (
          <div className="submit-message">
            <FiCheck className="icon" />
            <span className="message">Ajouter au panier!</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  height: 100%;
  width: 70%;

  // grid.
  display: grid;
  grid-template-columns: 1fr 3fr; // nb colone (columns).
  grid-template-rows: repeat(4, 1fr); // nb étage (rows).
  grid-column-gap: 20px; // space betwen column w/ grid
  grid-row-gap: 8px; // space betwen row w/ grid.

  .input-fields {
    grid-area: 1 / 2 / -2 / 2;

    display: grid;
    grid-row-gap: 8px;
    /* grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr); */
  }

  .submit {
    grid-area: 4 / -2 / -2 / -1;
    display: flex;
    align-items: center;

    .submit-btn {
      width: 50%;
    }

    .submit-message {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5px;
      .icon {
        color: ${theme.colors.success};
        margin-left: 10px;
        width: 1em;
        height: 1em;
        border: 1px solid ${theme.colors.success};
        border-radius: 50%;
        vertical-align: middle;
      }

      .message {
        margin-left: 5px;
        font-size: ${theme.fonts.size.SM};
        color: ${theme.colors.success};
      }
    }
  }
`;
