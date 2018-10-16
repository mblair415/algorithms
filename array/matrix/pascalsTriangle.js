/**
 generate pascal's triangle with a height of numRows

      1
     1,1
    1,2,1
   1,3,3,1
  1,4,6,4,1
 1,5,10,10,5,1

input: 3
output: [[1],[1,1],[1,2,1]]

leetcode result:
 Runtime: 52 ms, faster than 92.38% of JavaScript online submissions for Pascal's Triangle.
 */
function pascalsTriangle(numRows) {
  if (numRows == 0) return [];
  let newTier;
  let result = [[1]];
  let previousRow;

  while (result.length < numRows) {
    previousRow = result[result.length - 1];
    newTier = [1];

    for (let i = 0; i < previousRow.length - 1; i++) {
      newTier.push(previousRow[i] + previousRow[i + 1]);
    }
    
    newTier.push(1);
    result.push(newTier);
  }
  return result;
};
