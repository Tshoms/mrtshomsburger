import React, { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import Form from "./Form";

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
    <Form
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmit={isSubmit}
    />
  );
}
