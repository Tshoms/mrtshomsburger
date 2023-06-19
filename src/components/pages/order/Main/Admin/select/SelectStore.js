import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function SelectStore() {
  return (
    <SelectStoreStyled>
      <select className="select-contenair">
        <option value="En stock">En stock</option>
        <option value="En rupture">En rupture</option>
      </select>
    </SelectStoreStyled>
  );
}

const SelectStoreStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 25%;
  background-color: ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round};
  margin-left: 7px;
`;
