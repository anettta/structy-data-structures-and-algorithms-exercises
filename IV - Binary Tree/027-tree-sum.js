// Write a function, treeSum,
// that takes in the root of a binary tree that contains number values.
// The function should return the total sum of all values in the tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeSum = (root) => {
  if (root === null) return 0;
  let left = treeSum(root.left);
  let right = treeSum(root.right);
  return root.val + left + right;
};

// const treeSum = (root) => {
//   if (root === null) return 0;
//   let queue = [root];
//   sum = 0;
//   while (queue.length > 0) {
//     let current = queue.shift();
//     sum += current.val;
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return sum;
// };

// const treeSum = (root) => {
//   let sum = 0;
//   let queue = [root];
//   while (queue.length > 0) {
//     let current = queue.shift();
//     sum += current.val;
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return sum;
// };

// const treeSum = (root) => {
//   if (root === null) return 0;
//   return root.val + treeSum(root.left) + treeSum(root.right);
// };

// BFS - iterative
// const treeSum = (root) => {
//   if (root === null) return 0;
//   let queue = [root];
//   let sum = 0;
//   while (queue.length > 0) {
//     let current = queue.shift();
//     sum += current.val;
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }

//   return sum;
// };

// DFS - recursive
// const treeSum = (root) => {
//   if (root === null) return 0;
//   let sum = root.val;
//   sum += treeSum(root.left) + treeSum(root.right);

//   return sum;
// };

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeSum(a)); // -> 21
