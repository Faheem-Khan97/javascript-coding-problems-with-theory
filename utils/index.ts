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
