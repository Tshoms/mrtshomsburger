import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Button({
  label,
  Icon,
  className,
  version = "success",
  onClick,
}) {
  return (
    <ButtonStyle className={className} version={version} onClick={onClick}>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  ${({ version }) => extraStyle[version]}
`;

const extraStylePrimary = css`
  /* background-color: ${theme.colors.primary_burger}; */
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: ${theme.colors.primary_burger};
  border: 1px solid ${theme.colors.primary_burger};
  :hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 35px;
  padding: 0 1.5em;

  border: 1px solid ${theme.colors.background_white};

  font-weight: ${theme.fonts.weights.semiBold};

  :hover {
    border: 1px solid ${theme.colors.success};
    background: ${theme.colors.white};
    color: ${theme.colors.success};
  }

  :after {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`;

const extraStyle = {
  normale: extraStylePrimary,
  success: extraStyleSuccess,
};
