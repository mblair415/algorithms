/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]

brute force:
    create set or array to track 0s
    loop through all of the matrix
        if current element is 0
            push that coordinate into tracking array/set
    loop through tracking array/set
        loop through rows in matrix
            make element in that row and in all columns a 0
        loop through columns in matrix
            make each element in that column and in all rows a 0
    return matrix

to make this faster:
    loop through matrix (row, col)
        track each row that needs to be changed in a set
        track each column that needs to be changed in a set
    loop through matrix (row, col)
        if element is not already a 0
            if rowSet has current row or colset has current col
                element = 0



Runtime: 76 ms, faster than 91.92% of JavaScript online submissions for Set Matrix Zeroes.
Memory Usage: 37.2 MB, less than 80.00% of JavaScript online submissions for Set Matrix Zeroes.

*/


const setZeroes = matrix => {
  const rowSet = new Set();
  const colSet = new Set();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] == 0) {
        rowSet.add(row);
        colSet.add(col);
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] != 0) {
        if (rowSet.has(row) || colSet.has(col)) {
          matrix[row][col] = 0
        }
      }
    }
  }

  return matrix;
};
