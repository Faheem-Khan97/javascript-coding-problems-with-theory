// https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1

function leaders(n: number, arr: number[]) {
  // code here
  let max = arr[n - 1];
  let res = [];
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] >= max) {
      max = arr[i];
      res = [max, ...res];
    }
  }

  return res;
}


console.log(leaders(6, [16,17,4,3,5,2]))
console.log(leaders(5, [10,4,2,4,1]))

