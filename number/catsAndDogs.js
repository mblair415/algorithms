/*
a simple level 7 kata from codewars

Kata Task
I have a cat and a dog which I got as kitten / puppy.

I forget when that was, but I do know their current ages as catYears and dogYears.

Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

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


pseudo code:
  if years < 1 return 0
  if years < 16 return 1
  if years < 25 return 2
  else 2 + (years - 24) / filler
*/

const ownedCatAndDog = (catYears, dogYears) => {
  if (!catYears && !dogYears) return [0,0];

  let catFinal;
  let dogFinal;

  if (catYears < 15) {
    catFinal = 0;
  } else if (catYears < 24) {
    catFinal = 1;
  } else if (catYears < 28) {
    catFinal = 2;
  } else {
    catFinal = 2 + Math.floor((catYears - 24) / 4);
  }

  if (dogYears < 15) {
    dogFinal = 0;
  } else if (dogYears < 24) {
    dogFinal = 1;
  } else if (dogYears < 29) {
    dogFinal = 2;
  } else {
    dogFinal = 2 + Math.floor((dogYears - 24) / 5);
  }

  return [catFinal, dogFinal];
};

console.log(ownedCatAndDog(56,64));
