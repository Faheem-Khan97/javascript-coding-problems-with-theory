"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chopInputArray = exports.reverseInPlace = exports.createAsyncTask = void 0;
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
function reverseInPlace(arr, startIndex, endIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    if (endIndex === void 0) { endIndex = arr.length - 1; }
    for (var i = startIndex; i <= startIndex + Math.floor((endIndex - startIndex) / 2); i++) {
        var temp = arr[i];
        arr[i] = arr[endIndex - i + startIndex];
        arr[endIndex - i + startIndex] = temp;
    }
}
exports.reverseInPlace = reverseInPlace;
function chopInputArray(arr, size) {
    var res = [];
    var startIndex = 0;
    var endIndex = size - 1;
    while (startIndex < arr.length) {
        var r = arr.slice(startIndex, endIndex + 1);
        res.push(r);
        startIndex += size;
        endIndex += size;
    }
    return res;
}
exports.chopInputArray = chopInputArray;
