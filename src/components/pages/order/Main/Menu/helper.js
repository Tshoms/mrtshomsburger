export const checkIfProductIsSelected = (
  idProductInMenu,
  idProductSelected
) => {
  return idProductInMenu === idProductSelected ? true : false;
};
