function shopping(input) {
  let budget = Number(input[0]);
  let numVideo = Number(input[1]);
  let numProcess = Number(input[2]);
  let numRam = Number(input[3]);

  let costVideo = numVideo * 250;
  let priceProcess = costVideo * 0.35;
  let costRam = costVideo * 0.1 * numRam;

  let neededBudget = costVideo + numProcess * priceProcess + costRam;

  if (numVideo > numProcess) {
    neededBudget = neededBudget * 0.85;
  }

  let diff = Math.abs(neededBudget - budget).toFixed(2);


  if (neededBudget <= budget) {
    console.log(`You have ${diff} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${diff} leva more!`
    );
  }
}
shopping(["900",
"2",
"1",
"3"])


