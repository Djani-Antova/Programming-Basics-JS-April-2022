function catWalking(input) {
    let minWalkPerDay = Number(input[0]);
    let countWalkPerDay = Number(input[1]);
    let caloriesTakenDay = Number(input[2]);

    let totalWalkInMinutes = minWalkPerDay * countWalkPerDay;
    let caloriesSpend = totalWalkInMinutes * 5;

    if (caloriesTakenDay *0.5 <= caloriesSpend)  {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesSpend}.`);
    }
        else {
       console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesSpend}.`);
    }
}
catWalking (["15",
"2",
"500"]);
