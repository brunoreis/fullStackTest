import primeSequencer from './primeSequencer';
import generator from './generator';

it('should return the next prime number when next is called', () => {
  var primeGenerator = generator(primeSequencer);
  expect(primeGenerator.next()).toBe(2)
  expect(primeGenerator.next()).toBe(3)
  expect(primeGenerator.next()).toBe(5)
  expect(primeGenerator.next()).toBe(7)
  expect(primeGenerator.next()).toBe(11)
});
