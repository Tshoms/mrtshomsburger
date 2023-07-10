export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

// method find.
export const findInArray = (id, array) => {
  return array.find((productInArray) => productInArray.id === id);
};

// method findIndex.
export const findIndexInArray = (idUnknowIndex, array) => {
  return array.findIndex(
    (productInArray) => productInArray.id === idUnknowIndex
  );
};
