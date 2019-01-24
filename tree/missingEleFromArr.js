/*
Input: balanced binary search tree of the complete sorted array.
Input: sorted array used to create the input tree, but with one element missing.

Example:
Input: const arrForInput = [1,2,4,5,6,7]
Input: const targetTree = BSTFromArr([1,2,3,4,5,6,7]);


Output: The missing element from the array
output: 3


Plan of attack:
perform in order depth first traversal
  each node in tree treversal SHOULD be the sequence in array

*/

// Node class for a binary tree node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Build tree from sorted array
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

// Remove random ele from an array.  Testing purposes.
function removeAtRandom(arr) {
  arr.splice(Math.floor(Math.random() * arr.length), 1);
  return arr;
}



const targetArr = [1,2,4,5,6,7];
const arrForTree = [1,2,3,4,5,6,7];
const targetTree = BSTFromArr(arrForTree);


function missingEleFromSortedArray(root, inputArr) {
  let target;
  let targetArrIdx = 0

  function nextNode(node) {
    if (node == null) {
      return;
    }

    nextNode(node.left);
    if (node.value != inputArr[targetArrIdx] && !target) {
      target = node.value;
      return;
    }
    targetArrIdx++;
    nextNode(node.right);

  }

  nextNode(root);
  return target;
}

console.log(missingEleFromSortedArray(targetTree, targetArr));

// console.log(missingEleFromSortedArray(targetTree, removeAtRandom(arrForTree)));
