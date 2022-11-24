import React from "react";
import styled from "styled-components";
import burgerbackground from "../../assets/LoginPageStyled.jpg";
import Brand from "../reusable-ui/Brand";
import LoginForm from "./LoginForm";

// import LogoStyled from "../LogoStyled";
function LoginPage() {
  // render (le rendu) -------------------
  return (
    <LoginPageStyled>
      <Brand />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${burgerbackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 750px;
  justify-content: center;
  align-items: center;
`;

export default LoginPage;
