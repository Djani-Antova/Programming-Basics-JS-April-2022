function cost (input) {
    let dogCost = 2.50 * Number(input[0]);
    let catCost = 4 * Number(input[1]);
    let total = dogCost + catCost
    console.log(`${total } lv.`);

}
cost(["13", "9"])