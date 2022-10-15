function fuelTankPart2(input) {
  let typeFuel = input[0];
  let litresFuel = Number(input[1]);
  let posessionCard = input[2];

  let gasolinePrice = 2.22;
  let dieselPrice = 2.33;
  let gasPrice = 0.93;
  let fuelPurchase = 0.0;

  if (input[0] === "Gas") {
    if (posessionCard === "Yes") {
      fuelPurchase = litresFuel * (gasPrice - 0.08);
    } else {
      fuelPurchase = litresFuel * gasPrice;
    }
    if (litresFuel>=20 && litresFuel<=25) {
        fuelPurchase = fuelPurchase*0.92
    }else {
        fuelPurchase = fuelPurchase*0.9;
    }
  }
  if (input[0] === "Gasoline") {
    if (posessionCard === "Yes") {
      fuelPurchase = litresFuel * (gasolinePrice - 0.18);
    } else {
      fuelPurchase = litresFuel * gasolinePrice;
    }
    if (litresFuel>=20 && litresFuel<=25) {
        fuelPurchase = fuelPurchase*0.92
    } else if (litresFuel > 25) {
      fuelPurchase = fuelPurchase*0.90
    }
      else {
        fuelPurchase = fuelPurchase*0.9;
    }
  }
  if (input[0] === "Diesel") {
    if (posessionCard === "Yes") {
      fuelPurchase = litresFuel * (dieselPrice - 0.12);
    } else {
      fuelPurchase = litresFuel * dieselPrice;
    }
    if (litresFuel>=20 && litresFuel<=25) {
        fuelPurchase = fuelPurchase*0.92
    } else if (litresFuel > 25) {
      fuelPurchase = fuelPurchase*0.90
    }
      
  }
  console.log(`${fuelPurchase.toFixed(2)} lv.`);
  
}
fuelTankPart2(["Diesel", 19, "No"])