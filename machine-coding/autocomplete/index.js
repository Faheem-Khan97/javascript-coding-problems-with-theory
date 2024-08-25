import { debounce, getSuggestions, splitByKeyword } from "./utils.js";

const inputElement = document.getElementById("search-input");
const searchWrapper = document.getElementById("suggestions-list");

const resetList = () => {
  searchWrapper.classList.remove("suggestion-wrapper-visible");
};

const renderSuggestions = (itemsList, keyword) => {
  if (!itemsList.length) {
    resetList();
    return;
  }

  const suggestionsFragement = document.createDocumentFragment();
  itemsList.forEach((item) => {
    const element = document.createElement("div");
    const arr = splitByKeyword(item, keyword);
    element.append(
      ...arr.map((ele) => {
        if (ele.toLowerCase() == keyword.toLowerCase()) {
          const strongEle = document.createElement("strong");
          strongEle.textContent = ele;
          return strongEle;
        }
        return ele;
      })
    );
    element.classList.add("suggestion-item");
    element.setAttribute("data-item", item);
    suggestionsFragement.append(element);
  });
  searchWrapper.replaceChildren(suggestionsFragement);
  searchWrapper.classList.add("suggestion-wrapper-visible");
};

const searchChangeHandler = async (event) => {
  const value = event.target.value;
  if (value) {
    const suggestions = await getSuggestions(value);
    renderSuggestions(suggestions, value);
  } else {
    resetList();
  }
};

const selectHandler = (event) => {
  const { item } = event.target.dataset;
  if (item) {
    inputElement.value = item;
    resetList();
  }
};

inputElement.addEventListener("input", debounce(searchChangeHandler));
searchWrapper.addEventListener("click", selectHandler);
