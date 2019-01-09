

const primeSequencer = (index) => {
  const sequence = [2, 3, 5, 7, 11, 13];
  return sequence[index];
}

const generator = (sequence) => {
  let actualIndex = -1;
  return {
    next: () => {
      actualIndex++;
      return sequence(actualIndex)
    }
  }
}

it('renders without crashing', () => {
  var primeGenerator = generator(primeSequencer);
  expect(primeGenerator.next()).toBe(2)
  expect(primeGenerator.next()).toBe(3)
  expect(primeGenerator.next()).toBe(5)
  expect(primeGenerator.next()).toBe(7)
  expect(primeGenerator.next()).toBe(11)
});
