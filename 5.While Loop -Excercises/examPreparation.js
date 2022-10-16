function examPreparation(input) {
    let index = 0;
    let negativeGrade = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let countNegativeGrade = 0;
    let sumGrade = 0;
    let countProblems = 0;
    let taskName = "";
    let isNeedBreak = false; 


    while (command !== "Enough") {
        taskName = command;
        let tempGrade = Number(input[index]);
        index++;

        if (tempGrade <= 4) {
            countNegativeGrade++;
        }
        if (countNegativeGrade === negativeGrade) {
            isNeedBreak = true;
            console.log(`You need a break, ${countNegativeGrade} poor grades.`);
            break;
        }

        sumGrade += tempGrade;
        countProblems++;

        command = input[index];
        index++;
    }

    if (!isNeedBreak) {
        let avgScore = sumGrade / countProblems;

        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${countProblems}`);
        console.log(`Last problem: ${taskName}`);
    }



}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])

