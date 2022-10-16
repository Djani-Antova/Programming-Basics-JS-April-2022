function accountBalanceWithForLoop(input) {
    let totalSum = 0;

    for( let index = 0; index < input.length; index++) {

        let currentInput = input[index];
        if (currentInput === "NoMoreMoney") {
            break;
        } 
        let inputAsNumber = Number(currentInput);
        if (inputAsNumber < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        totalSum+=inputAsNumber;
        console.log(`Increase: ${inputAsNumber.toFixed(2)}`);
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
    
}
accountBalanceWithForLoop (["5.51", 
"69.42",
"100",
"NoMoreMoney"])
