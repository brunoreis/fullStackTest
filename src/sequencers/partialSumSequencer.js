export default (...sequence) => {
  let index = -1;
  let sum = 0;

  return {
    next: () => {
      index++;
      const nextValue = sequence[index];
      const indexExists = index < sequence.length;
      if(indexExists) {
        sum += nextValue;
      } else {
        throw new Error('Sequence has completed');
      }
      return sum;
    },
  }
}
