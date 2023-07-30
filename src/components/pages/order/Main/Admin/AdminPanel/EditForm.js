import React, { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";
import { useDisplaySuccessMSG } from "../../../../../../hooks/useDisplaySuccessMSG";
import SavingMessag from "./SavingMessag";

export default function UpdateForm() {
  // state -----------
  const {
    userName,
    productSelected,
    handleEdit,
    setProductSelected,
    titleEditRef,
  } = useContext(OrderContext);

  const [valueOnFocus, setValueOnFocus] = useState();
  const { isSubmit: isSaved, displaysuccessMSG } = useDisplaySuccessMSG();

  // comportement ---------
  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdate = {
      ...productSelected,
      [name]: value,
    };
    setProductSelected(productBeingUpdate); // Update de la valeur de l'objet dans le formulaire.
    handleEdit(userName, productBeingUpdate); // Update de l'objet modifié et l'envoi à handleEdit.
  };

  const handleFocus = (event) => {
    const valueOnFocus = event.target.value;
    setValueOnFocus(valueOnFocus);
  };

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocus !== valueOnBlur) {
      displaysuccessMSG();
    }
  };
  // affichage ----------
  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleOnBlur}
      ref={titleEditRef}
    >
      {isSaved ? <SavingMessag /> : <EditInfoMessage />}
    </Form>
  );
}
