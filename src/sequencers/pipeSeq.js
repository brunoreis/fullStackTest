import generator from './generator';
import { pipe } from 'ramda';

export default (sequencer, ...extraArgs) => {
  const seq = generator(sequencer, ...extraArgs);
  const pipedFunctions = [];
  const p = {
    pipeline: (pipeFunction) => {
      pipedFunctions.push(pipeFunction);
      return p;
    },
    invoke: () => {
      const initedPipeFunctions = pipedFunctions.map(
        pipedFunction => pipedFunction()
      );
      return () => ({
        next: () => {
          const nextUnpipedValue = seq.next();
          return pipedFunctions.length > 0 ?
            pipe(...initedPipeFunctions)(nextUnpipedValue) :
            nextUnpipedValue;
        },
      });
    }
  }
  return p;
}
