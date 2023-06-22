import React from "react";
import styled from "styled-components";

function EmptyMenuAdmin({ handleClick }) {
  return (
    <EmptyMenuAdminStyled>
      <span>Pas de produit.</span>
      <button onClick={handleClick}>Générer de nouveaux produits.</button>
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div``;

export default EmptyMenuAdmin;
