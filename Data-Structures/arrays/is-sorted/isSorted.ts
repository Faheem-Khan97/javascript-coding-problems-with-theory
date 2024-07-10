//https:leetcode.com/problems/check-if-array-is-sorted-and-rotated/

// the idea is:
// if array is sorted there would be max one case where arr[i-1] > arr[i] and that at the rotation breakpoint
function check(arr: number[]): boolean {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      count++;
    }
  }
  if (arr[arr.length - 1] > arr[0]) count++;
  return count <= 1;
}

console.log(check([2,5,7,0,1]))
