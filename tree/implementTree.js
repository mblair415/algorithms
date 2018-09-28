class TreeNode {
  constructor(value) {
    this.value = value ? value : null;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }


  /*
  newNode is new Node
  increase size.
  if no root
    make self root
  else
    loop starting from the root where current = root. while current isn't newNode
      if newNode.value > current.value
        if current.right
          current = current.right
        else
          current.right = newNode
      else
        if current.left
          current = current.left
        else
          current.left = newNode
  */
  insert(value) {
    let newNode = new TreeNode(value);
    let current;
    this.size++;

    if (this.root == null) {
      this.root = newNode;
    } else {
      current = this.root;

      while(current != newNode) {
        if (newNode.value >= current.value) {
          if (current.right != null) {
            current = current.right;
          } else {
            current.right = newNode;
          }
        } else {
          if (current.left != null) {
            current = current.left;
          } else {
            current.left = newNode;
          }
        }
      }
    }
  }

  /*
  start with the root and loop
    if current is what i want to find
      return true
    if what i want to find is greater than current
      current becomes current.right
    else
      current becomes current.left
  if the above doesn't find it it isn't here.  return false
  */
  search(value) {
    let current = this.root;

    while(current) {
      if (value == current.value) {
        return true;
      } else if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }
}
