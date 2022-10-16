function foodForPets2(input) {
    let days = Number(input[0]);
    let foodQuantity = Number(input[1]);
    let totalFood = 0;
    let dogFood = 0;
    let catFood = 0;
    let dogFoodPercent = 0;
    let catFoodPercent = 0;
    let biscuits = 0;
    let entire = 0;
    let index = 2;

    for ( let currentday = 1; currentday <= days; currentday++) {

        let foodForDay = 0;
        let dogQuantity = Number(input[index]);
        index++;
        let catQuantity = Number(input[index]);
        index++;

        dogFood+=dogQuantity;
        catFood+=catQuantity;

        foodForDay = dogQuantity + catQuantity;

        totalFood = dogFood + catFood;

        if(currentday % 3 === 0) {
            biscuits+=foodForDay * 0.10;
        }
    }
    entire = (totalFood / foodQuantity) * 100;
    dogFoodPercent = (dogFood / totalFood) * 100;
    catFoodPercent = (catFood / totalFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${entire.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogFoodPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catFoodPercent.toFixed(2)}% eaten from the cat.`);
    
}

foodForPets2 (["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"])