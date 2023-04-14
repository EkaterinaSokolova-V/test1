// 'use strict';

// // let n = 15;
// // let str = "";
// // if (n < 1) str = '-';
// // else if (n >= 1) {
// //     for (let i = 0; i < n; i++) 
// //     {
// //         let row = "";
// //         for (let j = 0; j < n -i-1; j ++) row += " ";   

// //         for (let k = 1; k <= i+1; k ++)
// //             k >= 10 ? row += k-10: row += k;
// //         for (let m = i; m > 0; m--) 
// //             m >= 10 ? row += m-10: row += m;

// //         str += row + "\n";
// //     }

// //     for (let i = n-2; i >= 0; i--) 
// //     {
// //         let row = "";
// //         for (let j = 1; j < n-i; j ++) row += " ";   

// //         for (let k = 1; k <= i+1; k ++)
// //             k >= 10 ? row += k-10: row += k;   

// //         for (let m = i; m > 0; m--)
// //             m >= 10 ? row += m-10: row += m;

// //         str += row + "\n";
// //     }
// // }
// // console.log(str);
// ////////////////////////////////////////////////////////////////
// // let n = 5,
// //     num = 1,
// //     str ='';
// // let arr = new Array(n);

// // for (let i = 0; i < n; i++) {
// //     arr[i] = new Array(i+1);
// // }

// // for (let i = 0; i < n; i++) {
// //     for (let j = i; j < n; j++) {
// //         arr[j][i] = num;
// //         num++;
// //     }
// //     str += arr[i].join(' ') + '\n';
// // }

// // console.log(str);

// ///////////////

// function fun() {
//     //const arr = ["(", ")", "(", ")", "{", "}" ,"[" ,"]" , "(", ")"];
//     const arr = ["[" ,"(" ,"(", "{",")", "}", ")" ,"]"];
// let arrNew = [];
// let f = 0;

// for (let i = 0; i < arr.length; i++) {
//     if('(' == arr[i] || '[' == arr[i] || '{' == arr[i]) {
//         arrNew.push(arr[i]);
//     } else {
//         if(arrNew.length == 0)  { 
//         //console.log('no pair');
//         //f = 1;
//         //break;
//         return false;
//         } 

//         let bracket = arrNew.pop();
//         if(arr[i] == ')' && bracket != '(') { 
//             console.log('no pair for ()');
//             //break;
//             return false;
//          } 
//         if(arr[i] == ']' && bracket != '[') { 
//             console.log('no pair for []');
//             //break;
//             return false;
//         } 
//         if(arr[i] == '}' && bracket != '{') { 
//             console.log('no pair for {}');
//             //break;
//             return false;
//         } 
//       }
//     } 
//     if(arrNew.length == 0) console.log('Ok!');
// }

// fun();

function rec(z) {
    return z > 0 ? z * rec(z - 1) : 1
}
console.log(rec(6));
if (6 < 5 || 8 == 8) {
    console.log('correct')
} else {
    console.log('wrong')
}

console.log('hello')

const obj1 = { x: 1, y: 2 };
let obj2 = obj1;
obj2.x = 3;
console.log( (!true));

var counter = 0, continue1
do {
    counter++
    continue1 = false
} while (continue1 == true)
console.log( counter);

function foo(n) {
    return n > 0 ? n + foo(n - 1) : 0;
  }
  
  console.log(foo(10));

  function toggle(a) {
    return !a
}
console.log(toggle(true));

const numbers = [1, 2, 3, 4, 5]
let myproduct = 0
for (let i = 0; i <= numbers.length - 2; i++) {
    myproduct += numbers[i] * numbers[i + 1]
}
console.log(myproduct);

let a = 42
let b = a
let c = a
b = 69
c = b
console.log(a);

console.log((9 & 5) + (7 | 3))

const mixed = [1, { x: 2.001, y: '2' }, 3, 'a', ['b', 'z', { x: 2, y: '2' }], 'c'];
console.log(mixed[4][2].x);

const lost = { x: 10, y: [4, 8, 15, 16, 23, 42] };
const found = lost;
found.x = 5;
found.y[0] = 7;
console.log(lost.x * found.y[2] * lost.y[0]);

const numbers2 = [1, 2, 3, 4, 5]
let mymap = numbers2.map(n => n * 2 + 3)
console.log(mymap);

function tryHarder(z) {
    tryHarder(z - 1)
}
tryHarder(5)

for (let i = 5; i < 10; i++) { console.log(i) }

let value = 5
if (value > 12 && value < 10) {
    value++
} else {
    value = value / 0
}
console.log(value);
