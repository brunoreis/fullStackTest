// from https://stackoverflow.com/questions/21966000/need-to-generate-prime-numbers-in-javascript
// no difficulties here, just a time saver copy and paste.
const isPrime = (num) => {
  for ( var i = 2; i < num; i++ ) {
      if ( num % i === 0 ) {
          // proposed optimization to evaluate: return false if i is greater then the half.
          return false;
      }
  }
  return true;
}

export default () => {
  let actual = 1;
  return {
    next: () => {
      let nextCandidate = actual;
      let iterating = true;
      do {
        nextCandidate = nextCandidate + 1
        if( isPrime(nextCandidate) ) {
          actual = nextCandidate;
          iterating = false;
        }
      } while(iterating)
      return actual;
    },
  }
}
