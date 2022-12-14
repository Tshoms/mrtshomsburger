import React from "react";
import styled from "styled-components";
import burgerbackground from "../../assets/LoginPageStyled.jpg";
import Brand from "../reusable-ui/Brand";
import LoginForm from "./LoginForm";

function LoginPage() {
  // render (le rendu) -------------------
  return (
    <LoginPageStyled>
      <Brand className="logo-login-page" />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
`;

export default LoginPage;
