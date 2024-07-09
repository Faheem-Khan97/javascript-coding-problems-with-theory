const { createAsyncTask } = require("../utils");

const asyncTaskList = [
  createAsyncTask(1000),
  createAsyncTask(100),
  createAsyncTask(2500),
];

function executeInSeriesWithReduce(promiseList) {
  promiseList.reduce((acc, current) => {
    return acc.then(() => {
      return current.then((result) => {
        console.log({ result });
      });
    });
  }, Promise.resolve());
}

async function executeInSeriesWithLoop1(promiseList) {
  for (let i = 0; i < promiseList.length; i++) {
    const result = await promiseList[i];
    console.log({ result });
  }
}
// using for await of loop
async function executeInSeriesWithLoop2(promiseList) {
  for await (const promise of promiseList) {
    console.log({ promise });
  }
}

// Using Recursion
function executeInSeriesRecursive(promiseList) {
  const firstPromise = promiseList.shift();
  firstPromise.then((res) => {
    console.log({ res });
    if (promiseList.length) {
      executeInSeriesRecursive(promiseList);
    }
  });
}
// executeInSeriesWithReduce(asyncTaskList);
// executeInSeriesWithLoop1(asyncTaskList);
executeInSeriesWithLoop2(asyncTaskList);
// executeInSeriesRecursive(asyncTaskList);
