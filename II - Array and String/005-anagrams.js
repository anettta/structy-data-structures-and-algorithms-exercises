// Write a function 'anagrams' that takes in two strings as arguments.
// The function should return a boolean indicating whether or not the strings are anagrams.
// Anagrams are strings that contain the same characters,
// but in any order.

// Time: O(n+m)
// Space: ~O(n+m)
// n = s1 length
// m = s2 length

const anagrams = (str1, str2) => {
  let map = {};

  for (let char of str1) {
    if (!map[char]) {
      map[char] = 0;
    }
    map[char]++;
  }

  for (let char of str2) {
    if (map[char]) {
      map[char]--;
    } else {
      return false;
    }
  }

  for (let key in map) {
    if (map[key] !== 0) {
      return false;
    }
  }
  return true;
};

// const anagrams = (str1, str2) => {
//   let map = {};

//   for (let char of str1) {
//     if (!map[char]) {
//       map[char] = 0;
//     }
//     map[char]++;
//   }

//   for (let char of str2) {
//     if (map[char]) {
//       map[char]--;
//     } else {
//       return false;
//     }
//   }

//   for (let char in map) {
//     if (map[char] !== 0) {
//       return false;
//     }
//   }
//   return true;
// };

// const anagrams = (str1, str2) => {
//   let map = {};

//   for (let char of str1) {
//     if (!map[char]) {
//       map[char] = 0;
//     }
//     map[char] += 1;
//   }

//   for (let char of str2) {
//     if (map[char]) {
//       map[char] -= 1;
//     } else {
//       return false;
//     }
//   }
//   for (let char in map) {
//     if (map[char] !== 0) {
//       return false;
//     }
//   }
//   return true;
// };

// 01/03/22

// const anagrams = (str1, str2) => {
//   if (str1.length !== str2.length) return false;
//   let map = {};
//   for (let i = 0; i < str1.length; i++) {
//     let char = str1[i];
//     if (!map[char]) {
//       map[char] = 0;
//     }
//     map[char] += 1;
//   }
//   for (let i = 0; i < str2.length; i++) {
//     let char = str2[i];
//     if (map[char]) {
//       map[char] -= 1;
//     } else {
//       return false;
//     }
//   }

//   for (let i = 0; i < map.length; i++) {
//     if (map[char] !== 0) return false;
//   }

//   return true;
// };

// 12-17-21

// const anagrams = (str1, str2) => {
//   if (str1.length !== str2.length) return false;
//   // cats // tacs // true
//   for (let i = 0; i < str1.length; i++) {
//     let str1Elem = str1[i];
//     if (!str2.includes(str1Elem)) {
//       return false;
//     }
//   }
//   return true;
// };

// const anagrams = (str1, str2) => {
//   if (str1.length !== str2.length) return false;
//   // cats // tacs // true
//   let map = {};
//   for (let i = 0; i < str1.length; i++) {
//     let str1Elem = str1[i];
//     map[str1Elem] = true;
//   }

//   for (let i = 0; i < str2.length; i++) {
//     let str2Elem = str2[i];
//     if (!map[str2Elem]) {
//       return false;
//     }
//   }
//   return true;
// };

// const anagrams = (s1, s2) => {
//   // if (s1.length !== s2.length) return false;
//   let map = {};

//   for (let letter of s1) {
//     // n
//     if (!map[letter]) {
//       map[letter] = 0;
//     }
//     map[letter] += 1;
//   }

//   for (let letter of s2) {
//     // m
//     if (map[letter]) {
//       map[letter] -= 1;
//     } else {
//       return false;
//     }
//   }
//   for (let letter in map) {
//     // n
//     // in = iterating through the keys of the object
//     if (map[letter] !== 0) {
//       return false;
//     }
//   }
//   return true;
// };

console.log(anagrams("restfulll", "flluster")); // false
console.log(anagrams("catss", "tacss")); // true
