// https://leetcode.com/problems/set-matrix-zeroes/description/
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

function setMatrixZeros(matrix: number[][]): void {
  let zeroRowCol = 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        if (j != 0) {
          matrix[0][j] = 0;
        } else {
          zeroRowCol = 0;
        }
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // mark first row zero
  if (matrix[0][0] == 0) {
    for (let i = 1; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }

  // mark first col zero
  if (zeroRowCol == 0) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
}

const matrix2 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

setMatrixZeros(matrix2);

console.log(matrix2);
