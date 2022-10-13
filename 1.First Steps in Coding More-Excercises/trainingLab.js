function trainingLab (input) {
let length = Number(input[0]);
let width = Number(input[1]);
let corridor =  1;

let usefulwidth = width - corridor;
let tableNumbers = usefulwidth / 0.7;
tableNumbers = Math.floor(tableNumbers);

let tableRows = length / 1.2;
tableRows = Math.floor(tableRows);

let workingStations = tableNumbers * tableRows - 3;

console.log(workingStations);

}
trainingLab([8.4, 5.2]);