/*
input is a pair of numbers.  N and M.  This creates a matrix.

* Use the corners of each position in the grid.
* You can only move DOWN and RIGHT.

Return the number of original paths to get from 0,0 to N,M.

input: 2, 3
 - - -
| | | |
 - - -
| | | |
 - - -

 output: 10
 essentially it will build the following
 1 1 1 1
 1 2 3 4
 1 3 6 10  <--- this is the answer
*/

function latticePathsPureRecursion(n, m = n) {
  function latticeHelper(row, col) {
    if (row == 1 && col == 1) {
      return 1;
    } else if (row == -1 || col == -1) {
      return 0;
    }
    return latticeHelper(row - 1, col) + latticeHelper(row, col - 1);
  }
  return latticeHelper(n+1, m+1);
}


function latticePathsMemo(n, m = n) {
  let cache = { '0.0': 1};

  function latticeHelper(row, col) {
    if (row < 0 || col < 0) {
      return 0;
    }
    if (cache[`${row}.${col}`]) {
      cache[`${row}.${col}`];
    } else {
      cache[`${row}.${col}`] = latticeHelper(row - 1, col) +
      latticeHelper(row, col - 1);
    }
    return cache[`${row}.${col}`];
  }
  return latticeHelper(n, m);
}

function latticePathsTabulation(n, m) {
  let latticeLayer = new Array(n+1).fill(1);

  for (let i = 1; i < m+1; i++) {
    for (let j = 0; j < latticeLayer.length; j++) {
      latticeLayer[j] += latticeLayer[j-1] == undefined ? 0 : latticeLayer[j-1];
    }
  }
  return latticeLayer[n]
}
