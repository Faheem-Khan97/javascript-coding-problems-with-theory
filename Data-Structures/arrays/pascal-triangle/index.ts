// https://leetcode.com/problems/pascals-triangle/

function generate(numRows: number): number[][] {
  const arr: number[][] = [[1]];
  for (let i = 1; i < numRows; i++) {
    const newArr = [1];
    for (let j = 1; j < i; j++) {
      newArr.push((arr[i - 1][j - 1] || 0) + (arr[i - 1][j] || 0));
    }
    newArr[i] = 1;
    arr.push(newArr);
  }
  return arr;
}

console.log(generate(5));

// variation 1
// In this case, we are given the row number r and the
// column number c, and we need to find out the element at position (r,c).

function generateNum(row: number, col: number): number {
  let numberator = 1;
  let denominator = 1;
  for (let i = 0; i < row - col; i++) {
    const num = row - i - 1;
    numberator = numberator * Math.abs(num);
    denominator = denominator * Math.abs(row - 1 - num + 1);
  }
  return numberator / denominator;
}

function generateNum2(row: number, col: number): number {
  return nCr(row - 1, col - 1);
}

function nCr(n: number, r: number) {
  let res = 1;
  for (let i = 0; i < r; i++) {
    res = res * (n - i);
    res = res / (i + 1);
  }

  return res;
}

console.log(generateNum(4, 3));
console.log(generateNum2(4, 3));
