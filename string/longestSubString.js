/*
Input: {String}
Output: {Integer}
```
# Example
```
Input: “abcabcbb” => Output: 3
Input: “bbbbb” => Output: 1
Input: “pwwkew” => Output: 3
```
# Constraints
```
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)

97.34% faster than other answers on leetcode.
*/

function longestSubString(str) {
  if (str.length == 1) return 1;

  let a = 0,
    b = 1,
    cur = str[0],
    curMax = 1;

  while (b < str.length) {
    if (!cur.includes(str[b])) {
      cur += str[b];
      curMax = Math.max(curMax, cur.length);
    } else {
      a += cur.indexOf(str[b]) + 1;
      cur = str.slice(a,b + 1);
    }
    b++;
  }

  return curMax;
}

// console.log(longestSubString('abcabcbb'));
console.log(longestSubString('pwwkew'));
