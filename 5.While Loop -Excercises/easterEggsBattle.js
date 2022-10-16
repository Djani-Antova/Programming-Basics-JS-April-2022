function easterEggsBattle(input) {
    let index = 0;
    let playerOneEggs = Number(input[index]);
    index++;
    let playerTwoEggs = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    while (command !== "End") {
        if (command === "one") {
            playerTwoEggs--;
        }
        else if (command === "two") {
            playerOneEggs--;
        }
        command = (input[index]);
        index++;

        if (playerOneEggs <= 0) {
            console.log(`Player one is out of eggs. Player two has ${playerTwoEggs} eggs left.`);
            break;
        }
        else if (playerTwoEggs <= 0) {
            console.log(`Player two is out of eggs. Player one has ${playerOneEggs} eggs left.`);
            break;
        }
        if (command === "End") {
            console.log(`Player one has ${playerOneEggs} eggs left.`);
            console.log(`Player two has ${playerTwoEggs} eggs left.`);
        }
    }
}
easterEggsBattle(["6", "3", "one", "two", "two", "one", "one"])