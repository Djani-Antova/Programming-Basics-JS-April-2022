function fishing(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishingMen = Number(input[2]);

  let rentBoat = 0;

  // "Spring", "Summer", "Autumn", "Winter"

  if (season === "Spring") {
    rentBoat = 3000;
  } else if (season === "Summer" || season === "Autumn") {
    rentBoat = 4200;
  } else if (season === "Winter") {
    rentBoat = 2600;
  }

  if (fishingMen <= 6) {
    rentBoat = rentBoat * 0.9;
  } else if (fishingMen <= 11) {
    rentBoat = rentBoat * 0.85;
  } else {
    rentBoat = rentBoat * 0.75;
  }

  if (fishingMen % 2 == 0 && season !== "Autumn") {
    rentBoat = rentBoat * 0.95;
  }

  let diff = Math.abs(rentBoat - budget);

  if (budget >= rentBoat) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}
fishing(["3000",
"Summer",
"11"])

