import { getDoc, doc, setDoc } from "firebase/firestore";
import { fakeMenu } from "../fakeData/fakeMenu";
import { db } from "./firebase-config";

export const getUser = async (idUser) => {
  const docRef = doc(db, "users", idUser);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const userReceiveData = docSnapshot.data();
    return userReceiveData;
  }
};

export const createUser = (idUser) => {
  // cachette / chemin vers la BD et ...
  const cachette = doc(db, "users", idUser);

  // nourriture ...
  const nourriture = {
    username: idUser,
    menu: fakeMenu.SMALL,
  };

  // setter setDoc ...
  setDoc(cachette, nourriture);
};

export const authenticateUser = async (idUser) => {
  // step 1. check si l'user existe ---
  const existingUser = await getUser(idUser);
  console.log("résultat : ", existingUser);
  // step 2. créer un user ---
  if (existingUser === undefined) {
    createUser(idUser);
  }
};
