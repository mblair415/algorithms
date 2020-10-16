/*
You're given a tree.  Return true if the value of all nodes is the same.  Otherwise return false.

As per leetcode
Runtime: 72 ms, faster than 90.07% of JavaScript online submissions for Univalued Binary Tree.
Memory Usage: 39.3 MB, less than 31.32% of JavaScript online submissions for Univalued Binary Tree.
*/

const isUnivalTree = root => {
    if (!root) {
        return false;
    }
    const target = root.val;
    let result = true;

    const dfs = node => {
        if (!node) {
            return;
        }
        if (node.val != target) {
            result = false;
            return;
        }

        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);
    return result
};
