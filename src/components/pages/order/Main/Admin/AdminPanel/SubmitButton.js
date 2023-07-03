import React from "react";
import Button from "../../../../../reusable-ui/Button";
import SubmitMessag from "./SubmitMessag";

export default function SubmitButton({ isSubmit }) {
  return (
    <>
      <Button
        className="submit-btn"
        version="success"
        label={"Ajouter un nouveaux produit au menu"}
      />
      {isSubmit && <SubmitMessag />}
    </>
  );
}
