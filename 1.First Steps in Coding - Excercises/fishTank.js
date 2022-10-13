function fishTank (input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let sand = Number(input[3]);

    let volumeWater = length * width * height;
    let volumeSand = volumeWater / 100 * sand;
    let justWater = (volumeWater - volumeSand) / 1000;

    console.log(justWater);

}

fishTank (["105 ",
"77 ",
"89 ",
"18.5 "]
);
