function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let stunt = Number(input[1]);
    let pricePerClothe = Number(input[2]);

    let decor = budget*.10;
    let costClothe = stunt*pricePerClothe;

    if (stunt > 150) {
        costClothe = costClothe*0.9;

    }
    let totalCost = decor + costClothe;
   
    let diff = Math.abs(budget-totalCost);
    
    if (totalCost > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
        
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])


