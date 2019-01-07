// Part 1:
//  - What will print and why?
// 1, 2, undefined. It prints 1  because console.log will take the global value of a. y() will print
// 2 because in changes a to 2 in its scope.  y() also executes x() which redeclares a with no value hence undefined.

//  - What will change if we delete line 5? Why?
//    x() will print 1 because a is 1 on a global scope

// Part 2:
// - change to ES6 syntax

// Part 3:
// - modify so that it prints 1, 2, 2 in that order. Console.logs must stay in place.

function x() {
  console.log(a);
}

function y() {
  a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
