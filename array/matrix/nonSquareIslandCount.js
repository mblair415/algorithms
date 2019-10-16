/*
Given a 2d grid map of '1's (land) and '0's (water),
count the number of islands. An island is surrounded by water
and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

*/
const input =
  [["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "1"],
  ["0", "0", "0", "1", "1"]
];

const islandCount = arr => {
  let islandTotal = 0;

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[0].length; col++) {
      const up = row == 0 ? '0' : arr[row - 1][col];
      const left = col == 0 ? '0' : arr[row][col - 1];
      const diag = row == 0 || col == 0 ? '0' : arr[row - 1][col - 1];

      if (arr[row][col] === '1' &&
        up === '0' && left === '0' && diag === '0') {
        islandTotal++;
      }
    }
  }

  return islandTotal;
};

console.log(islandCount(input));
