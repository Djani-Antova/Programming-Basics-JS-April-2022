function skiTrip(input) {
  let dayCount = Number(input[0]);
  let type = input[1];
  let grade = input[2];
 
  let price =0;
  
  switch (type) {
    case "room for one person":
        price=(dayCount-1)*18;
      break;

    case "apartment":
        price=(dayCount-1)*25;
        if (dayCount<10) {
            price*=0.7
        }
        else if (dayCount>=10 && dayCount<=15){
            price*=0.65;
        }
        else {
            price*=0.5;
        }
      break;
    case "president apartment":
        price=(dayCount-1)*35;
        if (dayCount<10) { 
            price*=0.9;
        } else if (dayCount>=10 && dayCount<=15) {
            price*=0.85;
        }else {
            price*=0.8;
        }
        
      break;
  }
  if (grade==="positive") {
      price=price*1.25
  }else if(grade === "negative") {
      price*=0.9;
  }
  console.log(price.toFixed(2));

}
skiTrip(["2",
"apartment",
"positive"])



