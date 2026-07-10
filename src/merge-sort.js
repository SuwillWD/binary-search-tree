function merge(leftArr, rightArr) {
  let mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      mergedArr.push(leftArr[i]);
      i++;
    } else {
      mergedArr.push(rightArr[j]);
      j++;
    }
  }
  if (i !== leftArr.length) {
    mergedArr = [...mergedArr, ...leftArr.slice(i)];
  }
  if (j !== rightArr.length) {
    mergedArr = [...mergedArr, ...rightArr.slice(j)];
  }
  return mergedArr;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let start = 0;
    let end = array.length;
    let middle = (start + end) / 2;
    let leftArr = mergeSort(array.slice(start, middle));
    let rightArr = mergeSort(array.slice(middle, end));
    array = merge(leftArr, rightArr);
  }
  return array;
}

export default mergeSort;
