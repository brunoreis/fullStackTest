import generator from './generator';

export default (sequencer, ...extraArgs) => {
  const seq = generator(sequencer, ...extraArgs);
  return {
    pipeline: (pipeFunction) => ({
      invoke: () => {
        const initedPipeFunction = pipeFunction();
        return () => ({
          next: () => {
            const nextValue = seq.next();
            return initedPipeFunction(nextValue);
          },
        });
      }
    })
  }
}
