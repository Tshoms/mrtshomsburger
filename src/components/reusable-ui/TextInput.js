import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";

const TextInput = React.forwardRef(
  ({ onChange, icon, className, version = "normal", ...extratProps }, ref) => {
    return (
      <TextInputStyle className={className} version={version}>
        {icon && <div className="icon">{icon}</div>}
        <input ref={ref} type="text" onChange={onChange} {...extratProps} />
      </TextInputStyle>
    );
  }
);

export default TextInput;

const TextInputStyle = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex; // to center icon vertically
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
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
    background: ${theme.colors.background_white}; ////+
    color: ${theme.colors.dark};

    &:focus {
      outline: 0; //// add outline
    }
  }
`;

const extraStyle = {
  normal: extraNormal,
  minimaliste: extratMinimaliste,
};
