function cinema(input) {
  let type = input[0];
  let row = Number(input[1]);
  let clolumn = Number(input[2]);

  let income = 0;
  // •	Premiere •	Normal •	Discount
  switch (type) {
    case "Premiere":
      income = row * clolumn * 12;
      break;

    case "Normal":
      income = row * clolumn * 7.5;
      break;
    case "Discount":
      income = row * clolumn * 5;
      break;
  }
  console.log(`${income.toFixed(2)} leva`);
}
cinema(["Discount", "12", "30"]);
