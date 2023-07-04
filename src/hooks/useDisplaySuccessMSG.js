import { useState } from "react";

export const useDisplaySuccessMSG = () => {
  // state ------
  const [isSubmit, setisSubmit] = useState(false);
  // comportement ----------
  const displaysuccessMSG = () => {
    setisSubmit(true);
    setTimeout(() => {
      setisSubmit(false);
    }, 2000);
  };

  return { isSubmit, displaysuccessMSG };
};
