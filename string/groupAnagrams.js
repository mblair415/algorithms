/*
Input is an array of strings.

Output an array of arrays where each inner array is every word which
is an anagram of the other words within the array.

input: words = ["eat", "tea", "tan", "bat", "ate", "tab", "ant", "tan", "and"]

output: [["ate", "eat", "tea"],["tan", "nat", "ant"],["bat", "tab"],["and"]]

*/


function groupAnagrams(words) {
  let resultArr = [];
  let resultObj = {};
  let current;

  words.forEach( word => {
    current = word.split('').sort().join(',');

    if (resultObj[current]) {
      resultObj[current].push(word);
    } else {
      resultObj[current] = [word];
    }
  });

  for (let key in resultObj) {
    resultArr.push(resultObj[key]);
  }

  return resultArr;
}
