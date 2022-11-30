import React from "react";
import styled from "styled-components";

function TextInput({ value, onChange, Icon, ...restProps }) {
  return (
    <TextInputStyle>
      {Icon && Icon}
      <input value={value} onChange={onChange} {...restProps} />
    </TextInputStyle>
  );
}

const TextInputStyle = styled.div`
  display: flex;

  height: 40px;
  width: 50%;
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
