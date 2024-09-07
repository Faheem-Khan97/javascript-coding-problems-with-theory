const getAsyncTask = (delay) => {
  return new Promise((resolve, reject) => {
    const randomValue = Math.floor(Math.random() * 10);
    setTimeout(() => {
      // replace 2 by 10 to make all promise rejected
      // replace 0 by 10 to make all promise fullfilled
      // You might need to test some methods' working
      if (randomValue >= 2) {
        resolve(`resolved with ${randomValue} after ${delay}ms`);
      } else {
        reject(`rejected with ${randomValue} after ${delay}ms`);
      }
    }, delay);
  });
};

class myPromise {
  static all(thenableList) {
    return new Promise((resolve, reject) => {
      const res = [];
      thenableList.forEach((promise) => {
        promise.then(
          (value) => {
            res.push(value);
            if (res.length == thenableList.length) {
              resolve(res);
            }
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }

  static allSettled(thenableList) {
    return new Promise((resolve, reject) => {
      const res = [];
      thenableList.forEach((promise) => {
        promise
          .then((value) => {
            res.push({
              status: "fullfilled",
              value: value,
            });
          })
          .catch((err) => {
            res.push({
              status: "rejected",
              reason: err,
            });
          })
          .finally(() => {
            if (thenableList.length == res.length) {
              resolve(res);
            }
          });
      });
    });
  }

  static any(thenableList) {
    return new Promise((resolve, reject) => {
      if (thenableList.length == 0) {
        reject({ status: "rejected", reason: "empty list" });
      } else {
        const arregateError = {
          status: "rejected",
          reason: [],
        };
        thenableList.forEach((promise) => {
          promise
            .then((value) => {
              resolve({ status: "fullfilled", value });
            })
            .catch((reason) => {
              arregateError.reason.push(reason);
              if (arregateError.reason.length == thenableList.length) {
                reject(arregateError);
              }
            });
        });
      }
    });
  }

  static race(thenableList) {
    return new Promise((resolve, reject) => {
      thenableList.forEach((promise) => {
        promise
          .then((value) => {
            resolve(value);
          })
          .catch((reason) => {
            reject(reason);
          });
      });
    });
  }
}

myPromise
  .all([getAsyncTask(100), getAsyncTask(400), getAsyncTask(200)])
  .then((res) => {
    console.log("Promise.all", res);
  })
  .catch((err) => {
    console.log("Promise.all", err);
  });

myPromise
  .allSettled([getAsyncTask(100), getAsyncTask(400), getAsyncTask(200)])
  .then((res) => {
    console.log("allSettled", res);
  })
  .catch((err) => {
    console.log("allSettled", err);
  });

myPromise
  .any([getAsyncTask(100), getAsyncTask(400), getAsyncTask(200)])
  .then((res) => {
    console.log("any", res);
  })
  .catch((err) => {
    console.log("any", err);
  });

myPromise
  .race([getAsyncTask(100), getAsyncTask(400), getAsyncTask(200)])
  .then((res) => {
    console.log("race", res);
  })
  .catch((err) => {
    console.log("race", err);
  });
