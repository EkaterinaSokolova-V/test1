'use strict';
//function declaration
//function name (param, ..) {code}

//function exprecion
//let name = function(param, ...) {code};

//or
//let name = (param, ...) => {code};


/////HW
///////3.Напишите функцию, которая создает и выводит вконсоль 
///////кастомное приветствие с именем, которое вы передаете в функцию.
function sayHello(name) {
    console.log(`Hello ${name}!`);
}

const firstName = "Katya";
sayHello(firstName);

//////2. Напишите функцию с калькулятором (используйте предыдущий код), 
//////в которую, в качестве параметров, передаются три переменные, 
//////две - числовые и третья отвечает за знак арифметической операции 
//////(*, /, -, +). Проверьте работу функции.
//////example:  function calculate(a, b, operator){}

let a = 2,
    b = 3,
    op = '/';

let simpleCalc = (a, b, op) => {
    if (op == '+') result = a + b;
    else if (op == '-') result = a - b;
    else if (op == '*') result = a * b;
    else if (op == '/' && b != 0) result = a / b;
    else result = 'check number b';
    return result;
};
 
console.log(simpleCalc(a, b, op));

/////////////////////////////////////////////////
let bmi = (height, weight) => +(weight/height**2).toFixed(2);
console.log(bmi(1.65,55));

let celsius = f => +(( f-32 ) * 5/9).toFixed(1);
console.log(celsius(100));

