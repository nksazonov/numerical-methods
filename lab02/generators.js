import { fixPrec } from "./helpers.js";

export const genMatrix = (n, diagBase = 1) => {
  let matrix = new Array();

  for (let i = 0; i < n; i++) {
    let row = new Array(n);
    row.fill(0);
    for (let j = 0; j < n; j++) {
      switch (j) {
        case 0:
        case i - 1:
          row[j] = 1;
          break;
        case i:
          row[j] = fixPrec(diagBase + j * 0.1);
          break;
        default:
          break;
      }
    }
    matrix[i] = row
  }

  matrix[0][n-1] = 1;
  matrix[0][0] = diagBase;
  return matrix;
}

export const genVector = (n) => {
  let vec = [];
  for (let i = 0; i < n; i++) {
    vec[i] = Math.sin(Math.PI / n - i)
  }
  return vec
}

export const genXFirst = (n, eq = 0) => {
  return new Array(n).fill(eq);
}
