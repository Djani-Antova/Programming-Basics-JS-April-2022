function moving (input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;
    let volume = w * l * h;
    let occupiedSpace = 0;
    
    let command = (input[index]);

    while (command !== "Done") {
        let tempOcuppiedSpace = Number(input[index]);
        index++;
        occupiedSpace += tempOcuppiedSpace;

        if (occupiedSpace > volume) {
            let diff = Math.abs(occupiedSpace - volume);
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "Done") {
        let tempOcuppiedSpace = Number(input[index]); 
        occupiedSpace += tempOcuppiedSpace;
    }
    let diff = Math.abs(occupiedSpace-volume)
    if (occupiedSpace < volume) {
        console.log(`${diff} Cubic meters left.`);
    }

} 
moving (["10", 
"1",
"2",
"4", 
"6",
"Done"])

