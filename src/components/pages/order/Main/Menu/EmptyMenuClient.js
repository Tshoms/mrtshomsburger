import React from "react";
import styled from "styled-components";

function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <span>Pas de produit pour toi le client...</span>
    </EmptyMenuClientStyled>
  );
}

const EmptyMenuClientStyled = styled.div``;

export default EmptyMenuClient;
