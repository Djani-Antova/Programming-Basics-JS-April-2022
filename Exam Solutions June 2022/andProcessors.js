function andprocessors(input) {

    let plannedProcessors = Number(input[0]);
    let workers = Number(input[1]);
    let workingDays = Number(input[2]);
    let workingHoursPerDay = 8;
    let timeForOneProcessor = 3;
    let priceProcessor = 110.10;

    let workForce = workers * workingDays * workingHoursPerDay;
    let totalMadeProcessors = Math.floor(workForce / timeForOneProcessor);

    let diff = Math.abs(totalMadeProcessors - plannedProcessors)
    if (totalMadeProcessors >= plannedProcessors) {
        
        console.log(`Profit: -> ${(diff * priceProcessor).toFixed(2)} BGN`);
    } else {
        console.log(`Losses: -> ${(diff * priceProcessor).toFixed(2)} BGN`);
    }
} 
andprocessors (["150",
"7",
"18"])

