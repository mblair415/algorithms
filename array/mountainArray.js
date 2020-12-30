/*
Easy difficulty leetcode problem.

Recall that arr is a mountain array if and only if:

* arr.length >= 3
* There exists some i with 0 < i < arr.length - 1 such that:
  * arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
  * arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

  [0,2,3,4,5,2,1,0] ==> true
  [1,2,3,3,5,2,1,0] ==> false

results:
Runtime: 76 ms, faster than 94.74% of JavaScript online submissions for Valid Mountain Array.
Memory Usage: 41.8 MB, less than 28.76% of JavaScript online submissions for Valid Mountain Array.
*/


const validMountainArray = arr => {
  if (arr.length < 3 ||
    arr[arr.length - 2] < arr[arr.length - 1] ||
    arr[0] > arr[1]
  ) {
    return false;
  }

  let increasing = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
    
    if (increasing) {
      if (arr[i] > arr[i + 1]) {
        increasing = false;
      }
    } else {
      if (arr[i] < arr[i + 1]) {
        return false;
      }
    }
  }

  return true;
};
