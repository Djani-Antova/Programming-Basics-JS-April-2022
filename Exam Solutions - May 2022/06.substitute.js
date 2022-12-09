function substitute(input) {

    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);

     
    for ( let a = k; a <= 8; a++) {   // ab
        for ( let b = 9; b >= l; b-- ) {
            if (a % 2 === 0 && b % 2 !==0) {
                let firstNumber = a * 10 + b;
                console.log(firstNumber);
            }
              
             for (let c = m; c <= 8; c++) { //cd
                for ( let d = 9; d >= n; d--) {
                    if (c % 2 === 0 && d % 2 !== 0) {
                        let secondNumber = c * 10 + d; 

                    
                    }
                    
                    
                }
            }
        }
    }
    console.log(`${firstNumber} - ${secondNumber}`);

    
} 
substitute (["7",
"6",
"8",
"5"])
