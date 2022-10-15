function harvest (input) {
    let squareMetYard = Number (input[0]);
    let grapePerMeter = Number (input[1]);
    let neededWine = Number (input[2]);
    let workersCount = Number (input[3]);

    let totalGrape = squareMetYard * grapePerMeter;
    let wine = totalGrape * .40 / 2.5;

    if (wine < neededWine ) {
        console.log(`It will be a tough winter! More ${Math.floor(neededWine-wine).toFixed(0)} liters wine needed.`);
    } else {
        diff = wine - neededWine;
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(diff/workersCount)} liters per person.`);
    }

}
harvest([1020,
    1.5,
    425,
    4
    ])