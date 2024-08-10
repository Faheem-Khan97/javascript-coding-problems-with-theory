// https://leetcode.com/problems/sort-colors/
/*
    APPROACH - 

    use 3 pointers -> low, mid, and high,
    break the array in 4 parts.

    1.  0 to low-1 is 0,
    2.  low to mid -1 is 1
    3.  mid to high-1 is unsorted. Nee to be sorted.
    4.  High to nums.length -1 is 2
    5.  Initially set mid = 0 and high = n-1 ( why? because read point 3)

 */
function sortColors(nums: number[]): void {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  while (high >= mid) {
    const num = nums[mid];
    if (num == 0) {
      swap(nums, low, mid);
      low++;
      mid++;
    } else if (num == 1) {
      mid++;
    } else {
      swap(nums, mid, high);
      high--;
    }
  }
  function swap(arr: number[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

const colors = [2, 0, 2, 1, 1, 0];
sortColors(colors);
console.log(colors);
