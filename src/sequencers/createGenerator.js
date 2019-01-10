import partialSumSequencer from './partialSumSequencer';
import primeSequencer from './primeSequencer';
import rangeSequencer from './rangeSequencer';
import fibonacciSequencer from './fibonacciSequencer';
import factorialSequencer from './factorialSequencer';

import generator from './generator';

export const sequences = {
  FACTORIAL: 'FACTORIAL',
  FIBONACCI:'FIBONACCI',
  RANGE:'RANGE',
  PRIME:'PRIME',
  PARTIAL_SUM:'PARTIAL_SUM',
}

export const availableSequences = [
  {
    type: sequences.FACTORIAL,
    name:"Factorial",
    sequencer: factorialSequencer,
  },
  {
    type: sequences.FIBONACCI,
    name:"Fibonacci",
    sequencer: fibonacciSequencer,
  },
  {
    type: sequences.RANGE,
    name:"Range",
    sequencer: rangeSequencer,
  },
  {
    type: sequences.PRIME,
    name:"Prime",
    sequencer: primeSequencer,
  },
  {
    type: sequences.PARTIAL_SUM,
    name:"Partial Sum",
    sequencer: partialSumSequencer,
  },
]

export default (sequencer, ...extraArgs) => generator(sequencer, ...extraArgs)
