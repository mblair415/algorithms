/*
Determine if there is a duplicate number within the array k or fewer spaces
away from that same number.

Input: nums = [1,2,3,1], k = 3
Output: true

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

Easy difficulty leetcode problem Contains Duplicate II
Two solutions provided.
  One quick and dirty solution using built in methods.
  One optimized for speed and runs about 16% faster (~100ms vs ~84-88ms)
*/

// easy to read and understand.  not optimized.
//  faster than 33% of submissions.  less memory than 5% of submission.
const containsDuplicate = (nums, k) => {
  const numsAsObj = {};
  let duplicateBool = false;

  nums.forEach( (num, idx) => {
    if (!numsAsObj[num]) {
      numsAsObj[num] = [idx];
    } else {
      numsAsObj[num].forEach( previousIdx => {
        if (idx - previousIdx <= k) {
          duplicateBool = true;
        }
      });
      numsAsObj[num].push(idx);
    }
  });

  return duplicateBool;
};

// more optimzed for speed.  still with a focus on ease of readability
//  faster than 89% of submissions.  less memory than 10% of submissions
const containsDuplicate2 = (nums, k) => {
  const numsAsObj = {};
  let currentNum,
    previousIdx;

  for (let idx = 0; idx < nums.length; idx++) {
    currentNum = nums[idx];

    if (!numsAsObj[currentNum]) {
      numsAsObj[currentNum] = [idx];
    } else {
      for (let y = 0; y < numsAsObj[currentNum].length; y++) {
        previousIdx = numsAsObj[currentNum][y];

        if (idx - previousIdx <= k) {
          return true;
        }
      }
      numsAsObj[currentNum].push(idx)
    }
  }
  return false;
};
