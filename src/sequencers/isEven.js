export default () => (number) => ({
  status: number%2 === 0,
  number,
});
