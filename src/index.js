import Tree from "./bst.js";

const bst = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(bst.isBalanced());
bst.print();
console.log("Level order Traversal:");
bst.levelOrderForEach((node) => console.log(node.data));

console.log("Inorder order Traversal:");
bst.inOrderForEach((node) => console.log(node.data));
console.log("Preorder order Traversal:");
bst.preOrderForEach((node) => console.log(node.data));
console.log("Postorder Traversal:");
bst.postOrderForEach((node) => console.log(node.data));
