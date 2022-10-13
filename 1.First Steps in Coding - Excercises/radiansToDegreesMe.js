function radiansToDegreesMe (input) {
    let radians = Number(input[0]);
    let degree = radians * 180 / Math.PI;

    console.log(degree)

} 
radiansToDegreesMe(["6.2832"]);