function oscar(input) {
  let index = 0;
  let name = input[index];
  index++;
  let points = Number(input[index]);
  index++;
  let count = Number(input[index]);
  index++;
  let isNominee = false;

  for (let i = 0; i < count; i++) {
    let currentName = input[index];
    index++;
    let tempPoint = Number(input[index]);
    index++;

    let res = (currentName.length * tempPoint) / 2;
    points += res;

    if (points > 1250.5) {
      isNominee = true;
      console.log(
        `Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`
      );
      break;
    }
  }
  if (!isNominee) {
    let diff = Math.abs(points - 1250.5);
    console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
  }
  
} oscar([
    "Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33",
  ]);
