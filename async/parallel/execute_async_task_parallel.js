"use strict";
/*
Implement a function in JavaScript that takes a list of async functions as input and
a callback function and executes the async tasks in parallel that is all at once and
invokes the callback after every task is executed.

reference: https://learnersbucket.com/examples/interview/execute-async-functions-in-parallel-javascript/
*/
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
function asyncTasksInParallel(asyncTaskList, callback) {
    var resultCount = 0;
    var result = [];
    var errors = [];
    asyncTaskList.forEach(function (task) {
        task
            .then(function (res) {
            result.push(res);
        })
            .catch(function (err) {
            errors.push(err.toString());
        })
            .finally(function () {
            resultCount++;
            if (resultCount === asyncTaskList.length) {
                callback(result, errors);
            }
        });
    });
}
asyncTasksInParallel([(0, utils_1.createAsyncTask)(2000), (0, utils_1.createAsyncTask)(1000), (0, utils_1.createAsyncTask)(5000)], function (result, error) {
    console.log(result, error);
});
