"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
function promiseAll(promiseList) {
    return new Promise(function (resolve, reject) {
        var result = [];
        for (var _i = 0, promiseList_1 = promiseList; _i < promiseList_1.length; _i++) {
            var promise = promiseList_1[_i];
            try {
                promise.then(function (res) {
                    result.push(res);
                    if (result.length == promiseList.length) {
                        resolve(result);
                    }
                });
            }
            catch (error) {
                reject(error);
            }
        }
    });
}
var asyncTaskList = [
    (0, utils_1.createAsyncTask)(1000),
    (0, utils_1.createAsyncTask)(2000),
    (0, utils_1.createAsyncTask)(2200),
];
promiseAll(asyncTaskList).then(function (result) {
    console.log(result);
});
