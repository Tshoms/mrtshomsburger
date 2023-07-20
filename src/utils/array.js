export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

// method find.
export const findObjectById = (id, array) => {
  return array.find((productInArray) => productInArray.id === id);
};

// method findIndex.
export const findIndexById = (idUnknowIndex, array) => {
  return array.findIndex(
    (productInArray) => productInArray.id === idUnknowIndex
  );
};

// method filter.
export const removedObjectById = (idOfItemToRemove, array) => {
  return array.filter((product) => product.id !== idOfItemToRemove);
};

// method to check array lenght.
export const isEmpty = (array) => {
  return array.length === 0;
};
