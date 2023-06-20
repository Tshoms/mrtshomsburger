import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import TextInput from "../../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { BiEuro } from "react-icons/bi";
import SelectStore from "../select/SelectStore";
import SelectPub from "../select/SelectPub";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";

export default function AddForm() {
  return (
    <TabsAddStyled>
      <div className="image-preview"></div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Url image" />
        <input type="text" placeholder="prix" />
      </div>
      <div className="submit-btn"></div>
    </TabsAddStyled>
  );
}

const TabsAddStyled = styled.div`
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
  }
`;
