import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}

export default NavBar;
