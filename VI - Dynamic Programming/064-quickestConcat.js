const quickConcat = (s, words) => {
  let result = _quickestConcat(s, words);
  return result === Infinity ? -1 : result;
};

const _quickestConcat = (s, words, memo = {}) => {
  if (s in memo) return memo[s];
  if (s === "") return 0;
  let min = Infinity;
  for (let word of words) {
    if (s.startsWith(word) === true) {
      let suffix = s.slice(word.length);
      let attempt = 1 + _quickestConcat(suffix, words, memo);
      min = Math.min(min, attempt);
    }
  }
  memo[s] = min;
  return min;
};

// const quickConcat = (s, words) => {
//   let result = quickestConcat(s, words);
//   return result === Infinity ? -1 : result;
// };

// const quickestConcat = (s, words, memo = {}) => {
//   if (s === "") return 0;
//   if (s in memo) return memo[s];
//   let min = Infinity;

//   for (let word of words) {
//     if (s.startsWith(word) === true) {
//       const suffix = s.slice(word.length);
//       const currentSize = 1 + quickestConcat(suffix, words, memo);
//       if (currentSize < min) {
//         min = currentSize;
//       }
//     }
//   }
//   memo[s] = min;
//   return min;
// };

console.log(
  quickConcat("foodisgood", ["is", "g", "foodisgood", "f", "ood", "foo"])
); // 1
