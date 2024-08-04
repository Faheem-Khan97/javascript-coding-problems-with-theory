/**
 Do not return anything, modify nums in-place instead.
 */


 /*
    How this working. for example - suppose nums = [1,2,3,4,5,6,7] & k = 3
    1.  splice the part that is rotated.
    2.  the line ---> rotatedArr = nums.splice(nums.length - k); makes
        a. nums --> [1,2,3,4] i.e. part of array that is not rotated. and,
        b. rotatedArr --> [5,6,7] i.e. rotated part of the array
    3.  Now iterate over the non-rotated part and copy each element at (i+k)th position, 
        where i was the original index of the respective elements.
    4.  this makes nums as ---> [1,2,3,1,2,3,4]. You can see that all 4 non-rotated elements are shifted
        k positions towards right. But additionally first k ( 3 in this case) elements are wrongly placed.
    5.  replace first k elements of nums by rotatedArr --> [5,6,7] and It's DONE.



 */

function rotate(nums: number[], k: number): void {
  if (nums.length <= 1) {
    return;
  }
  k = k % nums.length;
  const rotatedArr = nums.splice(nums.length - k);
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let i = 0; i < k; i++) {
    nums[i] = rotatedArr[i];
  }
}

const nums= [1,2,3,4,5,6,7];
const k = 3
rotate(nums, k)

console.log(nums)
