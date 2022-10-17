function trainTheTrainers(input) {
    let index = 0;
    let people = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let sumGrade = 0;
    counter = 0;

    while (command !=="Finish") {
        let name = command;
        let currentGradeSum = 0;
        counter++;
        for ( i = 0; i < people; i++) {
            let grade = Number(input[index]);
            index++;
            currentGradeSum += grade;

        }
        let currentAVG = currentGradeSum / people;
        sumGrade += currentAVG;
        console.log(`${name} - ${currentAVG.toFixed(2)}.`);
        command = input[index];
        index++;
    }
    let AVG = sumGrade / counter;
    console.log(`Student's final assessment is ${AVG.toFixed(2)}.`);

}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])
