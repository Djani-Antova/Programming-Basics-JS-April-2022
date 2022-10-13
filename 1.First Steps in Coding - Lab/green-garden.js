function greenGarden (input) {
    let cost = 7.61 * input[0];
    let discount = 0.18 * cost;
    console.log(`The final price is: ${cost - discount} lv.`)
    console.log(`The discount is: ${discount} lv.`)

}
greenGarden(["150"])