function agencyProfit(input) {
  let company = input[0];
  let numAdults = Number(input[1]);
  let numKids = Number(input[2]);
  let priceAdults = Number(input[3]);
  let serviceFee = Number(input[4]);

  let priceKids = priceAdults * 0.3;
  let sale = numAdults*(priceAdults + serviceFee) + numKids*(priceKids + serviceFee);
  let profit = sale * 0.20;

  console.log(`The profit of your agency from ${company} tickets is ${profit.toFixed(2)} lv.`);
}

agencyProfit(["Ryanair",
    "60",
    "23",
    "158.96",
    "39.12"
    ]);
