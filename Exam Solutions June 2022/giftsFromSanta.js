function giftsFromSanta(input) {

    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);
    let printLine = "";


    for (let i = m; i >= n; i--) {
        if (i === s) {
            if (s % 2 === 0 && s % 3 === 0) {
                break;
            }
        }
        if (i % 2 === 0 && i % 3 === 0) {
            printLine += `${i} `;

        }
    }
    console.log(printLine);

}
giftsFromSanta(["20",
    "1000",
    "36"])

