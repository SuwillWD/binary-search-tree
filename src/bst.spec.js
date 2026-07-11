import Tree from "./bst.js";

let bst = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

it("Checks if a value is present in the tree", () => {
  expect(bst.includes(67)).toBe(true);
  expect(bst.includes(69)).toBe(false);
  expect(bst.includes(6345)).toBe(true);
});

it("Inserts a value in the tree", () => {
  expect(bst.insert(69)).toBe(true);
  expect(bst.insert(67)).toBe(undefined);
  expect(bst.insert(103)).toBe(true);
});
