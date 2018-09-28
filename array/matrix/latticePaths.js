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


 note that there are N+1 and M+1 positions.

basic problem logic:

There is one way to be at position 0,0.
There is one way to be at each sequential position on the 0 row.
 This is because all you can do is move right.  There is no way to move up
 to get back up to the 0 row to find a second way to reach any position here,
 and you also cannot move to the left (because it isn't allowed by the rules).
There is one way to be at each of the sequential positions in the 0 column.
 This is because all you can do is move down.  You cannot move to the left
 to reach this row again, once you leave it you're done with it.
If there is 1 way to be at position 0,1 and 1 way to be at position 1,0,
then there 1,0 and 0,1 ways to reach position 1,1 because you can only reach this
position from those two coordinates.
This root logic, position left and position above, falls apart when you're along
the 0 row or columns.
 This logic is repaired when you realize that there is no possible way to reach
 a position in -1 row or -1 column.  So, any position off the grid has 0
 possible ways to reach that position. 1+0 == 1, and this is the number of
 ways to reach each position in the 0 column or 0 row.

This problem also follows pascal's triangle.
          1
       1     1
     1    2    1
   1   3    3    1
 1   4   6    4     1
1   5  10   10   5     1
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
