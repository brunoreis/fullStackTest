export default (sequencer) => {
  const sequenceFunction = sequencer();
  return {
    next: sequenceFunction.next,
  }
}
