// Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
// function that concats arrays).
'use strict';

function flattens(arr) {
  const flattenedArr = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flattenedArr.push(...flattens(item));
    } else {
      flattenedArr.push(item);
    }
  });
  return flattenedArr;
}
//console.log(flattens([1, [3, 4, [1, 2]], 10]));
//console.log(flattens([14, [1, [[[3, []]], 1], 0]]));
