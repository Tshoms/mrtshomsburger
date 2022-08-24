import React, { useState } from "react";

function LoginForm() {
  // state -----------------
  const [inputValue, setInputValue] = useState("");

  // comportement --------------
  const handlechange = (event) => {
    setInputValue(event.target.value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    alert(`bonjour ${inputValue}`);
    setInputValue("");
  };

  // render (le rendu) -------------------
  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        required
        value={inputValue}
        onChange={handlechange}
      />
      <button>valider</button>
    </form>
  );
}

export default LoginForm;
