import { createAsyncTask } from "../../utils";

function promiseAll(promiseList: Promise<string>[]): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const result = [];
    for (let promise of promiseList) {
      try {
        promise.then((res) => {
          result.push(res);
          if (result.length == promiseList.length) {
            resolve(result);
          }
        });
      } catch (error) {
        reject(error);
      }
    }
  });
}

const asyncTaskList = [
  createAsyncTask(1000),
  createAsyncTask(2000),
  createAsyncTask(2200),
];
promiseAll(asyncTaskList).then((result) => {
  console.log(result);
});
