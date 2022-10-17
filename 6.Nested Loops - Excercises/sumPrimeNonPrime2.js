function sumPrimeNonPrime(input) {
    let index = 0;
    let data = input[index];
    let sumPrimeNum = 0;
    let sumNotPrimeNum = 0;
    let isPrime = true;
    while (data !== "stop") {
        data = Number(data);
        if (data < 0) {
            console.log("Number is negative.");
            isPrime = false;
        } else {
            for (let i = 2; i <= Math.sqrt(data); i++) {
                if (data % i === 0) {
                    sumNotPrimeNum += data;
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            sumPrimeNum += data;
        }
        index++;
        data = input[index];
        isPrime = true;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNum}`);
    console.log(`Sum of all non prime numbers is: ${sumNotPrimeNum}`);
}
sumPrimeNonPrime
(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
