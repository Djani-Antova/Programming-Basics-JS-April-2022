function salary(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    let index = 2;
   

    

    for (i = 1; i <= openTabs; i++) {
        let website = input[index];
        index++;
        if (website == "Facebook") {
            salary -= 150;
        } else if (website == "Instagram") {
            salary-=100;
        } else if (website == "Reddit") {
            salary-=50;
        }  
    }
        if (salary<=0) {
            console.log(`You have lost your salary.`); }   
        else {
            console.log(`${Math.trunc(salary)}`);
        }

    }  

        
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

