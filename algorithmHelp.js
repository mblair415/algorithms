/*
The most important fundamentals to test are:
  if statements
  object manipulation
  array manipulation
  string manipulation

Ideally we can find problems that require two of these,
  then we can pair these problems in complementary pairs.
  ie:
  problem 1: array manipulation and if statements
  problem 2: string manipulation and object manipulation
*/


// ******** If statement problems ****************

/*
count from 1 to num.  if iterator is evenly divisible by a instead of the iterator
insert 'fizz'. if iterator is evenly divisible by b instead of the iterator
insert 'buzz'.  if the iterator is evenly divisible by BOTH a and b instead of
the iterator insert 'fizzbuzz'.

ex:
input: 15, 3, 5
output: [1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,
'fizzbuzz',16,17,'fizz',19,'buzz']
*/
function fizzbuzzKing(num, a, b){
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % a == 0 && i % b != 0) {
      result.push('fizz');
    } else if (i % b == 0 && i % a != 0) {
      result.push('buzz');
    } else if (i % a == 0 && i % b == 0) {
      result.push('fizzbuzz');
    } else {
      result.push(i);
    }
  }
  return result;
}

/*
sort the input into arrays.
if a string has a single vowel put it into one array.
if a string has two vowels put it into a separate array.
if the string has the letter 'e' and any number of other vowels place it into
a separate array and only into that separate array.
no word should be included in more than one sub array.
return each sorted array inside of an array.

ex:
input: 'bat bait blade build bank bet bale blink bash bonkers boss'
output: [
  ['bat', 'bank', 'blink', 'bash', 'boss'],
  ['bait', 'build'],
  ['blade','bet', 'bale', 'bonkers']
]
*/


function sortByVowel(string) {
  let separate = string.split(' ');
  let result = [[],[],[]];

  separate.forEach( word => {
    let vowelTotal = 0;
    let vowels = {
      a : 0,
      e : 0,
      i : 0,
      o : 0,
      u : 0
    }
    word.split('').forEach( letter => {
      if (vowels[letter] != undefined) {
        vowels[letter]++;
      }
    });
    if (vowels.e > 0) {
      result[2].push(word);
    } else {
      for (let key in vowels) {
        vowelTotal += vowels[key];
      }
    }
    if (vowelTotal == 1) {
      result[0].push(word);
    } else {
      result[1].push(word);
    }
  });

  return result;
}

/*
a prime number is a number greater than 1 that cannot be divided by any number
other than 1 and itself.  for example 2 is a prime number.  5 is another prime
number. 4 can be divided by 2 so it isn't prime.  15 can be divided by 3 or 5
so it also isn't prime.  17 cannot be divided by anything but 1 or 17 so it is
prime.

find the nth prime number.

ex:
input: 5
output: 11
*/

function nthPrime(num) {
  let counter = 0;
  function isPrime(n){
    for(let j = 2; j < n; j++) {
      if (n % j == 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; counter <= num; i++) {
    if (isPrime(i)) {
      counter++;
      if (counter == num) {
        return i;
      }
    }
  }

}

// ******** object manipulation problems ****************

/*  can be done without an object
return the most frequent element in a string stating how many times it occured

ex:
input: [1,3,7,1,3,7,1,3,1]
output: '1 occurs 4 times'
*/

function mostFrequent(array){
  let result = {};
  let maxCount = 0;
  let maxNum;
  array.forEach(num => {
    if (result[num]) {
      result[num]++;
    } else {
      result[num] = 1;
    }
  })
  for (let key in result) {
    if (result[key] > maxCount) {
      maxCount = result[key];
      maxNum = key;
    }
  }
  return `${maxNum} occurs ${result[maxNum]} times`;
}



/*
you're given an array of objects and you need to find a person that meets
certain metric criteria. return the names of each person who meets the criteria
in an array.

return people over the age of 18 who like Java

ex:
input: [
  {
    name: 'cindy', age: 16, likes: 'java, puppies, captain america'
  }, {
    name: 'marissa', age: 25, likes: 'javascript, kittens, thor'
  }, {
    name: 'carlos', age: 20, likes: 'java, turtles, groot'
  }, {
    name: 'ivan', age: 19, likes: 'ruby, rabbits, peter'
  }
]
output:
['carlos']
*/

function javaSearch(array){
  let result = [];

  array.forEach( person => {
    if (person.age >= 18) {
      person.likes.split(', ').forEach( like => {
        if (like == 'java') {
          result.push(person.name);
        }
      })
    }
  });

  return result;
}



// ******** array manipulation problems ****************

/*
given a number return a matrix number by number in size.
each element within the sub arrays should be an even number counting from 2
and iterating across each array.
a matrix is an array of arrays, for example: [[1],[2],[3]]

input: 2
output: [[2,4],[6,8]]
*/

function evenNumberMatrix(num){
  let result = [];
  let currentEven = 2;

  for (let i = 0; i < num; i++) {
    let currentArray = [];
    while (currentArray.length < num) {
      currentArray.push(currentEven);
      currentEven += 2;
    }
    result.push(currentArray);
  }
  return result;
}

/*
given a matrix of elements of numbers.  return each even element at an odd index.

input: [10,11,12,14,18,15,21,8]
output: [14,8]
*/

function evenElementAtOddIndex(array){
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 != 0 && array[i] % 2 == 0) {
      result.push(array[i])
    }
  }

  return result;
}


// ******** string manipulation problems ****************


/*
in pig latin any word that starts with a vowel gets 'yay' added as a suffix.
any word that starts with one or more consonants has all consonant before
the first vowel removed from the front of the word and added to the end
then 'ay' is added as a suffix.

turn a sentence into pig latin.  assume no capitals and no punctuation.

ex:
input: 'apple'
output: 'appleyay'

input: 'trap'
output: 'aptray'

input: 'my'
output: 'ymay'
*/

function pigLatin(string){
  let result = [];

  function convert(str) {
    let vowels = 'aeiouy';
    if (vowels.indexOf(str[0]) > -1) {
      return str+'yay';
    }
    for (let i = 0; i < str.length; i++) {
      let vowelLocation = vowels.indexOf(str[i]);
      if (vowelLocation > -1) {
        return str.slice(i)+str.slice(0,i)+'ay';
      }
    }
  }
  string.split(' ').forEach( word => result.push(convert(word)));

  return result;
}
