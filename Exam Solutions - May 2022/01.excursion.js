function excursion(input) {

    let people = Number(input[0]);
    let nights = Number(input[1]);
    let cardTransport = Number(input[2]);
    let ticketsMuseum = Number(input[3]);

    let nightsPerPerson = nights * 20;
    let cardTreansportPerPerson = cardTransport * 1.60;
    let ticketMuseumPerPerson = ticketsMuseum * 6;
    let totalPerPerson = nightsPerPerson + cardTreansportPerPerson + ticketMuseumPerPerson;
    let totalGroup = totalPerPerson * people;
    let final = totalGroup * 1.25;


    console.log(final.toFixed(2));
}

excursion(["20",
    "14",
    "30",
    "6",])