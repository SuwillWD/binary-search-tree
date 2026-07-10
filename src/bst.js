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
      return;
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

  const print = () => prettyPrint(root);

  return { print };
}

export default Tree;
