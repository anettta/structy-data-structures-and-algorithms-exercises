// Write a function, pathFinder, that takes in
// the root of a binary tree and a target value.
// The function should return an array
// representing a path to the target value.
// If the target value is not found in the tree,
//  then return null.
//
// You may assume that the tree contains unique values.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const pathFinder = (root, target) => {
  let result = pathFinderHelper(root, target);
  return result === null ? null : result.reverse();
};
const pathFinderHelper = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];
  let leftPath = pathFinderHelper(root.left, target);
  let rightPath = pathFinderHelper(root.right, target);
  if (leftPath !== null) {
    leftPath.push(root.val);
    return leftPath;
  }
  if (rightPath !== null) {
    rightPath.push(root.val);
    return rightPath;
  }
  return null;
};

// const pathFinder = (root, target) => {
//   let path = [];
//   if (root.val === target) return [root.val];
//   let stack = [root];
//   while (stack.length > 0) {
//     let current = stack.shift();
//     path.push(current.val);
//     if (current.val === target) return path.slice(path[target]);

//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }
//   return path;
// };

// Time: O(n)
// Space: O(n)

// const pathFinder = (root, target) => {
//   const result = pathFinderHelper(root, target);
//   if (result === null) {
//     return null;
//   } else {
//     return result.reverse();
//   }
// };
// const pathFinderHelper = (root, target) => {
//   if (root === null) return null;
//   if (root.val === target) return [root.val];
//   const leftPath = pathFinderHelper(root.left, target);
//   const rightPath = pathFinderHelper(root.right, target);
//   if (leftPath) {
//     leftPath.push(root.val);
//     return leftPath;
//   }
//   if (rightPath) {
//     rightPath.push(root.val);
//     return rightPath;
//   }
//   return null;
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(pathFinder(a, "e")); // -> [ 'a', 'b', 'e' ]
