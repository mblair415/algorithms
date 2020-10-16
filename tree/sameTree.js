/*
Given two binary trees return true if they have the same node values in the same order (functionally the same).
If not return false


As per leetcode:
Runtime: 68 ms, faster than 95.61% of JavaScript online submissions for Same Tree.
Memory Usage: 39 MB, less than 37.23% of JavaScript online submissions for Same Tree.
*/

const isSameTree = (p, q) => {
    const bfsHelper = node => {
        let current;
        const treeBFS = [],
              queue = [node];

        while (queue.length > 0) {
            current = queue.shift();

            if (current != null) {
                queue.push(current.left);
                queue.push(current.right);
            }
            treeBFS.push(current != null ? current.val : null);
        }
        return treeBFS;
    };

    const treeA = bfsHelper(p),
          treeB = bfsHelper(q);

    if (treeA.length != treeB.length) return false;

    for (let i = 0; i < treeA.length; i++) {
        if (treeA[i] != treeB[i]) {
            return false;
        }
    }
    return true;
};
