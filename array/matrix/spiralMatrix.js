/*

Build an N by N matrix such that the elements within the matrix fill out in a clockwise spiral order.

Input: 3

Output:
[
  [1,2,3],
  [8,9,4],
  [7,6,5]
]

step by step
[1,2,3]
[-,-,-]
[-,-,-]

[-,-,-]
[-,-,4]
[-,-,5]

[-,-,-]
[-,-,-]
[7,6,-]

[-,-,-]
[8,-,-]
[-,-,-]

[-,-,-]
[-,9,-]
[-,-,-]


A version of this exists on leetcode.  The question asks you to fill an array
with the contents of the matrix while moving in a spiral rather than to fill
a matrix while moving in a spiral.  It's the same root problem.

spiralOrder solution got the following results:
Runtime: 44 ms, faster than 97.05% of JavaScript online submissions for Spiral Matrix.
Memory Usage: 33.7 MB, less than 81.82% of JavaScript online submissions for Spiral Matrix.

*/

function matrixSpiral(n) {
  let output = [];
  let colMin = 0;
  let colMax = n - 1;
  let rowMin = 0;
  let rowMax = n - 1;
  let current = 1;

  for (let z = 0; z < n; z++) {
    output.push(new Array(n).fill(0));
  }

  while (colMin <= colMax && rowMin <= rowMax) {
    for (let i = colMin; i <= colMax; i++) {
      output[rowMin][i] = current++;
    }
    rowMin++;
    for (let j = rowMin; j <= rowMax; j++) {
      output[j][colMax] = current++;
    }
    colMax--;
    for (let x = colMax; x >= colMin; x--) {
      output[rowMax][x] = current++;
    }
    rowMax--;
    for(let y = rowMax; y >= rowMin; y--) {
      output[y][colMin] = current++;
    }
    colMin++;
  }

  return output;
}

const spiralOrder = matrix => {
  if (!matrix.length) return [];

  const result = [];
  let rowMin = 0,
    rowMax = matrix.length - 1,
    colMin = 0,
    colMax = matrix[0].length - 1;

  while (rowMin <= rowMax && colMin <= colMax) {
    for (let i = colMin; i <= colMax; i++) {
      result.push(matrix[rowMin][i]);
    }
    rowMin++;
    for (let j = rowMin; j <= rowMax; j++) {
      result.push(matrix[j][colMax])
    }
    colMax--;

    if (rowMin > rowMax || colMin > colMax) return result;

    for (let x = colMax; x >= colMin; x--) {
      result.push(matrix[rowMax][x]);
    }
    rowMax--;
    for (let z = rowMax; z >= rowMin; z--) {
      result.push(matrix[z][colMin]);
    }
    colMin++;
  }
  return result;

};
