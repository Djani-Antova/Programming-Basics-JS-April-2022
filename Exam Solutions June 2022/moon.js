function moon(input) {
    let speed = Number(input[0]);
    let fuelPer100Km = Number(input[1]);
    let distance = 384400;
    let timeStay = 3;

    let totalDistance = distance * 2;
    let totalTimeForTravel = totalDistance / speed;
    let totalTime = timeStay + totalTimeForTravel;
    let fuel = (totalDistance * fuelPer100Km) / 100;

    console.log(Math.ceil(totalTimeForTravel) + timeStay);
    console.log(fuel);
}
moon(["10000",
    "5"])
