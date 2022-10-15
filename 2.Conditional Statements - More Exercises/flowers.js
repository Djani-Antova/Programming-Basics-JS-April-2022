function flowers(input) {
 
    let chrysanthemums = parseInt(input[0]);
    let roses = parseInt(input[1]);
    let tulips = parseInt(input[2]);
    let season = input[3];
    let holiday = input[4];
    let sum = 0;
 
    if (season === `Spring` || season === `Summer`) {
        sum = 2 * chrysanthemums + 4.1 * roses + 2.5 * tulips;
    } else if (season === `Autumn` || season === `Winter`) {
        sum = 3.75 * chrysanthemums + 4.5 * roses + 4.15 * tulips;
    }
    if (holiday === `Y`) {
        sum = sum * 1.15;
    }
    if (tulips > 7 && season === `Spring`) {
        sum = 0.95 * sum;
    }
    if (roses >= 10 && season === `Winter`) {
        sum = 0.9 * sum;
    }
    if (chrysanthemums + roses + tulips > 20) {
        sum = 0.8 * sum;
    }
    console.log(`${(sum + 2).toFixed(2)}`);
}
 