// Write a function, treeLevels,
// that takes in the root of a binary tree.
// The function should return a 2-Dimensional array
//  where each subarray represents a level of the tree.
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeLevels = (root) => {
  if (root === null) return [];
  let levels = [];
  let stack = [{ node: root, level: 0 }];
  while (stack.length > 0) {
    let { node, level } = stack.pop();
    if (levels.length === level) {
      levels.push([node.val]);
    } else {
      levels[level].push(node.val);
    }
    if (node.left !== null) stack.push({ node: node.left, level: level + 1 });
    if (node.right !== null) stack.push({ node: node.right, level: level + 1 });
  }
  return levels;
};

// const treeLevels = (root) => {
//   let levels = [];
//   fillLevels(root, levels, 0);
//   return levels;
// };
// const fillLevels = (root, levels, level) => {
//   if (root === null) return;
//   if (levels.length === level) {
//     levels.push([root.val]);
//   } else {
//     levels[level].push(root.val); // additing to existing level
//   }
//   fillLevels(root.left, levels, level + 1);
//   fillLevels(root.right, levels, level + 1);
// };

// const treeLevels = (root) => {
//   if (root === null) return [];
//   const stack = [{ node: root, level: 0 }];
//   const levels = [];
//   while (stack.length > 0) {
//     const { node, level } = stack.pop();
//     if (levels.length === level) {
//       levels.push([node.val]);
//     } else {
//       levels[level].push(node.val);
//     }
//     if (node.left !== null) stack.push({ node: node.left, level: level + 1 });
//     if (node.right !== null) stack.push({ node: node.right, level: level + 1 });
//   }
//   return levels;
// };

// ---------recursive start--------
// const treeLevels = (root) => {
//   const levels = [];
//   fillLevels(root, levels, 0);
//   return levels;
// };

// const fillLevels = (root, levels, levelNum) => {
//   if (root === null) return;

//   if (levels.length === levelNum) {
//     levels.push([root.val]); // for root node
//   } else {
//     levels[levelNum].push(root.val); // indexing into existing subarray
//   }
//   fillLevels(root.left, levels, levelNum + 1);
//   fillLevels(root.right, levels, levelNum + 1);
// };
// -------recursive finish---------

// BFS - queue - shift()
// const treeLevels = (root) => {
//   if (root === null) return [];

//   let queue = [{ node: root, levelNum: 0 }];

//   let levels = [];

//   while (queue.length > 0) {
//     const { node, levelNum } = queue.shift();

//     if (levels.length === levelNum) {
//       levels.push([node.val]); // for root node
//     } else {
//       levels[levelNum].push(node.val); // indexing into existing subarray
//     }

//     if (node.left !== null)
//       queue.push({ node: node.left, levelNum: levelNum + 1 });
//     if (node.right !== null)
//       queue.push({ node: node.right, levelNum: levelNum + 1 });
//   }

//   return levels;
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

console.log(treeLevels(a)); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]
