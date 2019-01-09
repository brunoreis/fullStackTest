import generator from './generator';

export default (sequencer, ...extraArgs) => {
  const pipedGenerator = generator(sequencer, ...extraArgs);
  return {
    pipeline: (pipeFunction) => ({
      invoke: () => () => ({
        next: () => {},
      }),
    })
  }
}
