/*
Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since
             the decimal part is truncated, 2 is returned.



 Runtime: 68 ms, faster than 86.71% of JavaScript online submissions for Sqrt(x).
 Memory Usage: 35.5 MB, less than 94.44% of JavaScript online submissions for Sqrt(x).

 I would have liked to have used a more clever solution, but this is very simple
 and it appears to be very much above average in space/time usage.
*/

const sqrt = num => {
  return Math.floor(Math.sqrt(num));
};
