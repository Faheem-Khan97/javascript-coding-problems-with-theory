// Find second largest element in a array of positive integers where
// 2 <= array.length <= 100000
function getSecondLargest(arr) {
    var largest = arr[0];
    var secondLargest = -1;
    for (var i = 1; i < arr.length; i++) {
        if (largest < arr[i]) {
            secondLargest = largest;
            largest = arr[i];
        }
        if (largest > arr[i] && secondLargest < arr[i]) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(getSecondLargest([2, 3, 1, 7, 7, 5]));
console.log(getSecondLargest([2, 3, 1, 7, 7, 7]));
console.log(getSecondLargest([6, 3, 1, 7, 7, 7, 5]));
console.log(getSecondLargest([7, 7, 7, 7, 7]));
