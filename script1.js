'use strict';
//1.1
// let month = prompt('Type your holiday month.');
// if (month.toLowerCase() == 'july' || month.toLowerCase() == 'august') document.write('approved');
// else document.write('denied');

//1.2
// let a = 2,
//     b = 0,
//     op = '/',
//     result;
// if (op == '+') result = a + b;
// else if (op == '-') result = a - b;
// else if (op == '*') result = a * b;
// else if (op == '/' && b != 0) result = a / b;
// else result = 'check number b'; 

// console.log(result);

//1.3
// const h = 5,
//       dif = 3 - 2;
// console.log( 5/dif);

//Креативное задание
// let w = 'water',
//     m = 'mug',
//     dr = 'coffee',
//     s_cr = 'sugar',
//     step1 = `<br>1. Heat up a ${m} of  ${w}.`,
//     step2 = `<br>2. Add 1–2 teaspoons of instant ${dr} to the ${m}.`,
//     step3 = `<br>3. Stir the ${dr} until it completely dissolves in the ${w}.`,
//     step4 = ` <br>4. Add ${s_cr} if you want a sweeter or richer drink.`;

    //s_cr = 'cream';
    //dr = 'tea';

//let instruction = `<br>How to make a cup of ${dr}: ${step1} ${step2} ${step3} ${step4}`;

let typeOfCoffee = "";
let size = "";
let coffeeName = ["Type 1", "Type 2"], 
    coffeeSizeAndPrice = [['small', 'medium', 'big'], [2, 3, 4]];

do {
    typeOfCoffee = + prompt("Choose your coffee please:\nType 1 \nType 2.\nEnter a number 1 or 2.", "");
    size = + prompt("Choose a size please:\n1-small, 2$; \n2-medium, 3$\n3-big, 4$\nEnter a number 1, 2 or 3.", "");
} while ((typeOfCoffee != 1 && typeOfCoffee != 2) && (size != 1 && size != 2 && size != 3))

document.write(`Your ${coffeeSizeAndPrice[0][size-1]} coffee "${coffeeName[typeOfCoffee-1]}" is ready. Please pay ${coffeeSizeAndPrice[1][size-1]}$.`);