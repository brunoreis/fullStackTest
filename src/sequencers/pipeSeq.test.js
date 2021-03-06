import generator from "./generator";
import pipeSeq from './pipeSeq';
import accumulator from './accumulator';
import isEven from './isEven';
import rangeSequencer from './rangeSequencer';

describe("pipeSeq", () => {
  it("should return an object with a pipeline function", () => {
    const pipedSeq = pipeSeq(rangeSequencer, 2, 3); // 2, 5, 8, 11
    expect(typeof pipedSeq.pipeline).toBe('function');
  });

  it("should return an object with a pipeline function that returns on object with an invoke function", () => {
    const pipedSeq = pipeSeq(rangeSequencer, 2, 3); // 2, 5, 8, 11
    expect(typeof pipedSeq.pipeline).toBe('function');
    expect(typeof pipedSeq.pipeline().invoke).toBe('function');
  });

  it("invoke function should return a sequencer. When the sequencer is called, then it will have a next value.", () => {
    const pipedSeq = pipeSeq(rangeSequencer, 2, 3); // 2, 5, 8, 11
    const pipedSequecer = pipedSeq.pipeline(accumulator).invoke();
    expect(typeof pipedSequecer).toBe('function');
    expect(typeof pipedSequecer()).toBe('object');
    expect(typeof pipedSequecer().next).toBe('function');
  });

  it("should return values with the rangeSequencer results piped into the accumulator", () => {
    const pipedSeq = pipeSeq(rangeSequencer, 2, 3) // 2, 5, 8, 11
      .pipeline(accumulator) // 2, 7(5+2), 15(7+8), 26(15+11)
      .invoke();
    const seq = generator(pipedSeq);
    expect(seq.next()).toBe(2);
    expect(seq.next()).toBe(7);
    expect(seq.next()).toBe(15);
    expect(seq.next()).toBe(26);
  });

  it("should work ok when called without any pipe function", () => {
    const pipedSeq = pipeSeq(rangeSequencer, 2, 3).invoke();
    const seq = generator(pipedSeq);
    expect(seq.next()).toBe(2);
    expect(seq.next()).toBe(5);
    expect(seq.next()).toBe(8);
  });

  it("should work ok when called with 2 pipe functions", () => {
    const pipedSeq = pipeSeq(rangeSequencer, 2, 3)
      .pipeline(accumulator)
      .pipeline(isEven)
      .invoke();
    const seq = generator(pipedSeq);
    const expectedResults = [
      { status: true, number: 2 },
      { status: false, number: 7 },
      { status: false, number: 15 },
      { status: true, number: 26 },
    ]
    expectedResults.forEach(
      expectedResult => expect(seq.next()).toEqual(expectedResult)
    )

  });




})
