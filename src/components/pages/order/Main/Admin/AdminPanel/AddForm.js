import React, { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { useDisplaySuccessMSG } from "../../../../../../hooks/useDisplaySuccessMSG";
import { replaceFrenchCommaWithDot } from "../../../../../../utils/maths";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import Form from "./Form";
import SubmitButton from "./SubmitButton";

export default function AddForm() {
  // state --------
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  // custom hooks ---------
  const { isSubmit, displaysuccessMSG } = useDisplaySuccessMSG();

  // comportement -------
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price),
    };

    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaysuccessMSG();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <Form
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmit={isSubmit}
    >
      <SubmitButton isSubmit={isSubmit} />
    </Form>
  );
}
