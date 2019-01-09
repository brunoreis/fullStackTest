export default (sequencer, ...dude) => {
  const sequenceFunction = sequencer(...dude);
  return {
    next: sequenceFunction.next,
  }
}
