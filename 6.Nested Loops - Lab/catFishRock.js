function catFishRock() {
    let points = 0;

    for (let row = 1; row <= 3; row++) {
        for (let col = 1; col <= 6; col++) {
            if (row === 1 && col === 4) {
                points += 20;
            } else if (row === 3 && col === 2) {
                points += 20;
            } else if (row === 2 && col === 5) {
                continue;
            } else if (row === 1 && col === 5) {
                break;
            }else {
                points++;
            }
        }
    }
    console.log(points);
}
catFishRock()
