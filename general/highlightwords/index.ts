function highlightWords(str: string, words: Array<string>): string {
  const strWords = str.split(" ");
  const setOrWords = new Set(words);
  const mapped = strWords.map((word: string) => {
    let output = word;
    if (setOrWords.has(word)) {
      output = `<strong>${word}</strong>`;
    } else {
      for (let i = 0; i < word.length; i++) {
        const firstChunk = word.slice(0, i + 1);
        const secondChunk = word.slice(i + 1, word.length);
        if (setOrWords.has(firstChunk) && setOrWords.has(secondChunk)) {
          output = `<strong>${firstChunk}${secondChunk}</strong>`;
          break;
        } else if (setOrWords.has(firstChunk)) {
          output = `<strong>${firstChunk}</strong>${secondChunk}`;
          break;
        } else if (setOrWords.has(secondChunk)) {
          output = `${firstChunk}<strong>${secondChunk}</strong>`;
          break;
        }
      }
    }
    return output;
  });
  return mapped.join(" ");
}

const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ["Front", "End", "JavaScript"];

const res = highlightWords(str, words);
console.log(res);
