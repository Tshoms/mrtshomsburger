import React from "react";
import styled from "styled-components";

function Welcome() {
  return (
    <WelcomeStyled>
      <div className="desktop">
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div className="mobile">
        <h1>Mobile coming soon !</h1>
        <hr />
      </div>
    </WelcomeStyled>
  );
}

const WelcomeStyled = styled.div`
  @media (min-width: 1211px) {
    .mobile {
      display: none;
    }
  }
  @media (max-width: 1210px) {
    .desktop {
      display: none;
    }
  }
`;

export default Welcome;
