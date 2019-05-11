/*
Breath first traversal in a graph
*/

function bfs(vertex){
  let visited = new Set().add(vertex.id),
    queue = [vertex], // would be better with a linked list or a true queue
    result = [vertex.id],
    current;

  while (queue.length > 0) {
    current = queue.shift();

    current.edges.forEach( edge => {
      if (!visited.has(edge.id)) {
        queue.push(edge);
        visited.add(edge.id);
        result.push(edge.id)
      }
    });
  }
  return result;
}

/*
Depth first traversal in a graph
*/

function dfs(vertex){
  let stack = [vertex], // would be better with a true stack
    visited = new Set().add(vertex.id),
    result = [],
    current;

  while (stack.length > 0) {
    current = stack.pop();

    current.edges.forEach( edge => {
      if (!visited.has(edge.id)) {
        visited.add(edge.id);
        stack.push(edge);
      }
    });
    result.push(current.id)
  }
  return result;
}
