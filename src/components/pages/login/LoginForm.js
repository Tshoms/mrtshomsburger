import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForwardOutline } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import { authenticateUser } from "../../../api/user";
import Welcome from "./Welcome";

function LoginForm() {
  // state -----------------
  const [userName, setUserName] = useState("Jordy");
  const navigate = useNavigate();

  // comportement --------------
  const handlechange = (event) => {
    setUserName(event.target.value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    // auth from user ---
    authenticateUser(userName);
    // redirect in OrderPage ---
    navigate({
      pathname: "/Orderpage/:user",
      search: createSearchParams({
        userName: userName,
      }).toString(),
    });

    setUserName("");
  };

  // render ------------
  return (
    <LoginFormStyled onSubmit={handlesubmit}>
      <Welcome />
      <div className="container_form">
        <TextInput
          placeholder="Entrez votre prénom..."
          value={userName}
          onChange={handlechange}
          Icon={<BsPersonCircle />}
          className="input-login"
          version="normal"
        />
        <Button
          label={"Accéder à mon espace"}
          Icon={<IoChevronForwardOutline />}
          version="normale"
        />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: 370px;
  width: 55%;
  justify-content: center;
  width: 480px;
  align-items: center;
  margin-top: 50px;

  .container_form {
    width: 100%;
  }

  hr {
    border: 1.5px solid #f56a2c;
    width: 100%;
  }

  h1 {
    font-family: "Amatic SC", cursive;
    color: white;
    font-size: 48px;
  }

  h2 {
    font-family: "Amatic SC", cursive;
    color: white;
    font-size: 36px;
  }

  .input-login {
    margin: 18px 0;
  }

  @media (max-width: 1210px) {
    .container_form {
      display: none;
    }
  }
`;

export default LoginForm;
