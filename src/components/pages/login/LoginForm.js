import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForwardOutline } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../../theme";

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

      <div className="container_form">
        <TextInput
          placeholder="Entrez votre prénom..."
          value={userName}
          onChange={handlechange}
          Icon={<BsPersonCircle className="icon" />}
        />
        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<IoChevronForwardOutline className="icon" />}
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

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin-left: 10px;
  }
`;

export default LoginForm;
