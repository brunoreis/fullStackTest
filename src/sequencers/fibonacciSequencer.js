export default () => {
  let last2 = 0;
  let last1 = 1;
  let calledOnce = false;
  return {
    next: () => {
      if(!calledOnce) {
        calledOnce = true;
        return 1;
      }
      const nextValue = last2 + last1;
      last2 = last1;
      last1 = nextValue;
      return nextValue;
    },
  }
}
