function basketballEquipment (input) {
    let fee = Number(input[0]);
    let sneekers = fee - fee / 100 * 40;
    let clothes = sneekers - sneekers / 100 * 20;
    let ball = clothes / 4;
    let accessories = ball / 5;

    let totalCost = fee + sneekers + clothes + ball + accessories;

    console.log(totalCost);

}
basketballEquipment(["550"]);