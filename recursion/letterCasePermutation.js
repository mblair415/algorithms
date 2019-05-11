/*
From Leetcode.

Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]
Note:

S will be a string with length between 1 and 12.
S will consist only of letters or digits.



Runtime: 72 ms, faster than 98.61% of JavaScript online submissions for Letter Case Permutation.

Memory Usage: 37.8 MB, less than 65.22% of JavaScript online submissions for Letter Case Permutation.





*/

const letterCasePermutation = (S) => {
    const output = [];

    const permutationHelper = (str, idx) => {
        if (idx == S.length) {
            output.push(str);
            return;
        }
        if (Number(S[idx]) == S[idx]) {
            permutationHelper(str+S[idx], idx+1);
        } else {
            permutationHelper(str+S[idx].toLowerCase(), idx+1);
            permutationHelper(str+S[idx].toUpperCase(), idx+1);
        }
    };

    permutationHelper('',0);
    return output;
};
