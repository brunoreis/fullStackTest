import rangeSequencer from './rangeSequencer';
import generator from './generator';

it('should return the next range sequence number when next is called', () => {
  var rangeGenerator = generator(rangeSequencer, 3, 7);
  expect(rangeGenerator.next()).toBe(3);
  expect(rangeGenerator.next()).toBe(10);
  expect(rangeGenerator.next()).toBe(17);
  expect(rangeGenerator.next()).toBe(24);
  expect(rangeGenerator.next()).toBe(31);
});
