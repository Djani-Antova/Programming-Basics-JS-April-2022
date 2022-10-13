function convert (input) {
    let rate = 1.79549;
    let bgn = Number(input[0]);
    
    let convertedUsd = bgn * rate;

    console.log(convertedUsd);
}

convert(["100"]);