/*
Input is a string of numbers.
Assuming each number can associate with a letter (1 == 'a', 2 == 'b', 12 == 'l').
Count the number of different ways the string can be interpreted.
input: '12'
ouput: 2

can be either 'ab' or 'l'.
there are two ways to interpret it.
it returns 2.




A simple recursive solution.  Memoization and tabulation approaches to follow.

This solution is faster than 5% of leetcode solutions and uses less space than 21% of leetcode solutions.

*/

function numDecodings(s) {
  let counter = 0;
  let charMap = {
    '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h', '9': 'i', '10': 'j', '11': 'k', '12': 'l', '13': 'm', '14': 'n', '15': 'o', '16': 'p', '17': 'q', '18': 'r', '19': 's', '20': 't', '21': 'u', '22': 'v', '23': 'w', '24': 'x', '25': 'y', '26': 'z'
  };
  function decoderHelper(index) {
    if (index == s.length) {
      counter++;
      return;
    }
    if ([s[index]] == '0') {
      return;
    }

    decoderHelper(index + 1);
    if (charMap[s[index] + s[index + 1]] != undefined) {
      decoderHelper(index + 2);
    }
  }
  decoderHelper(0);
  return counter;

};
