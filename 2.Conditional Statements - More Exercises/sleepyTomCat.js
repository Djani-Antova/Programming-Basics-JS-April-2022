function sleepyTomCat(input) {
  let holidays = Number(input[0]);

  let workingDays = 365 - holidays;
  let playWorkingDays = workingDays*63
  let playHolidays = holidays*127;
  let totalPlay = playHolidays + playWorkingDays;

  let diff = Math.abs(30000 - totalPlay);
  let diffInHours = Math.trunc(diff / 60)
  let diffInMin = diff % 60;

  if (totalPlay > 30000) {
      console.log(`Tom will run away`);
      console.log(`${diffInHours} hours and ${diffInMin} minutes more for play`);
  } else {
      console.log(`Tom sleeps well`);
      console.log(`${diffInHours} hours and ${diffInMin} minutes less for play`);
  }
}

sleepyTomCat ([113])
