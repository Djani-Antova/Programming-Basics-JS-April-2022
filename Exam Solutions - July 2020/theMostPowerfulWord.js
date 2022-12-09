function theMostPowerfulWord(input) {
 
    let strong = "";
    let total = 0;
 
    for (let x = 0; x < input.length; x++) {
        let word = input[x];
        if (word === "End of words") {
            break;
        }
 
        let sum = 0;
        for (let i = 0; i < word.length; i++) {
            sum += word[i].charCodeAt(0);
        }
        switch (word[0]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'y':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
            case 'Y':
                sum *= word.length;
                break;
 
            default:
                sum /= word.length;
                break;
        }
        if (sum > total) {
            strong = word;
            total = sum;
        }
    }
    console.log(`The most powerful word is ${strong} - ${Math.floor(total)}`);
}
 
 
РЕШЕНИЕ С IF-ELSE:
 
function theMostPowerfulWord(input) {
 
    let strong = "";
    let total = 0;
 
    for (let x = 0; x < input.length; x++) {
        let word = input[x];
        if (word === "End of words") {
            break;
        }
 
        let sum = 0;
        for (let i = 0; i < word.length; i++) {
            sum += word[i].charCodeAt(0);
        }
 
        if (word[0] === 'a' || word[0] === 'e' || word[0] === 'i' || word[0] === 'o' || word[0] === 'u' || word[0] === 'y' ||
            word[0] === 'A' || word[0] === 'E' || word[0] === 'I' || word[0] === 'O' || word[0] === 'U' || word[0] === 'Y') {
            sum *= word.length;
        } else {
            sum /= word.length;
        }
 
        if (sum > total) {
            strong = word;
            total = sum;
        }
    }
    console.log(`The most powerful word is ${strong} - ${Math.floor(total)}`);
}
 
 
РЕШЕНИЕ СЪС SEARCH():
 
function theMostPowerfulWord(input) {
 
    let strong = "";
    let total = 0;
 
    for (let x = 0; x < input.length; x++) {
        let word = input[x];
        if (word === "End of words") {
            break;
        }
 
        let sum = 0;
        for (let i = 0; i < word.length; i++) {
            sum += word[i].charCodeAt(0);
        }
 
        if ("AEIOUYaeiouy".search(word[0]) !== -1) {
            sum *= word.length;
        } else {
            sum /= word.length;
        }
 
        if (sum > total) {
            strong = word;
            total = sum;
        }
    }
    console.log(`The most powerful word is ${strong} - ${Math.floor(total)}`);
}
 
 
РЕШЕНИЕ СЪС SEARCH И ТЕРНАРЕН ОПЕРАТОР:
 
function theMostPowerfulWord(input) {
 
    let strong = "";
    let total = 0;
 
    for (let x = 0; x < input.length; x++) {
        let word = input[x];
        if (word === "End of words") {
            break;
        }
 
        let sum = 0;
        for (let i = 0; i < word.length; i++) {
            sum += word[i].charCodeAt(0);
        }
 
        "AEIOUYaeiouy".search(word[0]) !== -1 ? sum *= word.length : sum /= word.length; 
 
        if (sum > total) {
            strong = word;
            total = sum;
        }
    }
    console.log(`The most powerful word is ${strong} - ${Math.floor(total)}`);
}