// https://leetcode.com/problems/spiral-matrix/
function spiralOrder(matrix: number[][]): number[] {
  const nums = [];
  let top = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      nums.push(matrix[top][i]);
    }
    top++;

    for (let j = top; j <= bottom; j++) {
      nums.push(matrix[j][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        nums.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        nums.push(matrix[i][left]);
      }
      left++;
    }
  }

  return nums;
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
