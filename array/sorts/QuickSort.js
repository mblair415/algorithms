/*
Quick Sort In Place
     w
             p
    [4,7,8,1,5]
     i

pseudo code for recursive loop:
if length < 2
  return arr

wall is 0
pivot is end of array
loop over array. i
  if arr[i] < arr[pivot]
    swap arr[i] and arr[w]
    w++
  i++
swap arr[w] and arr[pivot]
*/

const arrTest1 = [4,7,8,1,5];
const arrTest2 = [10,9,8,7,6,5,4,3,2,1];
const arrTest3 = [4,5,6,7,8,9,10];

function quickSort(arr) {

  function quickHelper(start, end) {
    if (end - start < 1) return;

    let wall = start,
    i = start,
    pivot = end;

    while (i <= end) {
      if (arr[i] < arr[pivot]) {
        if (i != wall) {
          [arr[i], arr[wall]] = [arr[wall], arr[i]];
        }
        wall++;
      }
      i++
    }
    [arr[wall], arr[pivot]] = [arr[pivot], arr[wall]];

    quickHelper(start, wall - 1);
    quickHelper(wall + 1, end);
  }

  quickHelper(0, arr.length - 1);
  return arr;
}

console.log(quickSort(arrTest1));
console.log(quickSort(arrTest2));
console.log(quickSort(arrTest3));
