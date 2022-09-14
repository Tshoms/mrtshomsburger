import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import burgerbackground from "../../assets/LoginPageStyled.jpg";
import Brand from "../Brand";

// import LogoStyled from "../LogoStyled";
function LoginForm() {
  // state -----------------
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  // comportement --------------
  const handlechange = (event) => {
    setUserName(event.target.value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    // alert(`bonjour ${inputValue}`);
    navigate({
      pathname: "/Orderpage/:user",
      search: createSearchParams({
        userName: userName,
      }).toString(),
    });

    setUserName("");
  };

  // render (le rendu) -------------------
  return (
    <LoginPageStyled>
      <Brand />
      <LoginFormStyled onSubmit={handlesubmit}>
        <H1>Bienvenue chez nous !</H1>
        <br />
        <H2>Connectez-vous</H2>
        <Input
          type="text"
          placeholder="Entrez votre prénom..."
          value={userName}
          onChange={handlechange}
        />

        <Button>Accéder à mon espace</Button>
      </LoginFormStyled>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${burgerbackground});
  // opacity: 0.33;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 750px;
  justify-content: center;
  align-items: center;
`;

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 55%;
  border: red;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  color: white;
  font-size: 35px;
`;

const H2 = styled.h1`
  color: white;
  font-size: 25px;
`;

const Input = styled.input`
  height: 30px;
  width: 50%;
  margin-bottom: 20px;
`;

const Button = styled.button`
  height: 37px;
  width: 51%;
  background-color: orange;
  color: white;
`;

export default LoginForm;
