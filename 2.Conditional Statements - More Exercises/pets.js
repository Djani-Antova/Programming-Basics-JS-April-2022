function pets(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    let dogFoodPerDay =Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodPerDay = Number(input[4]) / 1000;

    let neededFoodDog = dogFoodPerDay *days;
    let neededFoodCat = catFoodPerDay*days;
    let neededFoodTurtle = turtleFoodPerDay*days;

    let neededTotalFood = neededFoodDog + neededFoodCat + neededFoodTurtle;

    if (neededTotalFood <= food) {
        console.log(`${Math.floor(food-neededTotalFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(neededTotalFood - food)} more kilos of food are needed.`);
    }
}

pets  ([5,
    10,
    2.1,
    0.8,
    321
    ]);