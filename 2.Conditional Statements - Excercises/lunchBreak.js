function lunchBreak(input) {
  let nameSeries = input[0];
  let durationEpisode = Number(input[1]);
  let lunchBreakTime = Number(input[2]);

  let lunch = lunchBreakTime / 8;
  let rest = lunchBreakTime / 4;

  let timeLeft = lunchBreakTime - lunch - rest;
  let diff = Math.abs(lunchBreakTime - lunch - rest - durationEpisode);
  diff = Math.ceil(diff);

  if (timeLeft >= durationEpisode) {
     
    console.log(
      `You have enough time to watch ${nameSeries} and left with ${diff} minutes free time.`)
    } else {
      console.log(`You don't have enough time to watch ${nameSeries}, you need ${diff} more minutes.`);  
    }
}
lunchBreak(["Game of Thrones",
"60",
"96"])



