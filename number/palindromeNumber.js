/*
is the number the same way forward and backward?

ex:
input: 5885
output: true

input: -121
output: false  (-121 != 121-)

*/

function palindromeNumber(num) {
  let numToString = num.toString(),
    start = 0,
    end = numToString.length - 1;

  while (start <= end) {
    if (numToString[start] != numToString[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}


function palindromeNumber2(num) {
  let numToString = num.toString();

  return numToString === numToString.split('').reverse().join('');
}
