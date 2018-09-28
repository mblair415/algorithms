
// breadth first traversal using an array to mimic a queue.
function bfs(node) {
  let queue = [node];
  let result = [];
  let current = queue.shift();

  while (current){
    result.push(current.value)
    if (current.left) {
      queue.push(current.left)
    }
    if (current.right) {
      queue.push(current.right)
    }
    current = queue.shift();
  }
  return result;
}




// pre order tree traversal using recursion
function dfsPre(node) {
  if (node == null) { return []; }
  let result = [];

  function dfsHelper(node) {
    if (node == null) {
      return;
    }
    result.push(node.value);
    dfsHelper(node.left);
    dfsHelper(node.right);
  }
  dfsHelper(node);
  return result;
}



// in order tree traversal using recursion
function dfsIn(node) {
  if (node == null) { return []; }
  let result = [];

  function dfsHelper(node) {
    if (node == null) {
      return;
    }
    dfsHelper(node.left);
    result.push(node.value);
    dfsHelper(node.right);
  }
  dfsHelper(node);
  return result;
}


// post order tree traversal using recursion
function dfsPost(node) {
 if (node == null) { return []; }
 let result = [];

 function dfsHelper(node) {
   if (node == null) {
     return;
   }
   dfsHelper(node.left);
   dfsHelper(node.right);
   result.push(node.value);
 }
 dfsHelper(node);
 return result;
}
