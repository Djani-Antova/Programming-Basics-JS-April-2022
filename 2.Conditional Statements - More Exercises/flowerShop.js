function flowerShop(input) {
    let magnCount = Number(input[0]);
    let hyacinthCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let gift = Number(input[4]);

    let totalOrder = magnCount*3.25 + hyacinthCount*4 + rosesCount*3.5 + cactusCount*8;

    let profit = totalOrder*0.95;

    let diff = Math.abs(profit - gift);

    if (profit>=gift) {

        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }
    
}

flowerShop([15,
    7,
    5,
    10,
    100
    ])
