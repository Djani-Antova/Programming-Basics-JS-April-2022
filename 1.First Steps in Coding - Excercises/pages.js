function pages (input) {
    let pages = Number(input[0]);
    let pagesHourly = Number(input[1]);
    let daysForBook = Number(input[2]);

    let days = pages / pagesHourly / daysForBook;

    console.log(days)
}
pages(["432 ",
"15 ",
"4 "])
