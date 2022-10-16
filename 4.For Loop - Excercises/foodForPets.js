function foodForPets(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let allFood = Number(input[index]);
    index++;

    let dogFoodCount = 0;
    let catFoodCount = 0;
    buiscuitCount = 0;
    for (let i = 1; i <= days; i++) {
        let tempDogFood = Number(input[index]);
        dogFoodCount += tempDogFood
        index++;
        let tempCatFood = Number(input[index]);
        catFoodCount += tempCatFood;
        index++;
        if (i % 3 === 0) {
            buiscuitCount += (tempCatFood + tempDogFood) * 0.1;
        }
    }
    let allFoodEaten = dogFoodCount + catFoodCount;
    let allFoodEatenInProcent = allFoodEaten * 100 / allFood;
    let dogEatenInProcent = dogFoodCount * 100 / allFoodEaten;
    let catEatenInProcent = catFoodCount * 100 / allFoodEaten;
    console.log(`Total eaten biscuits: ${Math.round(buiscuitCount)}gr.`);
    console.log(`${allFoodEatenInProcent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogEatenInProcent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catEatenInProcent.toFixed(2)}% eaten from the cat.`);

}

foodForPets (["3",
    "500",
    "100",
    "30",
    "110",
    "25",
    "120",
    "35"])