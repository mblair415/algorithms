/*
4th kyu codewars problem

In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']


*/

const permutations = string => {
  let permutationHelper;
  const result = [];
  const letterCount = {};

  for (let i = 0; i < string.length; i++) {
    letterCount[string[i]] ? letterCount[string[i]]++ : letterCount[string[i]] = 1;
  }

  permutationHelper = (obj, str) => {
    for (let key in obj) {
      if (obj[key]) {
        let newObj = {};
        let newStr = str+key;

        if (newStr.length == string.length) {
          result.push(newStr);
          return;
        }

        for (let updatedKey in obj) {
          if (key === updatedKey) {
            newObj[updatedKey] = obj[key] - 1;
          } else {
            newObj[updatedKey] = obj[updatedKey];
          }
        }
        permutationHelper(newObj, newStr);
      }
    }
    return;
  };

  permutationHelper(letterCount, '');
  return result;
};

console.log(permutations('aabbb'));
