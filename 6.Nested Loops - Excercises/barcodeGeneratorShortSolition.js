function barcodeGenerator(input) {
    let from = input[0];
    let to = input[1];
    let finalNum = "";
   
    for (let a = from.charAt(0); a <= to.charAt(0); a++) {
      if (a % 2 !== 0) {
        for (let b = from.charAt(1); b <= to.charAt(1); b++) {
          if (b % 2 !== 0) {
            for (let c = from.charAt(2); c <= to.charAt(2); c++) {
              if (c % 2 !== 0) {
                for (let d = from.charAt(3); d <= to.charAt(3); d++) {
                  if (d % 2 !== 0) {
                    finalNum += `${a}${b}${c}${d}` + " ";
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log(finalNum);
  }
  barcodeGenerator(["3256",
    "6579"])