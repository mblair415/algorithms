/*
a google interview question

locate the longest path in a binary tree.

input root of a tree.
output the length of the longest path in that tree.

Input:
     1
    / \
   3   2
  /
 5

Output: 3

psuedo code:
start a maxcounter variable.
depth first search with a counter
each time i go to a child increase a counter.
  if counter > max
    update max.
return max

*/

function longestPath(node){
  let maxDepth = 0;

  function dfsHelper(node, counter) {
    if (node == null) {
      return;
    }
    dfsHelper(node.left, counter + 1);
    dfsHelper(node.right, counter + 1);
    maxDepth = Math.max(maxDepth, counter);
  }
  dfsHelper(node, 1);
  return maxDepth;
}
