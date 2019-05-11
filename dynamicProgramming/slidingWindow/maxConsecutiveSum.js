/*

Given an array of integers, locate the max consecutive sum.

Input: [6, -1, 3, 5, -10]
Output: 13
6 + -1 + 3 + 5 == 13


                            a
     [6, -1, 3, 5, -10,-6, 15]
                            b

     current = 15
     max = 13


  curTotal = arr[0]
  maxTotal = arr[0]
  aPoint = 0
  bPoint = 0

  while (arr[bPoint + 1])
   if curTotal + arr[bPoint + 1] > 0
     bPoint++
     curTotal+= arr[bPoint]
   else
     bPoint++
     aPoint = bPoint
     curTotal = arr[aPoint]
   maxTotal = Math.max(curTotal, maxTotal)
*/

function maxConsecutiveSum(arr) {
  if (arr.length == 1) return arr[0];

  let maxTotal = arr[0];
  let currentTotal = arr[0];
  let aPointer = 0;
  let bPointer = 0;

  while (arr[bPointer + 1]) {
    if (currentTotal + arr[bPointer + 1] > 0) {
      bPointer++;
      currentTotal += arr[bPointer];
    } else {
      bPointer++;
      aPointer = bPointer;
      currentTotal = arr[aPointer];
    }
    maxTotal = Math.max(currentTotal, maxTotal);
  }
  return maxTotal;
}
