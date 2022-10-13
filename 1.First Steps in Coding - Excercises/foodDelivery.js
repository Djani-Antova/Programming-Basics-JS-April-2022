function foodDelivery (input) {
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let vegMenu = 8.15;

    let chickenOrder = Number(input[0]);
    let fishOrder = Number(input[1]);
    let vegOrder = Number(input[2]);

    let menu = chickenMenu * chickenOrder + 
    fishMenu * fishOrder + vegOrder * vegMenu;    

    let dessert = menu / 100 * 20;
    let totalCost = menu + dessert + 2.50;

    console.log(totalCost);
}
foodDelivery(["9",
"2",
"6"]);
