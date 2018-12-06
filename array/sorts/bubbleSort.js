/*

bubble sort
   * *          4 < 7 so iterate forward.
  [4,7,8,1,5]
     * *        7 < 8 so iterate forward.
  [4,7,8,1,5]
        * *     8 > 1 so swap
  [4,7,8,1,5]   =>  [4,7,1,8,5]
         * *    8 > 5 so swap
  [4,7,1,8,5]   => [4,7,1,5,8]

  [4,7,1,5,8] This is one iteration through the array.
Each full iteration guarantees the next highest element is in the correct position.



loop through input. use counter = arr.length - 1.
  loop through input. i
    if arr[i] > arr[i + 1]
      swap
counter--


run this on a decreasing number of times.
each time it runs it can run on a smaller and smaller section of input.
After each run the last element is in correct place and doesn't need to be considered futher
then the element before last ....
*/

const arrTest1 = [4,7,8,1,5];
const arrTest2 = [10,9,8,7,6,5,4,3,2,1];
const arrTest3 = [4,5,6,7,8,9,10];

function bubbleSort(arr) {
  let y = arr.length - 1;

  while (y > 0) {
    for (let i = 0; i < y; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    y--;
  }
  return arr;
}

console.log(bubbleSort(arrTest1));
console.log(bubbleSort(arrTest2));
console.log(bubbleSort(arrTest3));
