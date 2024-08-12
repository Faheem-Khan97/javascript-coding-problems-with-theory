// https://leetcode.com/problems/next-permutation/

import { reverseInPlace } from "../../../utils";

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(arr: number[]): void {
  let breakPoint: number | undefined;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1]) {
      breakPoint = i - 1;
      break;
    }
  }

  if (breakPoint == undefined) {
    reverseInPlace(arr);
    console.log(arr);
    return;
  }

  let swapIndex: number | undefined;

  for (let j = arr.length - 1; j > breakPoint; j--) {
    if (arr[j] > arr[breakPoint]) {
      swapIndex = j;
      break;
    }
  }

  const temp = arr[swapIndex];
  arr[swapIndex] = arr[breakPoint];
  arr[breakPoint] = temp;

  reverseInPlace(arr, breakPoint + 1);
  console.log(arr);
}

nextPermutation([1, 2, 3]);
nextPermutation([3, 2, 1]);
nextPermutation([1, 1, 5]);
