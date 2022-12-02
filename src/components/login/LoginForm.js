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
      <Liner />
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

      {/* <button className="button_with_icon">
        <span>Accéder à mon espace</span>
        <IoChevronForwardOutline className="icon_button_style" />
      </button> */}
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 55%;
  border: red;
  justify-content: center;
  align-items: center;

  h1 {
    @import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
    font-family: "Amatic SC", cursive;
    color: white;
    font-size: 35px;
  }

  h2 {
    @import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
    font-family: "Amatic SC", cursive;
    color: white;
    font-size: 25px;
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

const Liner = styled.div`
  border-top: 2px #ffca28 solid;
  border-top-color: #ef6207;
  border-top-style: solid;
  border-top-width: 3px;
  width: 60%;
  margin-top: 10px;
`;

export default LoginForm;
