import React from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../NavBar";

function OrderPage() {
  // state ----------
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("userName");
  // comportement -------

  // rendu ------------
  return (
    <form>
      <NavBar />
      <h2>{`Bonjour ${userName}`}</h2>
    </form>
  );
}

export default OrderPage;
