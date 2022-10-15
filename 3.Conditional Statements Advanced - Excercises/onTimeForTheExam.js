function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExam = hourExam*60 + minExam;
    let timeArrive = hourArrive*60 + minArrive;
    let diff = Math.abs(timeArrive-timeExam);
    
    
    if (timeArrive>timeExam) {
        console.log("Late");
        let h =Math.floor(diff/60);
        let m = diff % 60;
        if (diff>=60) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            }else {
                console.log(`${h}:${m} hours after the start`);
            }
        } else {
            console.log(`${m} minutes after the start`);
        }
    }else if ( timeArrive===timeExam || timeExam-timeArrive<=30) {
        console.log("On time");
        if (diff > 0) {
            let m = diff % 60;
            console.log(`${m} minutes before the start`);
        }

    }else {
        console.log("Early");
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (h > 0) {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        } else {
            console.log(`${m} minutes before the start`);

        }

    }
   
}
onTimeForTheExam (["9",
"00",
"10",
"30"])



