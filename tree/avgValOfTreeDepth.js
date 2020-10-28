
/*
average number for all nodes at depth of binary tree

                                1
                3                                 2
      7                   6                                 5
  8      9             4                                        10

pseudo code:
output = []
DFS to make an object with tree contents separated by node depth
tree = {
  1 : [1],
  2 : [3,2],
  3 : [7,6,5],
  4 : [8,9,4,10]
}
loop through object
  at each key sum array and divide by array length
  push that averate into output
return output
*/

const avgTreeDepth = root => {
  if (!root) return [0];

  const output = [],
    treeAsObj = {};

  const dfsHelper = (node, depth) => {
      if (!node) {
        return;
      }
      treeAsObj[depth] ? treeAsObj[depth].push(node.val) : treeAsObj[depth] = [node.val];

      dfsHelper(node.left, depth+1);
      dfsHelper(node.right, depth+1);
    };
  const sumHelper = () => {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      for (let depth in treeAsObj) {
        output.push(treeAsObj[depth].reduce(reducer) / treeAsObj[depth].length);
      }
    };

  dfsHelper(root, 1);
  sumHelper();

  return output;
};


/*
do the same thing but with a breadth first traversal and make it use less space

instead of duplicating the whole tree all you need at any point is:
  the sum of a row
  the quantity of units that made this sum

previous DFS solution requires a full binary tree with a depth of 4 to store:
  15 node values
  output with 4 elements
  recursive calls up to 5 deep
  accumulator variable
  iterator to loop through a depth's values

new BFS solution requires a full binary tree with a depth of 4 to store:
  output with 4 elements
  queue max length 8 elements
  4 variables (current pointer for node, depth of current, tree depth sum, tree depth node count)


                                1
                3                                 2
      7                   6                                 5
  8      9             4                                        10

output = [1]
treeDepthSum = 5
treeDepthNodeCount = 2

bfshelper
  queue : [[7, 3], [6, 3]]
  current : [2, 2]


This solution path is a little bit faster and uses less space.
It uses an array rather than an actual queue data structure
*/
const avgTreeDepth2 = root => {
  if (!root) return 0;
  
  const output = [];

  const bfsHelper = () => {
      const queue = [[root, 1]]; // queue format is [[node, depthOfNode]] using an array due to time constraints to write code
      let current,
        treeDepthSum,
        treeDepthNodeCount;

      while (queue) {
        if (current && current[0] === queue[0][0]) { // last item same depth as new item
          current = queue.shift();
          treeDepthSum += current[0].val;
          treeDepthNodeCount++;
        } else { // first node on a new depth
          current = queue.shift();
          treeDepthSum = current[0].val;
          treeDepthCount = 1;
        }

        if (current[0].left) {
          queue.push(current[0].left, current[1] + 1);
        }
        if (current[0].right) {
         queue.push(current[0].right, current[1] + 1);
        }

        if (!queue || current[0] != queue[0][0]) { // current depth not the same as the next
          output.push(treeDepthCount / treeDepthNodeCount);
        }
      }
    };

  bfsHelper();

  return output;
};
