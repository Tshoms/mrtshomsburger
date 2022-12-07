import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdAccountCircle } from "react-icons/md";
import { IoChevronForwardOutline } from "react-icons/io5";
import TextInput from "../reusable-ui/TextInput";
import PrimaryButton from "../reusable-ui/PrimaryButton";

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

  // render ------------
  return (
    <LoginFormStyled onSubmit={handlesubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <TextInput
        placeholder="Entrez votre prénom..."
        value={userName}
        onChange={handlechange}
        Icon={<MdAccountCircle className="icon_input_style" />}
      />

      <PrimaryButton
        Label={"Accéder à mon espace"}
        Icon={<IoChevronForwardOutline className="icon_button_style" />}
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: 370px;
  width: 55%;
  justify-content: center;
  align-items: center;

  hr {
    border: 1.5px solid #f56a2c;
    width: 480px;
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

  .icon_input_style {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: grey;
    margin-left: 10px;
  }

  .icon_button_style {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }
`;

export default LoginForm;
