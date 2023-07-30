import React from "react";
import { BsCloudCheck } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

function SavingMessag() {
  return (
    <SavingMessagStyled>
      <span className="succes-message">
        <BsCloudCheck />
        Modifications enregistrées !
      </span>
    </SavingMessagStyled>
  );
}

const SavingMessagStyled = styled.div`
  .succes-message {
    display: flex;
    align-items: center;
    color: ${theme.colors.blue};
    font-family: "Open Sans", sans-serif;
    font-size: ${theme.fonts.P0};
    line-height: 20px;
    font-weight: ${theme.weights.regular};
    svg {
      margin-right: 10px;
      width: 18px;
      height: 18px;
    }
  }
`;

export default SavingMessag;
