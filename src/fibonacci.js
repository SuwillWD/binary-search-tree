function fibs(n) {
  let fibsArr = [0, 1];
  for (let i = 2; i < n; i++) {
    fibsArr.push(fibsArr[i - 1] + fibsArr[i - 2]);
  }
  return fibsArr;
}

function fibsRec(n) {
  let fibsArr = [];
  if (n === 2) {
    fibsArr.push(0);
    fibsArr.push(1);
    return fibsArr;
  } else {
    fibsArr = [...fibsRec(n - 1)];
    fibsArr.push(fibsArr.at(-1) + fibsArr.at(-2));
    return fibsArr;
  }
}

export { fibs, fibsRec };
