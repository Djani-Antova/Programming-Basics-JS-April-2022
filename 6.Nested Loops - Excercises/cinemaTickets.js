function cinemaTickets(input) {
 
    let index = 0;
    let ticketsCount = 0;
 
    let standart = 0;
    let student = 0;
    let kid = 0;
 
    while (input[index] !== "Finish") {
 
        let movieName = input[index];
        index++;
        let freeSpaces = Number(input[index]);
        let initalFreeSpaces = Number(input[index]);
        index++;
 
        let standartTicketCountRoom = 0;
        let kidTicketCountRoom = 0;
        let studentTicketCountRoom = 0;
 
        innerloop: while (input[index] !== "End") {
            let ticket = input[index];
            switch (ticket) {
                case "standard":
                    standartTicketCountRoom++;
                    break;
                case "kid":
                    kidTicketCountRoom++;
                    break;
                case "student":
                    studentTicketCountRoom++;
                    break;
            }
            freeSpaces--;
            if (freeSpaces <= 0) {
                break innerloop;
            }
            index++;
        }
 
        standart += standartTicketCountRoom;
        student += studentTicketCountRoom;
        kid += kidTicketCountRoom;
 
        let totalTicketsCoutn = standartTicketCountRoom + kidTicketCountRoom + studentTicketCountRoom;
        ticketsCount += totalTicketsCoutn;
        console.log(`${movieName} - ${((totalTicketsCoutn / initalFreeSpaces) * 100).toFixed(2)}% full.`);
        index++;
    }
    console.log(`Total tickets: ${ticketsCount}`);
    console.log(`${((student / ticketsCount) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standart / ticketsCount) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid / ticketsCount) * 100).toFixed(2)}% kids tickets.`);
 
}
 
 
 
cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])
 
 