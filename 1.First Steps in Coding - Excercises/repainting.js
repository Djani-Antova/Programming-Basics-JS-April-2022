function repainting (input) {
    let nylonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let thinnerQuantity = Number(input[2]);

    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinnerPrice = 5.00;

    let nylonCost = nylonPrice * (nylonQuantity + 2);
    let paintCost = paintPrice * (paintQuantity * 1.10);
    let thinnerCost = thinnerQuantity * thinnerPrice;
    
    let materialCost = nylonCost + paintCost + thinnerCost + 0.40;
    let workCostperHour = materialCost / 100 * 30;

    let total = workCostperHour * Number(input[3]) + materialCost;
    
    console.log(total);

}

repainting(["5",
"10",
"10",
"1"]);
