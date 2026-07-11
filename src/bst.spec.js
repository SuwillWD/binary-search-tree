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

it.skip("Deletes a value in the tree", () => {
  expect(bst.deleteItem(324)).toBe(true);
  expect(bst.deleteItem(23)).toBe(true);
  expect(bst.deleteItem(110)).toBe(undefined);
});

it("Calls callback on level order traversal", () => {
  let arr = [];
  bst.levelOrderForEach((val) => arr.push(val));
  expect(() => bst.levelOrderForEach(1)).toThrow(Error);
  expect(arr.length).toBe(13);
  expect(arr).toEqual([8, 4, 67, 1, 5, 9, 324, 3, 7, 23, 69, 6345, 103]);
});
