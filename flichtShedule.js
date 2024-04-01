function flightSchedule(input) {
    let flights = {};

    for (let flight of input[0]) {
        let [flightNum, destination] = flight.split(' ');
        flights[flightNum] = { destination, status: 'Ready to fly' };
    }

    for (let info of input[1]) {
        let [flightNum, status] = info.split(' ');
        if (flights.hasOwnProperty(flightNum)) {
            flights[flightNum].status = status;
        }
    }

    let command = input[2][0];

    if (command === 'Ready to fly') {
        for (let flightNum in flights) {
            if (flights[flightNum].status === 'Ready to fly') {
                console.log({ Destination: flights[flightNum].destination, Status: flights[flightNum].status });
            }
        }
    } else {
        for (let flightNum in flights) {
            if (flights[flightNum].status !== 'Ready to fly') {
                console.log({ Destination: flights[flightNum].destination, Status: flights[flightNum].status });
                flights[flightNum].status = 'Ready to fly';
            }
        }
    }
}