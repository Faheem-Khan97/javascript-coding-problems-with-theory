/*
Implement a function in JavaScript that takes a list of async functions as input and 
a callback function and executes the async tasks in parallel that is all at once and 
invokes the callback after every task is executed.

reference: https://learnersbucket.com/examples/interview/execute-async-functions-in-parallel-javascript/
*/

import { createAsyncTask } from "../../utils";

function asyncTasksInParallel(
  asyncTaskList: Promise<string>[],
  callback: (result: string[], error: string[]) => void
) {
  let resultCount = 0;
  const result: string[] = [];
  const errors: string[] = [];

  asyncTaskList.forEach((task) => {
    task
      .then((res) => {
        result.push(res);
      })
      .catch((err) => {
        errors.push(err.toString());
      })
      .finally(() => {
        resultCount++;
        if (resultCount === asyncTaskList.length) {
          callback(result, errors);
        }
      });
  });
}

asyncTasksInParallel(
  [createAsyncTask(2000), createAsyncTask(1000), createAsyncTask(5000)],
  (result, error) => {
    console.log(result, error);
  }
);
