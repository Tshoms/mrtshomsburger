import React from "react";
import styled from "styled-components";

function TextInput({ value, onChange, Icon, ...restProps }) {
  return (
    <TextInputStyle>
      {Icon && Icon}
      <input
        type="text"
        value={value}
        onChange={onChange}
        {...restProps}
        placeholder="Entrez votre prénom..."
        required
      />
    </TextInputStyle>
  );
}

const TextInputStyle = styled.div`
  display: flex;

  height: 60px;
  width: 60%;
  background-color: white;
  padding-left: 7px;
  margin-bottom: 20px;
  border-radius: 5px;
  align-items: center;

  input {
    height: 20px;
    width: 100%;
    outline-width: 0;
    margin: 10px;

    border: none;
  }
`;

export default TextInput;
