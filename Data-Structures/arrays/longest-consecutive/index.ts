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
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// another solution without sorting

function longestConsecutiveWithoutSorting(nums: number[]): number {
  if (!nums.length) return 0;
  let maxLen = 1;
  let c = 1;
  let numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!numsMap.has(nums[i])) numsMap.set(nums[i], 1);
  }

  numsMap.forEach((_, curr) => {
    if (!numsMap.has(curr - 1)) {
      let newC = curr + 1;
      while (numsMap.has(newC)) {
        c++;
        newC++;
      }
      maxLen = Math.max(c, maxLen);
    }
    c = 1;
  });

  return maxLen;
}

console.log(longestConsecutiveWithoutSorting([100, 4, 200, 1, 3, 2]));
