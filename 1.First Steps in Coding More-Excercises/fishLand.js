function fishLand (input) {
    let mackerelPrice = Number(input[0]);
    let tsatsaPrice = Number(input[1]);
    let palamudQuantity = Number(input[2]);
    let safridQuantity = Number(input[3]);
    let musselsQuantity = Number(input[4]);

    let palamudPrice = mackerelPrice + mackerelPrice / 100 * 60;
    let palamudCost = palamudPrice * palamudQuantity;

    let safridPrice = tsatsaPrice + tsatsaPrice / 100 * 80;
    let safridCost = safridPrice * safridQuantity;

    let musselsCost = musselsQuantity * 7.5;

    let total = palamudCost + safridCost + musselsCost;
    total = total.toFixed(2);

    console.log(total);

}
fishLand([7.79,
    5.35,
    9.3,
    0,
    0])