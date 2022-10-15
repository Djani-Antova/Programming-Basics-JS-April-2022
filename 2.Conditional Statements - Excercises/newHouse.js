function newHouse(input) {
  let type = input[0];
  let count = Number(input[1]);
  let budget = Number(input[2]);
  let cost = 0;

  // "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"

  switch (type) {
    case "Roses":
      cost = count * 5;
      if (count > 80) {
        cost = cost * 0.9;
      }
      break;
    case "Dahlias":
        cost = count*3.8;
        if (count > 90)  {
            cost = cost*0.85;
        }   
         break;
    case "Tulips":
        cost = count*2.8;
        if (count > 80) {
            cost = cost*0.85
        }
      break;
    case "Narcissus":
        cost = count*3;
        if(count < 120) {
            cost = cost*1.15;
        }
      break;
    case "Gladiolus":
        cost = count*2.5;
        if (count < 80) {
            cost=cost*1.2;
        }
      break;

  }
  let diff = Math.abs(cost-budget);
  if(budget>=cost) {
      console.log(`Hey, you have a great garden with ${count} ${type} and ${diff.toFixed(2)} leva left.`);
  }else {
      console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }

}
newHouse(["Tulips",
"88",
"260"])


