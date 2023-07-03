import React, { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";

// import EditInfoMessage from "./EditInfoMessage";

export default function UpdateForm() {
  // state -----------
  const { productSelected, handleEdit, setProductSelected, titleEditRef } =
    useContext(OrderContext);

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
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
}
