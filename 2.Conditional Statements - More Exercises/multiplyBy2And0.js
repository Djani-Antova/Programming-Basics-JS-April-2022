function multiplyBy2(input) {
    for (let i = 0; i < input.length; i++){
        if (input[i] >= 0){
            console.log(`Result: ${(input[i] * 2).toFixed(2)}`);
        }
        else{
            console.log(`Negative number!`);
            break;
        }
    }
}