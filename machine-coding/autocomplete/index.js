import { getSuggestions } from "./utils.js";

const inputElement = document.getElementById("search-input");
const searchWrapper = document.getElementById("suggestions-list");

const searchChangeHandler = async (event) => {
  const value = event.target.value;
  const suggestions = await getSuggestions(value);
  console.log({ suggestions });
};

inputElement.addEventListener("keyup", searchChangeHandler);
