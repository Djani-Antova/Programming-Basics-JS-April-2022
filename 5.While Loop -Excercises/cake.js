function cake(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;

    let cakeSize = w * l;

    let command = input[index];
    index++;
    

    while (command !== "STOP") {
        let pieces = Number(command);
        cakeSize-=pieces;

        if (cakeSize < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }
        command = input[index];
        index++;
    }

    if (cakeSize >= 0) {
        console.log(`${cakeSize} pieces are left.`);

    }
    
    
}
cake (["10",
"10",
"20",
"20",
"20",
"20",
"21"]);
