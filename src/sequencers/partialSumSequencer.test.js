import partialSumSequencer from "./partialSumSequencer";
import generator from "./generator";

it("should return the next partialSum sequence number when next is called", () => {
  var partialSumGenerator = generator(partialSumSequencer, 3, 7, 10, 12, 2);
  expect(partialSumGenerator.next()).toBe(3);
  expect(partialSumGenerator.next()).toBe(10);
  expect(partialSumGenerator.next()).toBe(20);
  expect(partialSumGenerator.next()).toBe(32);
  expect(partialSumGenerator.next()).toBe(34);
});

it("should throw if next is called more times than the sequence length", () => {
  var partialSumGenerator = generator(partialSumSequencer, 1, 99, 1);
  [1,2,3].forEach(() => partialSumGenerator.next());
  expect(() => partialSumGenerator.next()).toThrowErrorMatchingInlineSnapshot(
    `"Sequence has completed"`
  );
});
