function cinemaTickets(input) {
    let index = 0;
    let command = input[index]; // 0 - Taxi
    index++
    let totalTickets = 0;
    let studentTicketCount = 0;
    let standardTicketCount = 0;
    let kidsTicketCount = 0;

    while (command !== 'Finish') {
        let movieName = command; // Taxi
        let freeSeats = Number(input[index]); // 10
        index++
        let tempCommand = input[index]; // tova koeto vzemame kato sledvashto
        index++
        let tempTicket = 0;

        while (tempCommand !== 'End') { // standard
            tempTicket++;

            switch (tempCommand) { // standard
                case 'student':
                    studentTicketCount++; break;
                case 'standard':
                    standardTicketCount++; break;
                case 'kid':
                    kidsTicketCount++; break;
            }
            if (tempTicket >= freeSeats) {
                break;
            }
            tempCommand = input[index];
            index++;

        }
        totalTickets += tempTicket;
        let occupancyPercentage = (tempTicket / freeSeats) * 100;

        console.log(`${movieName} - ${occupancyPercentage.toFixed(2)}% full.`);
        command = input[index];
        index++;
    }
    console.log(`Total tickets: ${totalTickets}`);

    let studentTicketPercentage = (studentTicketCount / totalTickets) * 100;
    let standardTicketPercentage = (standardTicketCount / totalTickets) * 100;
    let kidsTicketPercentage = (kidsTicketCount / totalTickets) * 100;

    console.log(`${studentTicketPercentage.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidsTicketPercentage.toFixed(2)}% kids tickets.`)
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
