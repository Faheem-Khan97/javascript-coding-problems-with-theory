// https://leetcode.com/problems/max-consecutive-ones/

function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0;
  let currCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currCount++;
      max = currCount > max ? currCount : max;
    } else {
      currCount = 0;
    }
  }
  return max;
}

console.log(findMaxConsecutiveOnes([1,0,1,1,0, 1,1,1]))
