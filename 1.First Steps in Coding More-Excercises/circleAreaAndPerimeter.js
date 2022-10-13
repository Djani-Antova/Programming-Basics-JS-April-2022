function circleAreaAndParameter (input) {

 let radius = Number (input[0]);
 let circleArea = Math.pow(radius,2) * Math.PI;
 circleArea = circleArea.toFixed(2);
 circleParameter = 2 * Math.PI * radius;
 circleParameter = circleParameter.toFixed(2);

console.log(`calculated area ` + circleArea);
console.log(`calculated area ` + circleParameter); 

} 

circleAreaAndParameter([4.5]);

