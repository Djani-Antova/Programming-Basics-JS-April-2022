function sumOfNumbers (input) {
    let num = input[0];
    let sum = 0;
    

    for (let i = 0; i < num.length; i++) {
        let element = num.charAt(i);
        let numElement = Number(element);
        sum+=numElement
    }
    console.log(`The sum of the digits is:${sum}`);
    
}
sumOfNumbers (["564891"])