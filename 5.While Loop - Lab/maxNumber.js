function maxNumber(input) {
    
    let inputElement = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;

    while (inputElement !== "Stop") {
        let currentNum = Number(inputElement);
        if(currentNum > max) {
            max = currentNum;
        }
        inputElement = input[index];
        index++;
    }
    console.log(max);    
}
maxNumber (["-1",
"-2",
"Stop"])
