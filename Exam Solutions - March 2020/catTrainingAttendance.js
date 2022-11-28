function catTrainingAttendance(input) {
 
    let startHours = Number(input[0]);
    let checkHours = Number(input[1]);
    let checkMinutes = Number(input[2]);
    let dayOfWeek = input[3];
 
    let bonusPoints = 0;
 
    if (checkHours < startHours && checkHours <= (startHours - 1)) {
        bonusPoints = 1.5;
    } else if (checkHours === startHours && checkMinutes <= 30) {
        bonusPoints = 1;
    } else if ((checkHours === startHours && checkMinutes > 30) || checkHours <= (startHours + 4)) {
        bonusPoints = 0.5;
    }
    switch (dayOfWeek) {
        case "Monday":
        case "Wednesday":
        case "Friday":
            bonusPoints += 0.6;
            break;
        case "Tuesday":
        case "Thursday":
        case "Saturday":
            bonusPoints += 0.8;
            break;
        case "Sunday":
            bonusPoints += 2;
            break;
    }
    console.log(`${bonusPoints.toFixed(2)}`);
}