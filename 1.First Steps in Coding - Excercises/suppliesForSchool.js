function suppliesForSchool (input) {
    let penQuantity = Number(input[0]);
    let markerQuantity = Number(input[1]);
    let detergenQuantity = Number(input[2]);
    let penprice = 5.80;
    let markerPrice = 7.20;
    let detergenPrice = 1.20;

    let price = penQuantity * penprice + markerQuantity * markerPrice + detergenQuantity * detergenPrice;
    let discount = price * Number(input[3]) / 100;
    price = price - discount;

    console.log(price);

}
suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
);
