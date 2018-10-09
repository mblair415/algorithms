/*
leetcode easy
This solution -- Runtime: 52 ms,
faster than 100.00% of JavaScript online submissions for Plus One.


your input is an array of numbers.  consider that array as a single number,
then add 1 to that combined number.

example:
input => [1,2,3]
output => [1,2,4]
the number 124 is one greater than the number 123

input => [5,9]
output => [6,0]
the number 60 is one greater than the number 59

input => [9,9,9,9]
output => [1,0,0,0,0]
the number 10000 is one greater than the number 9999


this is a silly solution that can be used to turn the array of numbers into
a single number, then add one, then break it back out into separate numbers.
it works for smaller numbers but breaks with especially long numbers
return (input.map( ele => ele.toString() ).join('')) + 1).toString().split('').map( num => Number(num))
silly solution is also much slower

*/

function plusOne(digits) { // soution faster than 100%
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
    if (digits[0] == 0) {
      digits.unshift(1);
      return digits;
    }
  }
};
