// https://leetcode.com/problems/missing-number/description/

/*
    approach -1 :

        1. Use mathematical AP series summation formaula to find sum of all numbers from 0 to n. 
        2. Iterate over the array to find sum of all numbers present in the array.
        3. subtract 2 from 1.

*/

function missingNumber1(nums: number[]): number {
  const sum = nums.reduce((acc, curr) => acc + curr);
  const totalSum = ((nums.length + 1) / 2) * nums.length;
  return totalSum - sum;
}

console.log(missingNumber1([3, 0, 1]));

/*
    approach - 2 : Using XOR operator

        1.  This solutions works because how XOR works :-
            a ^ a = 0 and a ^ 0 = a
        2.  Take [0,3,1] as example where missing number is 2.
        3.  Given array [0,3,1]  array from 0 to n [0,1,2,3]
        4.  take XOR of both and a final XOR i.e. (0^3^1) ^ (0^1^2^3)
        5.  (0^3^1) ^ (0^1^2^3) = (0^0)^(1^1)^(3^3)^2 = 0^0^0^2 (cause xor with self is 0) = 2

*/

function missingNumber(nums: number[]): number {
  const xorOfArray = nums.reduce((acc, curr) => acc ^ curr);
  let xorOfAllNumbersTillN = 0;
  for (let i = 1; i <= nums.length; i++) {
    xorOfAllNumbersTillN = xorOfAllNumbersTillN ^ i;
  }

  return xorOfArray ^ xorOfAllNumbersTillN;
}

console.log(missingNumber([3, 0, 1]));
