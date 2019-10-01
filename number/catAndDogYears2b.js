/*
easy level 7 kyu codewars problem

Kata Task
I have a cat and a dog which I got as kitten / puppy.

I forget how old they are, but I do remember how many ears ago I got them.

Find the age of each of my pets and return as a list [catAge, dogAge]

NOTES:

Results are truncated whole numbers of "human" years
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

diagram:
  dogYears = 2
  catYears = 5

  dogCounter = 2
  catCounter = 5

  dogFinal = 24
  catFinal = 36


pseudo:
  HANDLE BOTH INPUT AS 0
  if no dogYears and no catYears
    return [0,0]

  dogFinal = 24
  catFinal = 36
  dogCounter = 2
  catCounter = 5

  HANDLE 0 ON INDIVIDUAL INPUT
  if no dogYears
    dogFinal = 0
  if no catYears
    catFinal = 0

  while dogCounter < dogYears
    dogCounter++
    if dogCounter === 1
      dogFinal += 15
    else if dogCounter === 2
      dogFinal += 9
    else
      dogfinal += 5

  while (catCounter < catYears)
    SAME LOGIC AS DOG (except 'else catFinal += 4')



OTHER SOLUTION PATH
  make array of size equal to the years.  fill each element with the filler number (cat == 4 dog == 5)
  change element at index 0 to be 15
  change element at index 1 to be 9

  sum the array



OTHER OTHER SOLUTION PATH
  if pets could live a long time this would be much faster and takes up much else space than the other solutions
  this solution path is basically a handful of constant operations
  worst case scenario with a slower solution is looping to about 20 and doing some constant time operations


  if cat/dogYears is 0 final is 0
  if cat/dogYears is 1 final is 15
  if cat/dogYears is 2 final is 24
  else
  cat/dogYears - 2 * filler number (cat == 4, dog == 5) + 24
*/

const catsAndDogs1 = (catYears, dogYears) => {
  if (!catYears && !dogYears) return [0,0];

  let catFinal = 0,
    dogFinal = 0,
    catCounter = 0,
    dogCounter = 0;
  if (catYears === 0) catFinal = 0;
  if (dogYears === 0) dogFinal = 0;

  while (catCounter < catYears) {
    catCounter++;
    if (catCounter === 1) {
      catFinal += 15;
    } else if (catCounter === 2) {
      catFinal += 9;
    } else {
      catFinal += 4;
    }
  }

  while (dogCounter < dogYears) {
    dogCounter++;
    if (dogCounter === 1) {
      dogFinal += 15;
    } else if (dogCounter === 2) {
      dogFinal += 9;
    } else {
      dogFinal += 5;
    }
  }
  return [catFinal,dogFinal];
};

// console.log(catsAndDogs1(10,10));

const catsAndDogs2 = (catYears, dogYears) => {
  const catArr = new Array(catYears).fill(4);
  const dogArr = new Array(dogYears).fill(5);

  if (catArr.length > 0) catArr[0] = 15;
  if (catArr.length > 1) catArr[1] = 9;
  if (dogArr.length > 0) dogArr[0] = 15;
  if (dogArr.length > 1) dogArr[1] = 9;

  return [
    catArr.reduce( (acc, curr) => acc + curr),
    dogArr.reduce( (acc, curr) => acc + curr)
  ];
};

// console.log(catsAndDogs2(10,10));

const catsAndDogs3 = (catYears, dogYears) => {
  if (!catYears && !dogYears) return [0,0];

  let catFinal = 0;
  let dogFinal = 0;

  if (catYears === 1) catFinal = 15;
  if (catYears === 2) catFinal = 24;
  if (dogYears === 1) dogFinal = 15;
  if (dogYears === 2) dogFinal = 24;

  if (!catFinal && catYears) {
    catFinal = (catYears - 2) * 4 + 24;
  }
  if (!dogFinal && dogYears) {
    dogFinal = (dogYears - 2) * 5 + 24;
  }

  return [catFinal, dogFinal];
};

// console.log(catsAndDogs3(0,13))
