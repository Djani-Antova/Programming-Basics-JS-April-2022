function cleverLily(input) {
    
    let age = Number(input[0]);
    let washingMashine = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyCount =0;
    let money = 0;
    let currentMoney = 10;



    for (let i = 1; i <= age; i++) {
        
        if (i % 2 !== 0 ) {
            toyCount++;
        } else {
            money+=currentMoney;
            currentMoney+=10;
            money--;
        }

    }
    money+= toyCount * toyPrice;
    let diff = Math.abs(money - washingMashine)
    if (money >= washingMashine) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily (["21",
"1570.98",
"3"])

