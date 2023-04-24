//ARRAY SORT
// const arr = [2, 12, 46, 39, 4579, 658];
// console.log(arr);
// for (let i = 0; i < arr.length - 1; i++) {
//      for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//      }
// }

// for (let i = 0; i < arr.length-1; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//        if (arr[i] <= arr[j]) {
//            let temp = arr[i];
//            arr[i] = arr[j];
//            arr[j] = temp;
//        }
//     }
// }

// console.log(arr);

//FIND MAX AND MIN
// let max = min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if(max<arr[i]) max = arr[i];
//     if(min>arr[i]) min = arr[i];
// }

// console.log(max, min);

/////////////////////////////////////////////

//6.2

let count = 0;
function recursion() {
    //let count = 0;
    count++;
    console.log(count);
    if (count > 50) return;
    recursion();
}
//recursion();

//factorial
function f (n) {
    if (n == 1) return 1;
    return n * f(n - 1);
    //return n == 1 ? 1 : n * f(n - 1);
}
//console.log(f(100));

//fibanachi
function fib(n) {
    if (n==0) return 0;
    if (n==1) return 1;
    return fib(n - 1) + fib(n - 2);
}
//console.log(fib(8));

//Closer: counter
function counter() {
    let count1 = 0;
    return function createCount() { 
        count1++;
        console.log(count1);
    }
}
let counter1 = counter();
// counter1();
// counter1();
// counter1();

let counter2 = counter();
//counter2();
//counter2();

// createCount();
// createCount();
// createCount();
/////////////////////////////////////////
//From interv.
function generate(seed) {
    let private = seed;
//    console.log(`Generate Private = ${private}`);
    return function (params) {
        private += seed;
//        console.log(`unknown Private = ${private}`);
        return private + params;
    };
} 
let a = generate(1);
let b = generate(2);
//a(1)+a(2)+b(3)+b(4) = ?
//console.log(a(1)+a(2)+b(3)+b(4));
// console.log(a(1)+a(2));
// console.log(b(3)+b(4));

////////////////////////////////////////
//Arrays
const arr0 = new Array(3);//length = 3
let arr_1 = new Array(1,2,3);//array with 2 elements
let arr_2 = [];
arr_2[0] = "ddd";
//arr1.lenght = 1; //delet all elements with index >1
//console.log(arr_1.at(-1)); //=arr1[arr1.lenght-1]

// pop/push // shift/unshift
arr_1.pop();
//console.log(arr_1);

arr_1.push(3,4, true);
//console.log(arr_1);

arr_1.shift();
//console.log(arr_1);

arr_1.unshift(1, "text");
//console.log(arr_1);

let arr_4 = arr_2.concat(arr_1, "Hello");
//console.log(arr_4);

//reverse change this arrya
console.log(arr_4.reverse());
console.log(arr_4);

let str = "Hello js!";
let arrN = str.split("l");
console.log(arrN);
let nStr = arrN.join("l");
console.log(nStr);

function createSteps(n) {
    let str = "";
    for (let i = 0; i <= n; i++) {
        str += " ".repeat(i) + "I" + "\n";
    }
    return str;
}

//console.log(createSteps(5));

//slice splice(a,b), b is not included
const arr_5 = ["t", "e", "s", "t"];

//to make copy of Array with slice
const arrCopy = arr_5.slice();
arrCopy[0] = "T";
arrCopy.push("!");
console.log(arrCopy, arr_5);

//const arrNew1 = arr_5.slice(1, 3);
//const arrNew1 = arr_5.slice(1);
const arrNew1 = arr_5.slice(-3, -1);
console.log(arrNew1);

//copy some elements to other array
let newArr = [arr_5[1], arr_5[0]];
console.log(newArr);

//splice: like slice, but can delete/add elements as well
//start from index=0, delet 1 element, add "T"
console.log(arr_5.splice(0, 1, "T"));//return deleted elements
console.log(arr_5.splice(1, 1, "E", "S"));
console.log(arr_5);

//indexOf/lastIndexOf
const aRR = "Hello world!".split("");
//console.log(aRR.indexOf("H"));


//to find all "l"
let idx = aRR.indexOf("l");
while (idx != -1) {
    console.log(idx);
    idx = aRR.indexOf("l", idx + 1)
}

//if it´s unic?
if (aRR.indexOf("H") === aRR.lastIndexOf("H")) {
    console.log("unic");
} else console.log("Not unic");

//not find NaN, always NaN != NaN
const arrNaN = ["l", NaN, 2, 5];
console.log(arrNaN.indexOf(NaN));
//but:
console.log(arrNaN.includes(NaN));

//find/findIndex, if not find element find returns undefined, index -1
const arrNum = [2,3,4,6,7,8,9];
const isOdd = element => element % 2 == 1;
console.log(arrNum.find(isOdd));
//arrNum.find(element => element % 2 == 1)
console.log(arrNum.findIndex(isOdd));

//to find all elements: filter
console.log(arrNum.filter(element => element % 2 == 1));

console.log(arrNum.filter((element, i) => element % 2 == 1 && i % 2 ===1));

console.log("2,3,4,6,7,8".split(",").filter((el, i) => el % 2 == 1));

//map runs function for every element of array and returns new array
//forEach does not return new array (returns undefined)
const squire = (n) => n * n;
console.log(arrNum.map(squire));
//console.log(arrNum.map((n) =>  n * n));

console.log(arrNum.map((el, i, arrNum) => i % 2 === 1 ? el * el : el));
console.log(arrNum);

//reduce/reduceRight
//arr.reduce(callback fun, 0) 0 - es default value 
console.log(arrNum.reduce((sum, el, i) => sum + i % 2 === 1 ? el : -el, 0));
console.log(arrNum.reduce((sum, el, i) => sum *= el, 1));