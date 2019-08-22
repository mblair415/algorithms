/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step


Pure recursion:
  will not finish all of the tests because it times out. Stops on leetcode test 21.
Tabulation approach:
  Runtime: 48 ms, faster than 88.50% of JavaScript online submissions for Climbing Stairs.
  Memory Usage: 33.7 MB, less than 92.00% of JavaScript online submissions for Climbing Stairs.
Memoization approach:
  will not finish all of the tests because it times out.  Stops on leetcode test 21.

*/

const stairPureRecursion = n => {
  let counter = 0;

  const stairHelper = currentStair => {
    if (currentStair > n) return;
    if (currentStair === n) {
      counter++;
      return;
    }
    stairHelper(currentStair + 1);
    stairHelper(currentStair + 2);
  };

  stairHelper(0);
  return counter;
};

const stairTabulation = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  const build = [0,1,2];

  while (build.length < n + 1) {
    build.push(build[build.length - 1] + build[build.length - 2]);
  }

  return build[build.length - 1];
};

const stairMemozation = n => {
  const cache = {
    0 : 0,
    1 : 1,
    2 : 2
  };

  const stairHelper = currentStair => {
    if (cache[currentStair] || currentStair === 0) {
      return cache[currentStair];
    }
    return stairHelper(currentStair - 1) + stairHelper(currentStair - 2);
  }

  return stairHelper(n)
};
