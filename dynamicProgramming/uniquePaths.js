/*
medium leetcode
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Dynamic programming tabulation approach.

Runtime: 48 ms, faster than 94.75% of JavaScript online submissions for Unique Paths.
Memory Usage: 33.9 MB, less than 63.64% of JavaScript online submissions for Unique Paths.
*/

const uniquePaths = (m, n) => {
  const result = new Array(n).fill(1);

  for (let row = 1; row < m; row++) {
    for (let col = n - 1; col >= 0; col--) {
      result[col] += result[col+1] ? result[col+1] : 0;
    }
  }

  return result[0];
};
