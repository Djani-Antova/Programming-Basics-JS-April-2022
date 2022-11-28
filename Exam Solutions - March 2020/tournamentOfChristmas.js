function turnament(input) {
    let index = 0;
    let daysCount = Number(input[index]);
    let deysWithMostWins = 0;
    let totalAmount = 0;

    for (let i = 0; i < daysCount; i++) {
        index++;
        let dayWinsCount = 0;
        let dayLossesCount = 0;
        let dayTotalAmount = 0;
 
        while (input[index] !== "Finish") {
            let sportName = input[index];
            index++;
            let score = input[index];
 
            if (score === "win") {
                dayWinsCount++;
                dayTotalAmount += 20;
            } else {
                dayLossesCount++;
            }
            index++;
        }
        if (dayWinsCount > dayLossesCount) {
            dayTotalAmount *= 1.1;
            deysWithMostWins++;
        }
        totalAmount += dayTotalAmount;
    }
    if (deysWithMostWins > (daysCount / 2)) {
        totalAmount *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalAmount.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalAmount.toFixed(2)}`);
    }
 
}
 turnament (["2",
 "volleyball",
 "win",
 "football",
 "lose",
 "basketball",
 "win",
 "Finish",
 "golf",
 "win",
 "tennis",
 "win",
 "badminton",
 "win",
 "Finish"])
 