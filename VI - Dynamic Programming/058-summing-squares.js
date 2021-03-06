// Write a function, summingSquares, that takes a target number as an argument.
// The function should return the minimum number of perfect squares that sum to the target.
// A perfect square is a number of the form (i*i) where i >= 1.

// For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.

// Given 12:
// summingSquares(12) -> 3

// The minimum squares required for 12 is three, by doing 4 + 4 + 4.

// Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.
//
// Time: O(n * sqrt(n))
// Space: O(n)
//

const summingSquares = (num, memo = {}) => {
  if (num in memo) return memo[num];
  if (num === 0) return 0;
  let minSqCount = Infinity;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    let square = i * i;
    let currSqCount = 1 + summingSquares(num - square, memo);
    minSqCount = Math.min(minSqCount, currSqCount);
  }
  memo[num] = minSqCount;
  return memo[num];
};

// const summingSquares = (num, memo = {}) => {
//   if (num === 0) return 0;
//   if (num in memo) return memo[num];
//   let min = Infinity;
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     const square = i * i;
//     const minSquares = 1 + summingSquares(num - square, memo);
//     if (minSquares < min) min = minSquares;
//   }
//   memo[num] = min;
//   return min;
// };

// const summingSquares = (n, memo = {}) => {
//   if (n in memo) return memo[n];
//   if (n === 0) return 0;

//   let minSquares = Infinity;
//   for (let i = 1; i <= Math.sqrt(n); i++) {
//     const square = i * i;
//     const numSquares = 1 + summingSquares(n - square, memo);
//     minSquares = Math.min(minSquares, numSquares);
//   }
//   memo[n] = minSquares;
//   return minSquares;
// };

console.log(summingSquares(8)); // -> 2
