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
      const res = new Array(thenableList.length);
      let pending = res.length;
      thenableList.forEach((promise, index) => {
        promise.then(
          (value) => {
            res[index] = value;
            pending--;
            if (pending == 0) {
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
      const res = new Array(thenableList.length);
      let pending = res.length;
      thenableList.forEach((promise, index) => {
        promise
          .then((value) => {
            res[index] = {
              status: "fulfilled",
              value: value,
            };
          })
          .catch((err) => {
            res[index] = {
              status: "rejected",
              reason: err,
            };
          })
          .finally(() => {
            pending--;
            if (pending == 0) {
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
        const aggregate = {
          status: "rejected",
          reason: [],
        };
        let pending = thenableList.length;
        thenableList.forEach((promise, index) => {
          promise
            .then((value) => {
              resolve(value);
            })
            .catch((reason) => {
              aggregate.reason[index] = reason;
              pending--;
              if (pending == 0) {
                reject(aggregate);
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
