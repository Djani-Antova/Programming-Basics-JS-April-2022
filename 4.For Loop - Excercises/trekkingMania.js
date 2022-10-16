function trekkingMania (input) {
    let index = 0;
    let n = Number(input[index]);
    index++;

    let peopleMusala = 0;
    let peopleMonblan = 0;
    let peopleKilimandjaro = 0;
    let peopleK2 = 0;
    let peopleEverest = 0;


    
    for (let i=0; i < n; i++) {
        let currentNum = Number(input[index]);
        index++;
        if (currentNum <= 5) {
            peopleMusala+=currentNum;
        } else if (currentNum >=6 && currentNum <=12) {
            peopleMonblan+=currentNum;
        } else if (currentNum>=13 && currentNum <= 25 ) {
            peopleKilimandjaro+=currentNum;
        } else if (currentNum>=26 && currentNum <= 40) {
            peopleK2+=currentNum;
        } else {
            peopleEverest+=currentNum;
        }
       
    }
    let allPeople = peopleMusala + peopleMonblan + peopleKilimandjaro + peopleK2 + peopleEverest;
    let musala = peopleMusala / allPeople * 100;
    let monblan = peopleMonblan / allPeople * 100;
    let kilimandjaro = peopleKilimandjaro / allPeople * 100;
    let k2 = peopleK2 / allPeople * 100;
    let everest = peopleEverest / allPeople * 100;
 
    console.log(`${musala.toFixed(2)}%`);
    console.log(`${monblan.toFixed(2)}%`);
    console.log(`${kilimandjaro.toFixed(2)}%`);
    console.log(`${k2.toFixed(2)}%`);
    console.log(`${everest.toFixed(2)}%`);
    
}

trekkingMania (["5",
"25",
"41",
"31",
"250",
"6"])


