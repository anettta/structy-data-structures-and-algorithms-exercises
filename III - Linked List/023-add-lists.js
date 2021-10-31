// Write a function 'addLists' that takes in the head of two linked lists,
// each representing a number.
// The nodes of the linked lists contain digits as values.
// The nodes in the input lists are reversed.
// this means that the least significant digit of the number is the head.
// The function should return the head of a new linked list representing
// the sum of the input lists.
// The output list should have it's digits reversed as well.

// 621
// +
// 354
// ___
// 975

// 1 -> 2 -> 6
// 4 -> 5 -> 3
// 5 -> 7 -> 9

// n = length of list 1
// m = length of list 2
// Time: O(max(n,m))
// Space: O(max(n,m))

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// recursive
// const addLists = (head1, head2, carry = 0) => {
//   if (head1 === null && head2 === null && carry === 0) return null;

//   const val1 = head1 === null ? 0 : head1.val;
//   const val2 = head2 === null ? 0 : head2.val;

//   let sum = val1 + val2 + carry;

//   const nextCarry = sum > 9 ? 1 : 0;
//   const digit = sum % 10;
//   let resultNode = new Node(digit);

//   const next1 = head1 === null ? null : head1.next;
//   const next2 = head2 === null ? null : head2.next;

//   resultNode.next = addLists(next1, next2, nextCarry);
//   return resultNode;
// };

const addLists = (head1, head2) => {
  let carry = 0;
  let dummy = new Node(null);
  let tail = dummy;

  while (head1 !== null || head2 !== null || carry === 1) {
    const val1 = head1 === null ? 0 : head1.val;
    const val2 = head2 === null ? 0 : head2.val;
    const sum = val1 + val2 + carry;

    carry = sum > 9 ? 1 : 0;
    const digit = sum % 10;

    let newNode = new Node(digit);

    if (head1 !== null) head1 = head1.next;
    if (head2 !== null) head2 = head2.next;

    tail.next = newNode;
    tail = tail.next;
  }

  return dummy.next;
};

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;

console.log(addLists(a1, b1));