/*

codewars kyu 4 problem.

sum two strings as numbers.
input: '15'
input: '24'
output: '39'

input: '9'
input: '1'
output: '10'

input: '003'
input: '006'
output: '9'

input: '111111111111111111111111111111111111111111111111111111111111111111'
input: '111111111111111111111111111111111111111111111111111111111111111111'
output: '2222222222222222222222222222222222222222222222222222222222222222'


If not dealing with large numbers this solution works fine.
  return (Number(a)+Number(b)).toString();

*/

function sumStrings(a,b) {
  const output = [];
  let previous = 0,
    i = 0,
    first,
    second,
    sum;

  while (i < a.length || i < b.length) {
    first = a[a.length - 1 - i] ? Number(a[a.length - 1 - i]) : 0;
    second = b[b.length - 1 - i] ? Number(b[b.length - 1 - i]) : 0;
    sum = first + second + previous;

    if (previous) previous = 0;
    if (sum > 9) {
      sum -= 10;
      previous = 1;
    }
    output.unshift((sum).toString());
    i++;
  }
  if (previous) output.unshift(previous);

  while (output[0] === '0') {
    output.shift();
  }

  return output.join('');

}
