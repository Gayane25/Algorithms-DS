let sum = 0;

function sumOfDigits(num) {
  if (num <= 9) {
    return (sum += num);
  }
  let remainder = num % 10;
  sum += remainder;
  num = Math.trunc(num / 10);

  return sumOfDigits(num);
}
console.log(sumOfDigits(38));
