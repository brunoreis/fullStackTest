import factorialSequencer from "./factorialSequencer";
import generator from "./generator";

it("should return the next factorial sequence number when next is called", () => {
  var factorialGenerator = generator(factorialSequencer);
  const expectedResults = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200 ];
  expectedResults.map(
    expectedResult => expect(factorialGenerator.next()).toBe(expectedResult)
  );
});
