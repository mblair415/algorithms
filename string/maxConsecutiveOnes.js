/*
Input is commonly a string or an array, but the root of the soultion is the same.

Input is 1s and 0s.  Return the max consecutive number of 1s.

Input: '10110100111011'
*/

const maxConsecutiveOnes = str => {
  let current = 0;
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      current++;
      max = Math.max(current, max);
    } else {
      current = 0;
    }
  }

  return max;
};
