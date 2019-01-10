import partialSumSequencer from './partialSumSequencer';
import primeSequencer from './primeSequencer';
import rangeSequencer from './rangeSequencer';
import fibonacciSequencer from './fibonacciSequencer';
import factorialSequencer from './factorialSequencer';

import generator from './generator';

export const availableSequences = [
  {name:"Factorial", sequencer: factorialSequencer},
  {name:"Fibonacci", sequencer: fibonacciSequencer},
  {name:"Range", sequencer: partialSumSequencer},
  {name:"Prime", sequencer: primeSequencer},
  {name:"Partial Sum", sequencer: rangeSequencer},
]

export default (sequencer, ...extraArgs) => generator(sequencer, ...extraArgs)
