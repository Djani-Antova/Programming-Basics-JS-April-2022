function submitAsolution (input) {
    let pages = Number(input[0]);
    let pagesHourly = Number(input[1]);
    let daysForBook = Number(input[2]);

    let days = pages / pagesHourly / daysForBook;

    console.log(days)
}
submitAsolution(["432 ",
"15 ",
"4 "])