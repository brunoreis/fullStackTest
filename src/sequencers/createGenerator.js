import partialSumSequencer from './partialSumSequencer';
import primeSequencer from './primeSequencer';
import rangeSequencer from './rangeSequencer';
import generator from './generator';

export const availableSequences = [
  // {name:"Factorial", sequence: () => {}},
  // {name:"Fibonacci", sequence: () => {}},
  {name:"Range", sequencer: partialSumSequencer},
  {name:"Prime", sequencer: primeSequencer},
  {name:"Partial Sum", sequencer: rangeSequencer},
]

export default (sequencer, ...extraArgs) => generator(sequencer, ...extraArgs)
