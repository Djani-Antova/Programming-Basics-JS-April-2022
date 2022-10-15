function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let count = input[2];

  let price = 0;
  	
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        if (fruit==="banana") {
            price=count*2.5;
        } else if (fruit==="apple") {
            price=count*1.2;
        } else if (fruit === "orange") {
            price=count*0.85;
        } else if (fruit=== "grapefruit") {
            price=count*1.45;
        } else if (fruit === "kiwi") {
            price = count*2.7;
        } else if (fruit === "pineapple") {
            price=count*5.5;
        }else if (fruit==="grapes") {
            price=count*3.85;
        } break;
      
    case "Saturday":
    case "Sunday": 
    if (fruit==="banana") {
        price=count*2.7;
    } else if (fruit==="apple") {
        price=count*1.25;
    } else if (fruit === "orange") {
        price=count*0.90;
    } else if (fruit=== "grapefruit") {
        price=count*1.6;
    } else if (fruit === "kiwi") {
        price = count*3;
    } else if (fruit === "pineapple") {
        price=count*5.6;
    }else if (fruit==="grapes") {
        price=count*4.2;
    } break;


    default:
      break;
      
  }
  
  if (fruit!="banana" && fruit!="apple" && fruit!="orange" && fruit!="grapefruit" && fruit!="kiwi" && fruit!="pineapple" && fruit!="grapes") {
      console.log("error");
  } else if (day!="Monday" && day!="Tuesday" && day!="Wednesday" && day!="Thursday" && day!="Friday" && day!="Saturday" && day!="Sunday") {
    console.log("error");
  } else {
    console.log(price.toFixed(2));
  }
}
fruitShop (["apple",
"Holiday",
"0.5"])



