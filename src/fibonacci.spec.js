import { fibs, fibsRec } from "./fibonacci";

describe("Iterative Fibonacci", () => {
  test("Returns upto 3rd element", () => {
    expect(fibs(3)).toStrictEqual([0, 1, 1]);
  });
  test("Returns upto 8th element", () => {
    expect(fibs(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

describe("Recursive Fibonacci", () => {
  test("Returns upto 3rd element", () => {
    expect(fibsRec(3)).toEqual([0, 1, 1]);
  });
  test("Returns upto 8th element", () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
