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
let confirm = "",
    lactoseFree = false,
    paymentMethod = "";
const ingridients = [["ingr1.1", "ingr1.2", "ingr1.3", "milk"], ["ingr2.1", "ingr2.2", "ingr2.3", "milk"]];

function ask() {
   do {
        typeOfCoffee = + prompt("Choose your coffee please:\nType 1 \nType 2.\nEnter a number 1 or 2.", "");
        size = + prompt("Choose a size please:\n1-small, 2$; \n2-medium, 3$\n3-big, 4$\nEnter a number 1, 2 or 3.", "");
    } while ((typeOfCoffee != 1 && typeOfCoffee != 2) && (size != 1 && size != 2 && size != 3)); 
    confirm = window.confirm(`Please comfirm your order.\nYour order is: ${coffeeSizeAndPrice[0][size-1]} coffee "${coffeeName[typeOfCoffee-1]}"\nPrice is ${coffeeSizeAndPrice[1][size-1]}$.`);
}

function check(confirm) {
    if(!confirm
        ) ask();
}

alert("Welcom message.\n\nThere are 2 types of coffe: Type1 and Type2;\nand 3 size of cup:\n1-small, 2$; \n2-medium, 3$\n3-big, 4$\n");
ask();
check(confirm);
alert(`Your are ordered ${coffeeSizeAndPrice[0][size-1]} coffee "${coffeeName[typeOfCoffee-1]}"\nYour coffee has ingridients: ${ingridients[typeOfCoffee-1]}.`);
check(confirm);
lactoseFree = window.confirm(`Are you lactose free?`);
if (lactoseFree) {
    confirm = window.confirm(`Please comfirm your order.\nYour order is: ${coffeeSizeAndPrice[0][size-1]} coffee "${coffeeName[typeOfCoffee-1]}"\nYour coffee doesn't has ${ingridients[typeOfCoffee-1].pop()}.\nPrice is ${coffeeSizeAndPrice[1][size-1]}$.`);
}

alert("Your coffee is ready!\nThank you!");