import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

function TextInput({ value, onChange, Icon, className, ...restProps }) {
  return (
    <TextInputStyle className={className}>
      <div className="icon">{Icon && Icon}</div>
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
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin: 0px 8px 0px 10px;
    color: ${theme.colors.greySemiDark};
    /* min-width: 1em; // that way, the icon size is NOT affected by width of the entire component. */
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;

export default TextInput;
