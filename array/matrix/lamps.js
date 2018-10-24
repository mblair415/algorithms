/*
the matrix is n by n in size.

each lamp lights every adjacent square.
each lamp lights all squares on the same row and column
each lamp lghts all squares in all 45 degree diagnal directions
coordinates are [column, row]

each time you check a square you turn off any lamp in that square or in an
adjacent square.
then you check to see if the square is lit or not.
then you turn the lamp(s) back on
then you check the next square, turning off needed lamps first.
coordinates are [column, row]

the output is a list of strings denoting if each checked square is light or dark.

if [4,3] is light, [5,8] is dark, and [19,3] is light
the output is ['light', 'dark', 'light']
*/

function illuminationIdeal(size, lamps, queries) {
  let result = [];

  queries.forEach( query => {
    let current = 'dark';
    
    for (let i = 0; i < lamps.length; i++) {
      let lamp = lamps[i];

      if ((lamp[0] >= query[0] - 1 && lamp[0] <= query[0] + 1) &&
      (lamp[1] >= query[1] - 1 && lamp[1] <= query[1] + 1)) {
        break;
      }
      if (lamp[0] == query[0] || lamp[1] == query[1] ||
      Math.abs(lamp[0] - query[0]) == Math.abs(lamp[1] - query[1])) {
        current = 'light';
      }
    }
    result.push(current);
  });

  return result;
}


function illuminationFirstPass(size, lamps, queries) {
  let result = [];

  queries.forEach( query => {
    let current = 'dark';
    lamps.forEach( lamp => {
      let ne = [query[0] + 2, query[1] + 2];
      let nw = [query[0] - 2, query[1] + 2];
      let se = [query[0] + 2, query[1] - 2];
      let sw = [query[0] - 2, query[1] - 2];

      if (lamp[0] == query[0] && (lamp[1] < query[1]-1 || lamp[1] > query[1]+1)) {
        current = 'light';
      }
      if (lamp[1] == query[1] && (lamp[0] < query[0]-1 || lamp[0] > query[0]+1)) {
        current = 'light';
      }
      while (ne[0] <= size && ne[1] <= size) {
        if (ne[0] == lamp[0] && ne[1] == lamp[1]) {
          current = 'light';
        }
        ne[0] += 1;
        ne[1] += 1;
      }
      while (nw[0] >= 0 && nw[1] <= size) {
        if (nw[0] == lamp[0] && nw[1] == lamp[1]) {
          current = 'light';
        }
        nw[0] -= 1;
        nw[1] += 1;
      }
      while (se[0] <= size && se[1] >= 0) {
        if (se[0] == lamp[0] && se[1] == lamp[1]) {
          current = 'light';
        }
        se[0] += 1;
        se[1] -= 1;
      }
      while (sw[0] >= 0 && sw[1] >= 0) {
        if (sw[0] == lamp[0] && sw[1] == lamp[1]) {
          current = 'light';
        }
        sw[0] -= 1;
        sw[1] -= 1;
      }
    });
    result.push(current);
  });

  return result;
}

let n = 6;
let lampArr = [[2,2], [1,5], [6,4]]
let queryArr = [[2,3], [5,2], [4,6]]
console.log('iterative solution ', illuminationFirstPass(n, lampArr, queryArr))
// expected ['dark','light','light']


// breaking the code into sub functions.
function illuminationSecondPass(size, lamps, queries) {
  let result = [];

  queries.forEach( query => {
    let current = 'dark';
    lamps.forEach( lamp => {
      let ne = [query[0] + 2, query[1] + 2];
      let nw = [query[0] - 2, query[1] + 2];
      let se = [query[0] + 2, query[1] - 2];
      let sw = [query[0] - 2, query[1] - 2];

      function checkCol(lamp, query) {
        if (lamp[0] == query[0] && (lamp[1] < query[1]-1 || lamp[1] > query[1]+1)) {
          current = 'light';
        }
      }

      function checkRow(lamp, query) {
        if (lamp[1] == query[1] && (lamp[0] < query[0]-1 || lamp[0] > query[0]+1)) {
          current = 'light';
        }
      }

      function checkNE(lamp, query) {
        if (query[0] > size || query[1] > size) {
          return;
        }
        if (query[0] == lamp[0] && query[1] == lamp[1]) {
          current = 'light';
          return;
        }
        checkNE(lamp, [query[0] + 1, query[1] + 1])
      }

      function checkNW(lamp, query) {
        if (query[0] < 0 || query[1] > size) {
          return;
        }
        if (query[0] == lamp[0] && query[1] == lamp[1]) {
          current = 'light';
          return;
        }
        checkNW(lamp, [query[0] - 1, query[1] + 1]);
      }

      function checkSE(lamp, query) {
        if (query[0] > size || query[1] < 0) {
          return;
        }
        if (query[0] == lamp[0] && query[1] == lamp[1]) {
          current = 'light';
          return;
        }
        checkSE(lamp, [query[0] + 1, query[1] - 1]);
      }

      function checkSW(lamp, query) {
        if (query[0] < 0 || query[1] < 0) {
          return;
        }
        if (query[0] == lamp[0] && query[1] == lamp[1]) {
          current = 'light';
          return;
        }
        checkSW(lamp, [query[0] - 1, query[1] - 1])
      }

      checkCol(lamp, query);
      if (current == 'dark') {
        checkRow(lamp, query);
      }
      if (current == 'dark') {
        checkNE(lamp, ne);
      }
      if (current == 'dark') {
        checkNW(lamp, nw);
      }
      if (current == 'dark') {
        checkSW(lamp, sw);
      }
      if (current == 'dark') {
        checkSE(lamp, se);
      }
    });
    result.push(current);
  });

  return result;
}

console.log('recursive soluition ', illuminationSecondPass(n, lampArr, queryArr))
// expected ['dark', 'light', 'light]
