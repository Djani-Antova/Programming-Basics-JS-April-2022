function goldMine(input) {
    let location = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        let averageGold = Number(input[i]);
        i++;
        let dayDigging = Number(input[i]);
        let goldSum = 0;
        for (let j = i + 1; j <= dayDigging + i; j++) {
            goldSum += Number(input[j]);
        }
        i += dayDigging;
        if ((goldSum / dayDigging) >= averageGold) {
            console.log(`Good job! Average gold per day: ${(goldSum / dayDigging).toFixed(2)}.`)
        } else {
            console.log(`You need ${(averageGold - (goldSum / dayDigging)).toFixed(2)} gold.`)
        }
    }
}
goldMine
    (["2",
        "10",
        "3",
        "10",
        "10",
        "11",
        "20",
        "2",
        "20",
        "10"])
