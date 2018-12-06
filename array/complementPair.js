function complementPairSetSolution(arr) {
  const result = [];
  const includedElements = new Set();

  arr.forEach( ele => {
    let opposite = -(ele);

    if (!includedElements.has(ele)) {
      includedElements.add(ele);
    }
    if (includedElements.has(opposite)) {
      result.push(Math.abs(ele));
    }
  });

  return result;
}

function complementPairQuadraticSolution(arr) {
  let result = [];

  arr.forEach( ele => {
    let opposite = -(ele);

    if (arr.indexOf(opposite) > -1 && result.indexOf(Math.abs(ele)) == -1) {
      result.push(Math.abs(ele));
    }
  });

  return result;
}
