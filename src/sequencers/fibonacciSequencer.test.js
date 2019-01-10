import fibonacciSequencer from "./fibonacciSequencer";
import generator from "./generator";

it("should return the next partialSum sequence number when next is called", () => {
  var partialSumGenerator = generator(fibonacciSequencer);
  expect(partialSumGenerator.next()).toBe(1);
  expect(partialSumGenerator.next()).toBe(1);
  expect(partialSumGenerator.next()).toBe(2);
  expect(partialSumGenerator.next()).toBe(3);
  expect(partialSumGenerator.next()).toBe(5);
  expect(partialSumGenerator.next()).toBe(8);
});
