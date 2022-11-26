function changeBureau(input) {
    let bitcoinCount = Number(input[0]);
    let chineseYuanCount = Number(input[1]);
    let comission = Number(input[2]);

    let bitCoinInLeva = bitcoinCount * 1168;
    let levaInEvro = bitCoinInLeva / 1.95;
    let chineseYuanInDolar = chineseYuanCount * 0.15;
    let dolarInLev = chineseYuanInDolar * 1.76;
    let dolarInLevInEvro = dolarInLev / 1.95;
    
    totalEvro = levaInEvro + dolarInLevInEvro;
    finalEvro = totalEvro - totalEvro*comission/100;

    console.log(finalEvro.toFixed(2));
}
changeBureau (["20",
"5678",
"2.4"])
