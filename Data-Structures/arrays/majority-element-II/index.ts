export {};
// https://leetcode.com/problems/majority-element-ii/
// keep the count or each element in a map. and check if the count exceeds the Math.floor(nums.length / 3)
// TC -> O(n) -> just a single loop
// SC -> O(1) -> the res array will have max 2 elements

function majorityElement(nums: number[]): number[] {
  const majOccurrence = Math.floor(nums.length / 3);
  const map = new Map();
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const newCount = map.get(nums[i]) + 1;
      if (newCount > majOccurrence) {
        if (res.length) {
          if (nums[i] != res[0]) res.push(nums[i]);
        } else {
          res.push(nums[i]);
        }

        if (res.length == 2) break;
      }
      map.set(nums[i], newCount);
    } else {
      map.set(nums[i], 1);
      if (majOccurrence < 1) res.push(nums[i]);
    }
  }

  return res;
}

console.log(majorityElement([3, 2, 3]));
