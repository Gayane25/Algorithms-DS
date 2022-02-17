// Write a recursive function to determine whether all digits of the number are odd or not.
'use strict';

function ifOddTrue(num) {
  if (num <= 9 && num % 2) {
    return true;
  }
  let remainder = num % 10;
  if (remainder % 2 === 0) {
    return false;
  }
  num = Math.trunc(num / 10);
  return ifOddTrue(num);
}
// console.log(ifOddTrue(4211133)); output - false;
// console.log(ifOddTrue(7791)); output - true;
// console.log(ifOddTrue(5)); output - true;
