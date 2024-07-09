"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAsyncTask = void 0;
function createAsyncTask(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (delay > 3000) {
                reject("rejected with delay ".concat(delay));
            }
            resolve("delay ".concat(delay));
        }, delay);
    });
}
exports.createAsyncTask = createAsyncTask;
