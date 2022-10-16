function walking(input) {
    let index = 0;
    let target = 10000;
    let steps = 0;

    let command = input[index];
    index++;

    while (command !== "Going home" ) {
        let tempSteps = Number(command);
        steps+=tempSteps;

        if (steps >=target) {
            break;
        }
         command = input[index];
         index++;  
    }
    if (command === "Going home") {
        let tempSteps = Number(input[index]);
        index++;
        steps+=tempSteps;
    }
    let diff = Math.abs(target - steps);
    if (target <= steps) {
        
            console.log("Goal reached! Good job!");
            console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal."`);
    }
} 
walking (["1000",
"1500",
"2000",
"6500"])
