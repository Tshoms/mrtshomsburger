import React, { useContext } from "react";
import styled from "styled-components";
// import { theme } from "../../../../../../theme";
// import TextInput from "../../../../../reusable-ui/TextInput";
// import { FaHamburger } from "react-icons/fa";
// import { BsFillCameraFill } from "react-icons/bs";
// import { BiEuro } from "react-icons/bi";
// import SelectStore from "../select/SelectStore";
// import SelectPub from "../select/SelectPub";
// import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import OrderContext from "../../../../../../context/OrderContext";

export default function AddForm() {
  // state --------
  const { handleAdd } = useContext(OrderContext);

  const newProduct = {
    id: new Date().getTime(),
    title: "nouveau produit",
    image:
      "https://www.radiofrance.fr/s3/cruiser-production/2020/07/aac65c59-6e65-4410-9929-9ff6359d4861/1200x680_photo-1572802419224-296b0aeee0d9.jpg",
    price: 2.5,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newProduct);
  };
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview"></div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Url image" />
        <input type="text" placeholder="prix" />
      </div>
      <button className="submit-btn">button</button>
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
  }

  .input-fields {
    background-color: blue;
    grid-area: 1 / 2 / -2 / 2;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  .submit-btn {
    background-color: green;
    grid-area: 4 / -2 / -2 / -1;
    width: 50%;
  }
`;
