export default (sequencer, ...extraArguments) => {
  const sequenceFunction = sequencer(...extraArguments);
  return {
    next: sequenceFunction.next,
  }
}
