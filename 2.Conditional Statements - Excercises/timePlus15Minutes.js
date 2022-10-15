function timePlus15Minutes(input) {
  let hourInitial = Number(input[0]);
  let minInitial = Number(input[1]);

  let minNow = minInitial + 15;
  realMinNow = minNow % 60;
  realHourNow = Math.floor(minNow / 60) + hourInitial;

  if (realHourNow >= 24) {
    realHourNow = 0;
  }

  if (realMinNow < 10) {
    realMinNow = "0" + realMinNow;
  }

  console.log(`${realHourNow}:${realMinNow}`);
}

timePlus15Minutes(["12", "49"]);
