import React from "react";
import styled from "styled-components";
import { getInputTextsConfig } from "./inputTextsConfig";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import Button from "../../../../../reusable-ui/Button";
import SubmitMessag from "./SubmitMessag";

const Form = React.forwardRef(
  ({ onSubmit, onChange, product, isSubmit, children }, ref) => {
    // state --------

    // comportement ------

    const inputTexts = getInputTextsConfig(product);
    // render --------
    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
          {inputTexts.map((input) => (
            <TextInput
              key={input.id}
              {...input}
              onChange={onChange}
              version="minimaliste"
              ref={ref && input.name === "title" ? ref : null}
            />
          ))}
        </div>
        {/* {onSubmit && (
          <div className="submit">
            <Button
              className="submit-btn"
              version="success"
              label={"Ajouter un nouveaux produit au menu"}
            />
            {isSubmit && <SubmitMessag />}
          </div>
        )} */}
        <div className="submit">{children}</div>
      </FormStyled>
    );
  }
);

const FormStyled = styled.form`
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

    .submit-btn {
      height: 100%;
    }
  }
`;
export default Form;
