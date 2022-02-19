/*3.Given an array of numbers which is almost sorted in ascending order. Find the index
where sorting order is violated.*/
'use strict';
function violatedSortingOrder(arr) {
  let second;
  for (let first = 0; first < arr.length; first++) {
    second = first + 1;
    if (arr[second] - arr[first] < 0) return second;
  }
  return -1;
}

//console.log(violatedSortingOrder([2, 12, 15, 48, 64]));
//console.log(violatedSortingOrder([-9, -4, -4, 3, 12, 4, 5]));
