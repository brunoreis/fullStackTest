// I got this function from stackoverflow
// https://stackoverflow.com/questions/3959211/what-is-the-fastest-factorial-function-in-javascript

// This seemed a function that would be more expensive to process,
// so I decided to look for something ready.
// And I liked the idea of using memoization.

let f = [];
const factorial = (n) => {
  if (n === 0 || n === 1) return 1; // special cases
  if (f[n] > 0) return f[n]; // if it has the memoized value, use it.
  f[n] = factorial(n-1) * n; // calculate the newer value
  return f[n]
};

export default () => {
  let index = 0;
  return {
    next: () => {
      return factorial(index++);
    },
  }
}
