// https://leetcode.com/problems/longest-consecutive-sequence/
function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;
  nums.sort((a, b) => a - b);
  let lastSm = nums[0];
  let length = 1;
  let c = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == lastSm + 1) {
      length++;
      lastSm = nums[i];
    } else if (nums[i] != lastSm) {
      length = 1;
      lastSm = nums[i];
    }

    c = Math.max(length, c);
  }

  return c;
}
console.log(longestConsecutive([100,4,200,1,3,2]))
// another solution without sorting
