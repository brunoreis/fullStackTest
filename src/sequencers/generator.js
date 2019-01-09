export default (sequencer, ...dude) => {
  console.log('GEEE');
  console.log('dude', dude);
  console.log('....');
  const sequenceFunction = sequencer(...dude);
  return {
    next: sequenceFunction.next,
  }
}
