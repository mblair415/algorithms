/*
Input is a sorted array.

Output is the root to a balanced binary search tree.

*/

//  Base Tree
class TreeNode {
  constructor(value) {
    this.value = value ? value : null;
    this.left = null;
    this.right = null;
  }
}

function BSTFromArr(arr) {

  function findRoot(left, right) {
    if (left > right) {
      return;
    }
    let midIdx = Math.floor((left + right) / 2);
    let root = new TreeNode(arr[midIdx]);

    root.left = findRoot(left, midIdx - 1);
    root.right = findRoot(midIdx + 1, right);

    return root;
  }

  return findRoot(0, arr.length - 1);
}

console.log(BSTFromArr([1,2,3,4,5,6,7]));
