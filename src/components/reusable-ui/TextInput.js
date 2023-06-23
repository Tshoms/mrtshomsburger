import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";

function TextInput({
  value,
  onChange,
  Icon,
  className,
  version = "normal",
  ...restProps
}) {
  return (
    <TextInputStyle className={className} version={version}>
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
  /* background-color: ${theme.colors.white}; */
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

  /* ${(props) => props.version === "normal" && extraNormal};
  ${(props) => props.version === "minimaliste" && extratMinimaliste}; */

  ${({ version }) => extraStyle[version]}
`;

const extraNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;

const extratMinimaliste = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.background_white};
    }
    &:focus {
      outline: 0;
    }
  }
`;

const extraStyle = {
  normal: extraNormal,
  minimaliste: extratMinimaliste,
};

export default TextInput;
