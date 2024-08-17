// https://leetcode.com/problems/set-matrix-zeroes/description/

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const cols = [];
  const rows = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] == 0) {
        cols[j] = 0;
        rows[i] = 0;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (rows[i] == 0 || cols[j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }
}

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

setZeroes(matrix);

console.log(matrix);


// approach 2 
// without using extra space i.e. eliminate rows[] and cols []


