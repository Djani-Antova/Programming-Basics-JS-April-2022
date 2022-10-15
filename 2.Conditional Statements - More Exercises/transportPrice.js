function transportPrice(input) {
  let km = Number(input[0]);
  let shift = input[1];

  let taxiStartinTax = 0.7;
  let taxiDayTariff = 0.79;
  let taxiNightTariff = 0.9;

  let busTarriff = 0.09;
  let trainTariff = 0.06;
  let priceForTransport = 0;

  if (km >= 100) {
    priceForTransport = km * trainTariff;
  } else if (km >= 20) {
    priceForTransport = km * busTarriff;
  } else {
        if (shift === "day") {
      priceForTransport = km * taxiDayTariff + taxiStartinTax;
        } else {
      priceForTransport = km * taxiNightTariff + taxiStartinTax;
        }
  }
  console.log(priceForTransport.toFixed(2));
}

transportPrice(["180", "night"]);
