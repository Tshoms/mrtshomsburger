import { db } from "./firebase-config";
import { doc, setDoc } from "firebase/firestore";

export const syncBothMenus = (idUser, menuUpdate) => {
  // chemin/ cachette .
  const cachette = doc(db, "users", idUser);
  const nourriture = {
    username: idUser,
    menu: menuUpdate,
  };
  setDoc(cachette, nourriture);
};
