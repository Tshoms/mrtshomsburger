import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import burgerbackground from "../../assets/LoginPageStyled.jpg";
import Brand from "../Brand";
// import { FaUser } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
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
        <Liner />
        <H2>Connectez-vous</H2>
        <InputStyled>
          <MdAccountCircle size="20px" color="grey" />
          <Input
            type="text"
            placeholder="Entrez votre prénom..."
            value={userName}
            onChange={handlechange}
            required
          />
        </InputStyled>

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
  @import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
  font-family: "Amatic SC", cursive;
  color: white;
  font-size: 35px;
`;

const H2 = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
  font-family: "Amatic SC", cursive;
  color: white;
  font-size: 25px;
`;

const InputStyled = styled.div`
  height: 40px;
  width: 50%;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const Input = styled.input`
  height: 20px;
  width: 75%;
  outline-width: 0;
  margin: 15px;

  border: none;
`;

const Button = styled.button`
  height: 40px;
  width: 51%;
  background-color: orange;
  color: white;
  border-radius: 5px;
  border: none;
`;

const Liner = styled.div`
  border-top: 2px #ffca28 solid;
  border-top-color: #ef6207;
  border-top-style: solid;
  border-top-width: 3px;
  width: 60%;
  margin-top: 10px;
`;

export default LoginForm;
