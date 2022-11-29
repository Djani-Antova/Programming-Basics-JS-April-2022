function computerRoom(input) {

    let month = input[0]; 
    let hours = Number(input[1]);
    let people = Number(input[2]);
    let dayOrNight = input[3]; 
    let priceDayPerHour = 0;
    let priceNightPerHour = 0;

    if (month === "march" || month === "april" || month === "may") {
        priceDayPerHour = 10.50;
        priceNightPerHour = 8.40;
        if (people >= 4) {
            priceDayPerHour = priceDayPerHour * 0.9;
            priceNightPerHour = priceNightPerHour * 0.9;
        }
        if (hours >= 5) {
            priceDayPerHour = priceDayPerHour / 2;
            priceNightPerHour = priceNightPerHour / 2;
        }
    } else if (month === "june" || month === "july" || month === "august") {
        priceDayPerHour = 12.60;
        priceNightPerHour = 10.20;
        if (people >= 4) {
            priceDayPerHour = priceDayPerHour * 0.9;
            priceNightPerHour = priceNightPerHour * 0.9;
        }
        if (hours >= 5) {
            priceDayPerHour = priceDayPerHour / 2;
            priceNightPerHour = priceNightPerHour / 2;
        }
    }
    switch (dayOrNight) {
        case "day":
            console.log(`Price per person for one hour: ${priceDayPerHour.toFixed(2)}`);
            let totalDay = priceDayPerHour * hours * people;
            console.log(`Total cost of the visit: ${totalDay.toFixed(2)}`);
            break;

        case "night":
            console.log(`Price per person for one hour: ${priceNightPerHour.toFixed(2)}`);
            let totalNight = priceNightPerHour * hours * people
            console.log(`Total cost of the visit: ${totalNight.toFixed(2)}`);
            break;
    }
}
computerRoom(["july",
    "5",
    "5",
    "night"])

