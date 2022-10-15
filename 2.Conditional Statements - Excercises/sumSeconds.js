function sumSeconds (input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);

    totalTime = timeFirst + timeSecond + timeThird; // totaltime in seconds;
    console.log(totalTime);

    let minutes = Math.floor(totalTime / 60) ; //time in minutes;
    let seconds = totalTime % 60; //remaining seconds;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
     }
   
   
}
sumSeconds(["14", "12", "10"])
    