import { db } from "./firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const syncBothMenus = (idUser, menuUpdate) => {
  // chemin/ cachette .
  const cachette = doc(db, "users", idUser);
  const nourriture = {
    username: idUser,
    menu: menuUpdate,
  };
  setDoc(cachette, nourriture);
};

export const getMenu = async (idUser) => {
  const docRef = doc(db, "users", idUser);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();
    return menu;
  }
};
