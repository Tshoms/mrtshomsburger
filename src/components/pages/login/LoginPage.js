import React from "react";
import styled from "styled-components";
import burgerbackground from "../../../assets/LoginPageStyled.jpg";
import Brand from "../../reusable-ui/Brand";
import LoginForm from "./LoginForm";

function LoginPage() {
  // render (le rendu) -------------------
  return (
    <LoginPageStyled>
      <Brand className="logo-login-page" />
      <h2 className="text-mobile">Mobile coming soon...</h2>
      <div className="devise">
        <LoginForm />
      </div>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  ::before {
    content: "";
    background: url(${burgerbackground}) rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .logo-login-page {
    transform: scale(2.5);
  }

  .text-mobile {
    color: white;
  }

  @media (min-width: 1210px) {
    .text-mobile {
      display: none;
    }
  }

  @media (max-width: 1210px) {
    .devise {
      display: none;
    }
  }
`;

export default LoginPage;
