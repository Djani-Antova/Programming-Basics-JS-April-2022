function fuelTank(input) {
        let fuel = input[0]
    let quantity = Number(input[1]);

    if (quantity>=25) {
        if (input[0] === "Kerosene") {
            console.log(`Invalid fuel!`);
            } else {
            console.log(`You have enough ${input[0].toLowerCase()}.`);
            }
        }
        else if (quantity < 25) {
           
            if (input[0] === "Kerosene") {
                console.log(`Invalid fuel!`);
            } else {
                console.log(`Fill your tank with ${input[0].toLowerCase()}!`);
            }
        }
    }          
fuelTank(["diesel", 10])