import React, { useContext, useState } from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import OrderContext from "../../../../../../context/OrderContext";
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessag from "./SubmitMessag";
import { getInputTextsConfig } from "./inputTextsConfig";
import { EMPTY_PRODUCT } from "../../../../../enums/product";

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
  const inputTexts = getInputTextsConfig(newProduct);

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            {...input}
            onChange={handleChange}
            version="minimaliste"
          />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-btn"
          version="success"
          label={"Ajouter un nouveaux produit au menu"}
        />
        {isSubmit && <SubmitMessag />}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  height: 100%;
  width: 70%;
  border: 1px solid red;
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
  }

  .submit {
    grid-area: 4 / -2 / -2 / -1;
    display: flex;
    align-items: center;

    .submit-btn {
      height: 100%;
    }
  }
`;
