export default () => {
  var sum = 0;
  return (value) => {
    sum += value;
    return sum;
  };
}
