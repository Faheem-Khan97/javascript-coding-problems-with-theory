// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/*
    How is this working.

    1.  we have two indices i and j. i is used to locate the index to insert the next unique element.
        j is used to traverse the entire array and find the next element that is unique 
        by comparing with curr (current element).
    2.  Once a unique element is found i.e. when nums[j] == curr, place that element at the i-th position, 
        increment the i by one and replace the curr with the newly found unique number.
    3.  Otherwise just keep the j moving.( cause we didn't find a unique element so we don't need 
        to store it at i-th position).
    4.  By this time the while loop exits we will have all the unique elements present in the array,
        starting from index - 0 to index i. So, let's scrap the remaining array, i.e. from i+1 index to 
        the last index. That's what slice(i+1) does.

*/

function removeDuplicates(nums: number[]): number {
  let i = 0;
  let curr = nums[0];
  let j = 1;
  while (j < nums.length) {
    if (nums[j] != curr) {
      curr = nums[j];
      nums[i + 1] = curr;
      i++;
    }
    j++;
  }
  nums.splice(i + 1);
  console.log(nums);
  return nums.length;
}
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
