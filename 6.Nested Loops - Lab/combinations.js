function combinations(input) {
    let n = Number(input[0]);
    let validCombinationsCount = 0;


    for (let firstNum = 0; firstNum <= n; firstNum++) {
        for (let secondNum = 0; secondNum <= n; secondNum++) {
            for (let thirdNum = 0; thirdNum <= n; thirdNum++) {
                let result = firstNum + secondNum + thirdNum;
                if (result === n) {
                    validCombinationsCount++;
                    break;
                }

            }
        }
    }
    console.log(validCombinationsCount);
}
combinations(["5"])