function everest(input) {

    let index = 0;
    let target = 8848;
    let steps = 0;
    let days = 0;

    let command = input[index];
    index++;

    while (command !== "END") {
    
        let tempSteps = Number(command);
        steps = steps - tempSteps;

        if (command === "Yes") {
            days++
        }
        
        if (steps >= target) {
            console.log(`Goal reached for ${days} days!"`);
            break;
        }
        
        console.log(`Failed! ${steps}`);
        index++;

    }

    console.log(`Failed! ${steps}`);
    
}
everest (["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])
