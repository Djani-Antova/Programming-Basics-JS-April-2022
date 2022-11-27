function puppyCare(input) {
    let foodBoughtInKg = Number(input[0]);
    let foodBoughtInGram = foodBoughtInKg * 1000;


    let index = 1;
    let command = input[index];
    let foodEaten = 0;

    while (command !== "Adopted") {
        let tempFood = Number(command);
        foodBoughtInGram -= tempFood;
        command = input[index++];
    }
    if (foodBoughtInGram >= 0) {
        console.log(`Food is enough! Leftovers: ${foodBoughtInGram} grams.`);
    } else {
        let needFood = Math.abs(foodBoughtInGram);
        console.log(`Food is not enough. You need ${needFood} grams more.`);
    }

} 
puppyCare(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])
