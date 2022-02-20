'use strict';

// Given an array and a number N. Write a recursive function that rotates an array N
// places to the left. (Hint: to add element to the beginning use arr.unshift())

function rotate(arr, n) {
  if (n === 0) return arr;
  if (n < 0) {
    arr.unshift(arr.pop());
    return rotate(arr, n + 1);
  }
  let first = arr.shift();
  arr.push(first);

  return rotate(arr, n - 1);
}
console.log(rotate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));
