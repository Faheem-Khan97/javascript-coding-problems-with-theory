// https://leetcode.com/problems/move-zeroes/description/

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroPointerIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      if (zeroPointerIndex != i) {
        const temp = nums[zeroPointerIndex];
        nums[zeroPointerIndex] = nums[i];
        nums[i] = temp;
      }
      zeroPointerIndex++;
    }
  }
}

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
