function trapeziodArea (input) {
    let sideFirst = Number(input[0]);
    let sideSecond = Number(input[1]);
    let height = Number(input[2]);

    let area = (sideFirst + sideSecond) * height / 2;
    area = area.toFixed(2);

    console.log(area);

}
trapeziodArea(["8", "13", "7"]);