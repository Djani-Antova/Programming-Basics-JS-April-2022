function oscars (input) {
    let nameActor = input[0];
    let pointAcademy = Number(input[1]);
    let evaluatorCount = Number(input[2]);
    let currentPoint = 0;
    

    let index = 3;
    let evaluatorName = input[index];
    index++;
    let pointEvaluator = input [index];
    let length = evaluatorName.lenth;

    for (i = 1; i < evaluatorCount; i++) {
        currentPoint = pointAcademy + length * pointEvaluator / 2;
        index++;
    }
    if (currentPoint > 1250.5) {
        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${currentPoint}`);
        
    } else {
        let diff = Math.abs(currentPoint - 1250.5);
        console.log(`Sorry, ${nameActor} you need ${diff} more!`);
    }
    
}
oscars (["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
