import { FRUITS } from "./data.js";

export const getSuggestions = (keyword) => {
  return new Promise((resolve) => {
    const filteredFruits = FRUITS.filter((fruit) =>
      fruit.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase())
    );
    setTimeout(() => {
      resolve(filteredFruits);
    }, 1500);
  });
};
