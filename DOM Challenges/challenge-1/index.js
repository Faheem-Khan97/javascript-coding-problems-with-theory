/* Problem statement - 
Create -
    1. input text Box
    2. Whenever user input a text in the input box, show the reversed text on the page
    3. Change color of vowels when user hover the shown reversed text.
    4. Create a reset button that sets everythink back to initial screen.

*/

const obj = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};
const inp = document.querySelector("#text");
const show = document.querySelector(".show");
const resetBtn = document.querySelector(".reset");

inp.addEventListener("keyup", showText);

function showText(e) {
  show.innerHTML = "";
  const textValue = e.target.value;
  console.log(textValue);
  let htmlAdd = "";

  for (let i = textValue.length - 1; i >= 0; i--) {
    // Check whether the character is an alphabet
    // if Yes, wrap in a
    let char = textValue[i];
    if (obj[char.toLowerCase()]) {
      const span = document.createElement("span");
      span.innerHTML = char;
      htmlAdd += span.outerHTML;
    } else {
      console.log(htmlAdd);
      htmlAdd += char;
    }
  }

  show.innerHTML = htmlAdd;
}
resetBtn.addEventListener("click", () => {
  show.innerHTML = "";
  inp.value = "";
});
