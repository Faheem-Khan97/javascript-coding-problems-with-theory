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

export const debounce = (fn, delay = 400) => {
  let timeOutId;
  return function () {
    const context = this;
    const args = arguments;
    if (timeOutId) clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
