// https://learnersbucket.com/examples/interview/implement-maplimit-async-function/

import { chopInputArray } from "../../utils";

function mapLimit(
  arr: Array<any>,
  limit: number,
  iterateeFn: (
    item: any,
    callback: (err: Error, result: any) => void
  ) => Promise<any>
): Promise<any> {
  const chopedArrays = chopInputArray(arr, limit);
  console.log("map Limit invoked", chopedArrays);
  return new Promise<any>((resolve, reject) => {
    const finalPromise = chopedArrays.reduce((acc, curr) => {
      return acc.then((resultOfArray) => {
        return new Promise<any>((resolve, reject) => {
          const resultsForEachArray = [];
          curr.forEach((ele) => {
            iterateeFn(ele, () => {})
              .then((result) => {
                resultsForEachArray.push(result);
                if (resultsForEachArray.length == curr.length) {
                  resolve([...resultOfArray, ...resultsForEachArray]);
                }
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      });
    }, Promise.resolve([]));
    finalPromise
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
}

let numPromise = mapLimit([1, 2, 3, 4, 5], 3, async function (num, callback) {
  return new Promise((resolve, rej) => {
    setTimeout(function () {
      num = num * 2;
      console.log(num, "fds");
      const res = callback(null, num);
      resolve(num);
    }, 2000);
  });
});

numPromise
  .then((result) => console.log("success:" + result))
  .catch(() => console.log("no success"));
