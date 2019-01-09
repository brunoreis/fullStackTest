export default (sequencer, ...extraArguments) => {
  console.log('gen sequencer....', typeof sequencer);
  const sequenceFunction = sequencer(...extraArguments);
  return {
    next: sequenceFunction.next,
  }
}
