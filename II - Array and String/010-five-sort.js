// Write a function 'fiveSort' that takes
// in an array of numbers as an argument.
// The function should rearrange elements
// of the array such that all 5s appear at the end.
// Your function should perform this operation in-place
// by mutating the original array.
//
// Elements that are not 5 can appear in
// any order in the output, as long as
// all 5s are at the end of the array.

const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    if (nums[i] === 5 && nums[j] !== 5) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else if (nums[i] !== 5) {
      i++;
    } else if (nums[j] === 5) {
      j--;
    }
  }
  return nums;
};

// const fiveSort = (nums) => {
//   let i = 0;
//   let j = nums.length - 1;
//   while (i <= j)
//     if (nums[i] === 5 && nums[j] !== 5) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       i++;
//     } else if (nums[i] !== 5) {
//       i++;
//     } else if (nums[j] === 5) {
//       j--;
//     }
//   return nums;
// };

// 01-03-22

// const fiveSort = (nums) => {
//   let front = 0;
//   let back = nums.length - 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[front] === 5 && nums[back] !== 5) {
//       [nums[front], nums[back]] = [nums[back], nums[front]];
//       front++;
//     } else if (nums[front] !== 5) {
//       front++;
//     } else if (nums[back] === 5) {
//       back--;
//     }
//   }
//   return nums;
// };

// 12-18-21

// const fiveSort = (nums) => {
//   let front = 0;
//   let back = nums.length - 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[front] !== 5) {
//       front++;
//     } else if (nums[back] === 5) {
//       back--;
//     } else {
//       [nums[front], nums[back]] = [nums[back], nums[front]];
//       front++;
//     }
//   }
//   return nums;
// };

// const fiveSort = (numbers) => {
//   let pointer1 = 0;
//   let pointer2 = numbers.length - 1;
//   while (pointer1 <= pointer2) {
//     if (numbers[pointer2] === 5) {
//       pointer2--;
//     } else if (numbers[pointer1] === 5) {
//       [numbers[pointer1], numbers[pointer2]] = [
//         numbers[pointer2],
//         numbers[pointer1],
//       ];
//       pointer1++;
//     } else {
//       pointer1++;
//     }
//   }

//   return numbers;
// };

console.log(fiveSort([12, 5, 1, 5, 12, 7])); // [12,7,1,12,5,5]
console.log(fiveSort([5, 5, 5, 5, 12, 7]));

console.log(fiveSort([5, 1, 5, 2, 12, 5]));
