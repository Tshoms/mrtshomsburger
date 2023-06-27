import React from "react";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../theme";

function SubmitMessag() {
  return (
    <SubmitMessagStyled>
      <FiCheck className="icon" />
      <span className="message">Ajouter au panier!</span>
    </SubmitMessagStyled>
  );
}

const SubmitMessagStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  .icon {
    color: ${theme.colors.success};
    margin-left: 10px;
    width: 1em;
    height: 1em;
    border: 1px solid ${theme.colors.success};
    border-radius: 50%;
    vertical-align: middle;
  }

  .message {
    margin-left: 5px;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.success};
  }
`;

export default SubmitMessag;
