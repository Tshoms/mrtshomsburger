import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function SelectPub() {
  return (
    <SelectPubStyled>
      <select className="select-contenair">
        <option value="En stock">Avec Pub</option>
        <option value="En rupture">Sans Pub</option>
      </select>
    </SelectPubStyled>
  );
}

const SelectPubStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 25%;
  background-color: ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round};
  margin-left: 7px;
`;
