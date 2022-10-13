function vegetableMarket (input) {
    let priceVeg = input[0];
    let priceFruit = input[1];
    let kiloVeg = input[2];
    let kiloFruit = input[3];

    let income = (priceVeg * kiloVeg + priceFruit * kiloFruit) / 1.94;
    income = income.toFixed(2);
    console.log(income);
} 
vegetableMarket([1.5, 2.5,
    10,
    10])