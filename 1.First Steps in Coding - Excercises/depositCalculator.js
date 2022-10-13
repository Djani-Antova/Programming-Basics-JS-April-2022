function depositCalculator (input) {
    let deposit = Number (input[0]);
    let monthlyInterest = deposit * (input[2]) * 0.01 / 12;
    let interest = monthlyInterest * (input[1]);

    deposit = deposit + interest;
    
     
    console.log(deposit);
}
depositCalculator(["2350",
"6 ",
"7 "]);

