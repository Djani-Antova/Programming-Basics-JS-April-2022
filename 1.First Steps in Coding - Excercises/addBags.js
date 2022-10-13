function addBags(input) {
  let price = Number(input[0]);
  let kilo = Number(input[1]);
  let daysLeft = Number(input[2]);
  let numBags = Number(input[3]);

  let feeAddKilo = 0.0;
  let feeAddDays = 0.0;

  if (kilo < 10) {
    feeAddKilo = price * 0.2;
  } else if (kilo > 20) {
    feeAddKilo = price;
  } else {
    feeAddKilo = price * 0.5;
  }
  if (daysLeft > 30) {
    feeAddDays = feeAddKilo * 0.1;
  } else if (daysLeft < 7) {
    feeAddDays = feeAddKilo * 0.4;
  } else {
    feeAddDays = feeAddKilo * 0.15;
  }
  totalFee = (feeAddDays + feeAddKilo) * numBags;

  console.log(`The total price of bags is: ${totalFee.toFixed(2)} lv.`);
}
addBags(["63.80",
"23",
"3",
"1"]);
