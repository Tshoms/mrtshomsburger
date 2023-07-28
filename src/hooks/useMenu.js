import { useState } from "react";
import { syncBothMenus } from "../api/product";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  const handleAdd = (idUser, newProduct) => {
    //1. copy du state.
    const menuCopy = deepClone(menu);
    // 2. manipulation su state.
    const menuUpdate = [newProduct, ...menuCopy];
    // 3. Update du state avec le setter.
    setMenu(menuUpdate);
    syncBothMenus(idUser, menuUpdate);
  };

  const handleDelete = (idOfProduct) => {
    //1. copy du state.
    const menuCopy = deepClone(menu);
    console.log("state before", menuCopy);
    //2. manip du state.
    const menuUpdate = menuCopy.filter((product) => product.id !== idOfProduct);
    console.log("state after: ", menuUpdate);
    //3. Update du state.
    setMenu(menuUpdate);
  };

  const handleEdit = (productBeingEdit) => {
    //1. copie du state (deep clone).
    const menuCopy = deepClone(menu);
    //2. manip de la copie du state.
    const indexOfProductToEdit = menu.findIndex(
      (product) => product.id === productBeingEdit.id
    );

    //3. mise à jour de la nouvel valeur du state.
    menuCopy[indexOfProductToEdit] = productBeingEdit;
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };
  return { menu, handleAdd, handleEdit, handleDelete, resetMenu };
};
