/*
When using 6 sided dice, determing the odds of ariving at a given sum provided you have a given number of dice.

ex:
  input: 11
  input: 2

output: 1/18

There are 36 permutations of results when rolling 2D6.  Of those, two are the target number 11.
2/36 == 1/18 == 0.0555
*/

const rolldiceSumProb(target, numDice) => {
  let numWays = 0;

  const rollDice = (currTotal, diceLeft) => {
    if (!diceLeft) {
      if (currTotal === target) {
        numWays++;
      }
      return;
    }

    for (let i = 1; i <= 6; i++) {
      rollDice(currTotal + i, diceLeft - 1);
    }
  };

  rollDice(0, numDice);

  return numWays / 6**numDice;
};
