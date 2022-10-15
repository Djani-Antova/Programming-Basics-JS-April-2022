function movieDestination2(input) {

    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
    let price = 0;

    switch (destination) {
        case "Dubai":
            if (season === "Winter") {
                price = 45000;
            } else if (season === "Summer") {
                price = 40000;
            }
            break;
        case "Sofia":
            if (season === "Winter") {
                price = 17000;
            } else if (season === "Summer") {
                price = 12500;
            }
            break;
        case "London":
            if (season === "Winter") {
                price = 24000;
            } else if (season === "Summer") {
                price = 20250;
            }
            break;
    }
    let allDaysSum = days * price;

    switch (destination) {
        case "Dubai":
            allDaysSum = allDaysSum * .70;
            break;
        case "Sofia":
            allDaysSum = allDaysSum * 1.25;
    }

    if (budget >= allDaysSum) {
        console.log(`The budget for the movie is enough! We have ${(budget - allDaysSum).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(allDaysSum - budget).toFixed(2)} leva more!`);
    }
}

movieDestination2(["400000",
    "Sofia",
    "Winter",
    "20"])