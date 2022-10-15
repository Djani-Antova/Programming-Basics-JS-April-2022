function pipesInPool(input) {
    let volumePool = Number(input[0]);
    let debitFirst = Number(input[1]);
    let debitSecond = Number(input[2])
    let hours = Number(input[3]);

    let firstContrib = hours * debitFirst;
    let secondContrib = hours * debitSecond;
    let totalContrib = firstContrib +secondContrib;
    let fullInPercent = totalContrib / volumePool * 100;
    let firstContribInPercent = firstContrib /totalContrib *100;
    let secondContribInPercent = secondContrib / totalContrib * 100;


    if (totalContrib <= volumePool) {
        console.log(`The pool is ${fullInPercent}% full. Pipe 1: ${firstContribInPercent.toFixed(2)}%. Pipe 2: ${secondContribInPercent.toFixed(2)}%.`);
        
    }else {
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${(totalContrib - volumePool).toFixed(2)} liters.`);
    }
    
}

pipesInPool ([100,
100,
100,
2.5])

