import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

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
    <form onSubmit={handlesubmit}>
      <h1>Bienvenue chez nous!</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        value={userName}
        onChange={handlechange}
      />

      <button>Accéder à votre espace</button>
    </form>
  );
}

export default LoginForm;
