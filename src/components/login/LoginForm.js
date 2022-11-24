import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { FaUser } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

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

  return (
    <LoginFormStyled onSubmit={handlesubmit}>
      <h1>Bienvenue chez nous !</h1>
      <Liner />
      <h2>Connectez-vous</h2>
      <div div className="InputStyled">
        <MdAccountCircle size="20px" color="grey" />
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          value={userName}
          onChange={handlechange}
          required
        />
      </div>

      <button>Accéder à mon espace</button>
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

  .InputStyled {
    height: 40px;
    width: 50%;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 5px;
  }

  input {
    height: 20px;
    width: 75%;
    outline-width: 0;
    margin: 15px;

    border: none;
  }

  button {
    height: 40px;
    width: 51%;
    background-color: orange;
    color: white;
    border-radius: 5px;
    border: none;
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
