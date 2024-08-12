// https://leetcode.com/problems/rearrange-array-elements-by-sign/

function rearrangeArray(nums: number[]): number[] {
  const arr = [];
  let negativeIndex = 1;
  let positiveIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      arr[positiveIndex] = nums[i];
      positiveIndex += 2;
    } else {
      arr[negativeIndex] = nums[i];
      negativeIndex += 2;
    }
  }
  return arr;
}

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
