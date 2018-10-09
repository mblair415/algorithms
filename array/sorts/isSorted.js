/*
Checking to see if an array is sorted.
*/

// const ascendingArr = [1,2,3,4];
// const descendingArr = [4,3,2,1];
// const unsortedArr = [1,2,3,1]

function isThisSorted(arr) {
  let sorted = true;
  let start = 0;
  let end = arr.length -1;

  while(start < end) {
    if (arr[start] > arr[start+1] && arr[end] > arr[end - 1]) {
      sorted = false;
      break;
    }
    if (arr[start] < arr[start+1] && arr[end] < arr[end - 1]) {
      sorted = false;
      break;
    }
    start++;
    end--;
  }
  return sorted;
}

// console.log('ascending test ', isThisSorted(ascendingArr))
// console.log('descending test ', isThisSorted(descendingArr))
// console.log('unsortedTest ', isThisSorted(unsortedArr))



// a much more basic approach to solve the same problem
function ascendingTest(arr) { // returns true if input is in ascending order
  let sortedStatus = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      sortedStatus = false;
      break;
    }
  }
  return sortedStatus;
}

function descendingTest(arr) { // returns true if input is in descending order
  let sortedStatus = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      sortedStatus = false;
      break;
    }
  }
  return sortedStatus;
}

function isUnsortedTest(arr) {
  if (ascendingTest(arr) || descendingTest(arr)) {
    return false;
  }
  return true;
}
