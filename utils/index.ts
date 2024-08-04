export function createAsyncTask(delay: number) {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (delay > 3000) {
        reject(`rejected with delay ${delay}`);
      }
      resolve(`delay ${delay}`);
    }, delay);
  });
}

export function reverseInPlace(
  arr: number[],
  startIndex = 0,
  endIndex = arr.length - 1
) {
  for (
    let i = startIndex;
    i <= startIndex + Math.floor((endIndex - startIndex) / 2);
    i++
  ) {
    const temp = arr[i];
    arr[i] = arr[endIndex - i + startIndex];
    arr[endIndex - i + startIndex] = temp;
  }
}
