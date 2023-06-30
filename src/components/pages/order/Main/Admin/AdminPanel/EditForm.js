import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import EditInfoMessage from "./EditInfoMessage";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextsConfig";

export default function UpdateForm() {
  // state -----------
  const { productSelected, handleEdit, setProductSelected, titleEditRef } =
    useContext(OrderContext);
  const inputTexts = getInputTextsConfig(productSelected);

  // comportement ---------
  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdate = {
      ...productSelected,
      [name]: value,
    };
    setProductSelected(productBeingUpdate); // Update de la valeur de l'objet dans le formulaire.
    handleEdit(productBeingUpdate); // Update de l'objet modifié et l'envoi à handleEdit.
  };
  // affichage ----------
  return (
    <TabUpdateStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            {...input}
            onChange={handleChange}
            version="minimaliste"
            ref={input.name === "title" ? titleEditRef : null}
          />
        ))}
      </div>
      <div className="submit">
        <EditInfoMessage />
      </div>
    </TabUpdateStyled>
  );
}

const TabUpdateStyled = styled.div`
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
  }

  .submit {
    grid-area: 4 / -2 / -2 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
