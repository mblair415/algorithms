/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.




Runtime: 48 ms, faster than 98.00% of JavaScript online submissions for Jump Game.
Memory Usage: 35.8 MB, less than 20.00% of JavaScript online submissions for Jump Game.


can use a tabulation approach (or memoization, or simple recursion).

idx      0 1 2 3 4
        [3,0,2,0,4]
           *
         t,f,t,f,t

if arr.length === 0 return false
if arr.length === 1 return true
last element becomes true
step = 1
i = arr.length - 2
while i >= 0
    if arr[i] >= step
        arr[i] = true
        steps = 1
    else
        arr[i] = false
        step++
    i--
return arr[0]
*/

const canJump = nums => {
    if (nums.length === 0) return false;
    if (nums.length === 1) return true;

    let step = 1,
        i = nums.length - 2;

    while (i >= 0) {
        if (nums[i] >= step) {
            nums[i] = true;
            step = 1;
        } else {
            nums[i] = false;
            step++;
        }
        i--;
    }
    return nums[0];
};
