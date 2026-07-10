import mergeSort from "./merge-sort";

describe("Merge Sort", () => {
  test("Sorts empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });
  test("Sorts single valued array", () => {
    expect(mergeSort([73])).toEqual([73]);
  });
  test("Sorts small array", () => {
    expect(mergeSort([1, 3, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });
  test("Sorts large array", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });
  test("Sorts array with large values", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});
