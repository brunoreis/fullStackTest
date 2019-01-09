

const primeSequencer = () => {
  const sequence = [2, 3, 5, 7, 11, 13];
  let actual = 0;
  return {
    next: () => {
      return sequence[actual++]
    },
  }
}

const generator = (sequencer) => {
  const sequenceFunction = sequencer();
  return {
    next: sequenceFunction.next,
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
