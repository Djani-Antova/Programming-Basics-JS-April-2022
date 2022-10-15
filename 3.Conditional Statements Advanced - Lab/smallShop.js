function smallShop(input) {
  let product = input[0];
  let town = input[1];
  let quantity = Number(input[2]);
  let totalSum = 0;

  switch (town) {
    case "Sofia":
      if (product === "coffee") {
        totalSum = quantity * 0.5;
      } else if (product === "water") {
        totalSum = quantity * 0.8;
      } else if (product === "beer") {
        totalSum = quantity * 1.2;
      } else if (product === "sweets") {
        totalSum = quantity * 1.45;
      } else if (product === "peanuts") {
        totalSum = quantity * 1.6;
      }
      break;
    case "Plovdiv":
      if (product === "coffee") {
        totalSum = quantity * 0.4;
      } else if (product === "water") {
        totalSum = quantity * 0.7;
      } else if (product === "beer") {
        totalSum = quantity * 1.15;
      } else if (product === "sweets") {
        totalSum = quantity * 1.3;
      } else if (product === "peanuts") {
        totalSum = quantity * 1.5;
      }
      break;
    case "Varna":
      if (product === "coffee") {
        totalSum = quantity * 0.45;
      } else if (product === "water") {
        totalSum = quantity * 0.7;
      } else if (product === "beer") {
        totalSum = quantity * 1.1;
      } else if (product === "sweets") {
        totalSum = quantity * 1.35;
      } else if (product === "peanuts") {
        totalSum = quantity * 1.55;
      }
      break;
  }
  console.log(totalSum);
}
smallShop (["sweets",
"Sofia",
"2.23"])




