function footballKit(input) {
    let priceTeniska = Number(input[0]);
    let target = Number(input[1]);

    let priceShorts = priceTeniska * 0.75;
    let priceChorapi = priceShorts * 0.2;
    let priceButonki = (priceShorts + priceTeniska) *2;
    let totalSum = priceTeniska + priceShorts + priceChorapi + priceButonki;

    let finalSum = totalSum * 0.85;
    

    if (finalSum >= target) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${finalSum} lv.`);
    } else {
        let diff = Math.abs((finalSum-target).toFixed(2));
        console.log(`No, he will not earn the world-cup replica ball.`);  
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);    
    }
}

footballKit (["59.99",
"500"])
