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

export const splitByKeyword = (str, keyword) => {
  const result = [];
  const lowerStr = str.toLocaleLowerCase();
  const lowerKeyword = keyword.toLocaleLowerCase();
  let index = 0;

  while (index < str.length) {
    const nextIndex = lowerStr.indexOf(lowerKeyword, index);
    if (nextIndex === -1) {
      result.push(str.substring(index));
      break;
    }

    if (nextIndex > index) {
      result.push(str.substring(index, nextIndex));
    }

    const keywordLength = keyword.length;
    const actualKeyword = str.substring(nextIndex, nextIndex + keywordLength);
    result.push(actualKeyword);

    index = nextIndex + keywordLength;
  }

  return result;
};
