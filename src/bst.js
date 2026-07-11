import Queue from "./queue.js";

function Node() {
  const data = null;
  const left = null;
  const right = null;

  return { left, data, right };
}

function Tree(array) {
  // Sort array in ascending order and remove duplicates
  let refinedArray = [...new Set(array.sort((a, b) => a - b))];
  let root = buildTree(refinedArray, 0, refinedArray.length - 1);

  function buildTree(arr, start, end) {
    if (start > end) {
      return null;
    }
    let mid = Math.floor((start + end) / 2);
    let rootNode = Node();
    rootNode.data = arr[mid];
    rootNode.left = buildTree(arr, start, mid - 1);
    rootNode.right = buildTree(arr, mid + 1, end);

    return rootNode;
  }

  // Prints tree into the console
  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null || node === undefined) {
      return;
    }

    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  };

  // Driver method for prettyPrint
  const print = () => prettyPrint(root);

  const includes = (value) => {
    let queue = Queue();
    queue.enqueue(root);
    while (queue) {
      let currNode = queue.dequeue();
      if (!currNode) {
        break;
      }
      if (currNode.data === value) {
        return true;
      }

      if (currNode.data > value && currNode.left) {
        queue.enqueue(currNode.left);
      }
      if (currNode.data < value && currNode.right) {
        queue.enqueue(currNode.right);
      }
    }
    return false;
  };

  const insert = (value) => {
    if (includes(value)) {
      return;
    }
    let newNode = Node();
    newNode.data = value;
    let queue = Queue();
    queue.enqueue(root);
    while (queue) {
      let currNode = queue.dequeue();
      if (!currNode) {
        return;
      }
      if (currNode.data > value && currNode.left === null) {
        currNode.left = newNode;
        return true;
      }
      if (currNode.data < value && currNode.right === null) {
        currNode.right = newNode;
        return true;
      }
      if (currNode.data > value && currNode.left) {
        queue.enqueue(currNode.left);
      }
      if (currNode.data < value && currNode.right) {
        queue.enqueue(currNode.right);
      }
    }
  };

  function findInorderPredecessor(node) {
    node = node.left;
    let inorderPredecessor = node;
    let inorderPredecessorPrevNode = null;
    while (inorderPredecessor && inorderPredecessor.right) {
      inorderPredecessorPrevNode = node;
      inorderPredecessor = inorderPredecessor.right;
    }

    return { inorderPredecessor, inorderPredecessorPrevNode };
  }

  const deleteItem = (value) => {
    if (!includes(value)) {
      return;
    }
    let queue = Queue();
    queue.enqueue(root);
    let currNode = null;
    let prevNode = null;
    while (queue) {
      currNode = queue.dequeue();
      if (!currNode) {
        return;
      }
      if (currNode.data === value) {
        if (!currNode.left && !currNode.right) {
          prevNode.left === currNode
            ? (prevNode.left = null)
            : (prevNode.right = null);
          return true;
        } else if (!currNode.right) {
          prevNode.left === currNode
            ? (prevNode.left = currNode.left)
            : (prevNode.right = currNode.left);
          return true;
        } else if (!currNode.left) {
          prevNode.left === currNode
            ? (prevNode.left = currNode.right)
            : (prevNode.right = currNode.right);
          return true;
        } else {
          let { inorderPredecessor, inorderPredecessorPrevNode } =
            findInorderPredecessor(currNode);
          let temp = currNode.data;
          currNode.data = inorderPredecessor.data;
          inorderPredecessor.data = temp;
          inorderPredecessorPrevNode.right = null;
          return true;
        }
      }
      if (currNode.data > value && currNode.left) {
        prevNode = currNode;
        queue.enqueue(currNode.left);
      }
      if (currNode.data < value && currNode.right) {
        prevNode = currNode;
        queue.enqueue(currNode.right);
      }
    }
  };

  return { print, includes, insert, deleteItem };
}

export default Tree;
