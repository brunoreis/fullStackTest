export default () => {
  const sequence = [2, 3, 5, 7, 11, 13];
  let actual = 0;
  return {
    next: () => {
      return sequence[actual++]
    },
  }
}
