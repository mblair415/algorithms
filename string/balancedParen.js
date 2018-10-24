/*
Input is a number.

Return each valid parenthesis result using a number of open/close pairs equal
to the input.

input: 2
output: ['(())', '()()']

input: 3
output: [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
*/


function balancedParens(num) {
  const result = [];

  function permutationHelper(str, open, close) {
    if (close < open || open < 0 || close < 0) {
      return;
    }
    if (open == 0 && close == 0) {
      result.push(str);
    }
    permutationHelper(str+'(', open - 1, close);
    permutationHelper(str+')', open, close - 1);
  }

  permutationHelper('', num, num);
  return result;
}
