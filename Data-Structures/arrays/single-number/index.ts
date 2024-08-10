// https://leetcode.com/problems/single-number/

/*

Approach - 1.

    1. use a additional map data sctructure to store count of items in array.
    2. If item already there increase the count by else initialize map[item] = 1;
    3. This will result in the map DS having all the array elements as and corresponding count as value.
    4. Next, iterate over the map and return the key that has a value of 1.
    5. You can use array.some() method to optimize a bit as some stops early.

*/

function singleNumber(nums: number[]): number {
  const map = {};
  let res: number;

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  Object.keys(map).forEach((num) => {
    if (map[num] == 1) res = Number(num);
  });

//   Object.keys(map).some((num) => {
//     if (map[num] == 1) {
//       res = Number(num);
//       return true;
//     }
//   });

  return res;
}

console.log(singleNumber([4,1,2,1,2]))

/*

Approach - 2.

    1. just use XOR operator lol. XOR all elements of the array.
    2. [4,1,2,1,2] -> 4^1^2^1^2 = 4 ^ 1^1 ^ 2^2 = 4 ^ 0 ^ 0 = 4 ^ 0 = 4

*/

function singleNumber2(nums: number[]): number {
    return nums.reduce((acc, curr) => acc ^ curr)
};

console.log(singleNumber2([4,1,2,1,2]))

