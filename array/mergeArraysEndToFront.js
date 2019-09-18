/*
Merge the final two elements from one array to the front of another array.

Two options are presented.
*/

const originalArrayLong = [2,4,6,8,10,12];
const originalArrayShort = [12];
const originalArrayEmpty = [];
const newArray1 = [1,2,3];
const newArray2 = [1,2,3];
const newArray3 = [1,2,3];

const option1 = (oldArr, newArr) => {
  if (!oldArr.length) return newArr;

  if (oldArr.length >= 2) {
    newArr.unshift(...oldArr.slice(oldArr.length-2));
  } else {
    newArr.unshift(...oldArr.slice(0));
  }
  return newArr;
};

console.log(option1(originalArrayLong, newArray1)); // [10,12,1,2,3]
console.log(option1(originalArrayShort, newArray2)); // [12,1,2,3]
console.log(option1(originalArrayEmpty, newArray3)); // [1,2,3]


const originalArrayLong2 = [2,4,6,8,10,12];
const originalArrayShort2 = [12];
const originalArrayEmpty2 = [];
let newerArray1 = [1,2,3];
let newerArray2 = [1,2,3];
let newerArray3 = [1,2,3];

const option2 = (oldArr, newArr) => {
  return oldArr.slice(oldArr.length-2).concat(newArr);
};

newerArray1 = option2(originalArrayLong2, newerArray1);
newerArray2 = option2(originalArrayShort2, newerArray2);
newerArray3 = option2(originalArrayEmpty, newerArray3);

console.log({newerArray1});  // [10,12,1,2,3]
console.log({newerArray2});  // 12,1,2,3]
console.log({newerArray3});  // [1,2,3]
