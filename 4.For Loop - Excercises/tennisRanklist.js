function tennisRanklist(input) {
    
    let index = 0;
    let n = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;

  
    let winCount = 0;
    let tempPoints = 0;

    

    for (let i = 0; i < n; i++) {
        let res = input[index];
        index++;
        if (res === "W") {
            winCount++;
            tempPoints += 2000;
        } else if (res === "F") {
            tempPoints += 1200;
        } else if (res === "SF") {
            tempPoints += 720;
        }
       
    } 
    let totalPonts = startPoints + tempPoints;
    let averPoints = tempPoints / n;
    let winRate = winCount / n * 100;
    console.log(`Final points: ${totalPonts}`);
    console.log(`Average points: ${Math.floor(averPoints)}`);
    console.log(`${winRate.toFixed(2)}%`);
    
}
tennisRanklist (["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


