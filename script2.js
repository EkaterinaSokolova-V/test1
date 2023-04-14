'use strict';
let typeOfTickets = prompt('Please enter type of your tickets: adult >18y. ; baby <2y.; child >2y. and <18y.; pensioner >65y.', '');
let numOfTickets = +prompt('Please enter number of tickets.', '');
let discount = 0,
    price = 100;

if (typeOfTickets && numOfTickets) {
    if (typeOfTickets.toLocaleLowerCase() == 'pensioner') discount = 0.6;
    else if (typeOfTickets.toLocaleLowerCase() == 'baby') discount = 0.1;
    else if (typeOfTickets.toLocaleLowerCase() == 'child') discount = 0.5;
    document.write(`You are odered ${numOfTickets} tickets with ${discount*100}% of discount. The price is ${numOfTickets * (price - price * discount)}$.`);
} else document.write('Input data is wrong!');
