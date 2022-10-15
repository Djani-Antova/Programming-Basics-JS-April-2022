function tradeCommissions(input) {
  let town = input[0];
  let sales = input[1];
  let comission = 0;

  switch (town) {
    case "Sofia":
      if (sales >= 0 && sales <= 500) {
        comission = sales * 0.05;
      } else if (sales > 500 && sales <= 1000) {
        comission = sales * 0.07;
      } else if (sales > 1000 && sales <= 10000) {
        comission = sales * 0.08;
      } else if (sales > 10000) {
        comission = sales * 0.12;
      }
      break;
    case "Varna":
      if (sales >= 0 && sales <= 500) {
        comission = sales * 0.045;
      } else if (sales > 500 && sales <= 1000) {
        comission = sales * 0.075;
      } else if (sales > 1000 && sales <= 10000) {
        comission = sales * 0.1;
      } else if (sales > 10000) {
        comission = sales * 0.13;
      }
      break;
    case "Plovdiv":
      if (sales >= 0 && sales <= 500) {
        comission = sales * 0.055;
      } else if (sales > 500 && sales <= 1000) {
        comission = sales * 0.08;
      } else if (sales > 1000 && sales <= 10000) {
        comission = sales * 0.12;
      } else if (sales > 10000) {
        comission = sales * 0.145;
      }
      break;
  }
  if (town != "Sofia" && town != "Varna" && town != "Plovdiv") {
    console.log("error");
  } else if (sales < 0) {
    console.log("error");
  } else {
    console.log(comission.toFixed(2));
  }
}
tradeCommissions(["Kaspichan", "-50"]);
