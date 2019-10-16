/*
A complication to the max consecutive one's problem.

Input is commonly a string or an array, but the root of the soultion is the same.

Input is 1s and 0s.  Return the max consecutive number of 1s, you can ignore up to
one of the zero characters in the input.

Input: '110110111'

counter with 0
counter without 0
max
loop through input
  if current is a 1
    counter with 0 incriments
    counter without 0 incriments
    max becomes whichever is greater max or counter with 0s
  else
    counter with 0 = counter without 0
    reset counter without 0
return max
*/

const consecutiveOnesWithZero = str => {
  let streakWithZero = 0,
    streakNoZero = 0,
    max = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      streakWithZero++;
      streakNoZero++;
      max = Math.max(streakWithZero, max);
    } else {
      streakWithZero = streakNoZero;
      streakNoZero = 0;
    }
  }

  return max;
};
