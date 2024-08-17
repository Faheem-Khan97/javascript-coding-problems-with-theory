import { reverseInPlace } from "../../../utils";

function rotateMatrix(matrix: number[][]): void {
  // transpose first -> swap [i,j] with [j,i]
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // reverse each row
  for (let i = 0; i < matrix.length; i++) {
    reverseInPlace(matrix[i]);
  }

  console.log(matrix);
}

rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
