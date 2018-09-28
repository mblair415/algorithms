/*
Binary Trees - Merge Binary Trees

Prompt

Given two binary trees, imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Examples
Input: root1 {BinaryTreeNode}, root2 {BinaryTreeNode}


	Tree 1                     Tree 2

          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7


 Output: {BinaryTreeNode}

    Merged tree:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
*/

function mergeTrees(node1, node2) {
  if (node1 == null && node2 == null) {
    return null;
  }
  if (node1 != null && node2 != null) {
    let newNode = new TreeNode(node1.value + node2.value);
    newNode.left = mergeTrees(node1.left, node2.left);
    newNode.right = mergeTrees(node1.right, node2.right);
    return newNode;
  } else if (node1 == null) {
    return duplicateTree(node2);
  } else if (node2 == null) {
    return duplicateTree(node1);
  }
}

duplicateTree(node) {
  if (node == null) {
    return null;
  }
  let newNode = new TreeNode(node.value);
  newNode.left = duplicateTree(node.left);
  newNode.right = duplicateTree(node.right);
  return newNode;
}
