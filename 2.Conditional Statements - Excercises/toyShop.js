function toyShop(input) {
  let tripPrice = Number(input[0]);
  let numPuzzle = Number(input[1]);
  let numDoll = Number(input[2]);
  let numTeddy = Number(input[3]);
  let numminion = Number(input[4]);
  let numTruck = Number(input[5]);

  let puzzlePrice = 2.6;
  let dollPrice = 3;
  let teddyPrice = 4.1;
  let minionPrice = 8.2;
  let truckPrice = 2;

  let sell =
    numPuzzle * puzzlePrice +
    numDoll * dollPrice +
    numTeddy * teddyPrice +
    numminion * minionPrice +
    numTruck * truckPrice;

  let numTotal = numPuzzle + numDoll + numTeddy + numminion + numTruck;

  if (numTotal >= 50) {
    sell = sell * 0.75;
  }

  let revenue = sell * 0.9;
  let diff = Math.abs(tripPrice - revenue);

  if (revenue >= tripPrice) {
    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
  }else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
  }
  
}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

