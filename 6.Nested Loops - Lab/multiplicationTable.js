function multiplicationTable(input) {
    for (let firstNum = 1; firstNum <= 10; firstNum++) {
        for (let secNum = 1; secNum <=10; secNum ++) {
            let result = firstNum * secNum;
            console.log(`${firstNum} * ${secNum} = ${result}`);
        }
    }
}
multiplicationTable ()