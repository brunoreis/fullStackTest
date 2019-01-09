export default (start, step) => {
  let nextValue = start;
  return {
    next: () => {
      const actual = nextValue;
      nextValue = actual + step;
      return actual;
    },
  }
}
