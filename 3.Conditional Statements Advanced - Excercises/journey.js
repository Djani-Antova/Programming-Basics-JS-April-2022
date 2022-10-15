function journey (input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let place;
  
    switch (season) {
        case "summer":
            if (budget<=100) {
                destination="Bulgaria";
                place="Camp";
                cost=budget*0.30;
            }else if (budget>1000) {
                destination="Europe";
                place = "Hotel";
                cost=budget*0.9;
            } else {
                destination="Balkans";
                place="Camp";
                cost = budget*0.4; 
            }
            break;
        case "winter":
            if (budget<=100) {
                destination="Bulgaria";
                place="Hotel";
                cost=budget*0.70;
            }else if (budget>1000) {
                destination="Europe";
                place = "Hotel";
                cost=budget*0.9;
            } else {
                destination="Balkans";
                place="Hotel";
                cost = budget*0.8; 
            }    
            break;
    }
        console.log(`Somewhere in ${destination}`);
        console.log(`${place} - ${cost.toFixed(2)}`);
    }

journey (["1500", "summer"])