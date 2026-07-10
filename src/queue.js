function Queue() {
  const qArray = [];

  const enqueue = (value) => {
    qArray.push(value);
    return true;
  };

  const dequeue = () => {
    qArray.shift();
    return true;
  };

  const peek = () => {
    return qArray[0];
  };

  const isEmpty = () => {
    return qArray.length === 0;
  };

  return { enqueue, dequeue, peek, isEmpty };
}

export default Queue;
