function birthdayParty(input) {
    let rentRoom = Number(input[index]);

    let cake = rentRoom*20/100;
    let drinks = cake - cake*45/100;
    let animator = rentRoom / 3;
    let budget = rentRoom + cake + drinks + animator;

    console.log(budget);
}
birthdayParty (["3720"]);