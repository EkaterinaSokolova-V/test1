'use strict';
// console.log("Exercise 1:");
// const encryptedString = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr.";
// let decryptedString;
// let arr = encryptedString.split(" ");
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 1; j < arr[i].length; j++) {
//     if (arr[i][j-1]=="b" && arr[i][j]=="r") {
//     arr[i]=arr[i].replace("br","");
//     }
//   }
// }
// decryptedString = arr.join(" ");
// console.log(decryptedString);
///////////////////////
// console.log("Exercise 2:");
// for (let i = 2; i <= 10; i++) {
//   i%2 == 0 ? console.log(i): "";
// }
//////////////////////
console.log("Exercise 3:");
const ar = [")", "(", ")", "(", ")", "{", "}", "(", ")", "["];
let count = [0,0,0], m = "", 
arr = [["(", ")"], ["[", "]"], ["{", "}"]], f = [0,0,0];
  
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < 3; j++) {
          if (ar[i] == arr[j][1] && count[j] == 0 && f[j] != 2) {
            f[j] = 2;
          } else if (ar[i] == arr[j][0] && f[j] != 2) {
              count[j] += 1; 
              f[j] = 1;
           } else if (ar[i] == arr[j][1] && f[j] != 2) {
          count[j] -= 1;
          f[j] = 1;
      }
    }
  }
for (let i = 0; i < 3; i++) {
  if (f[i] == 1) count[i] == 0 ? m += `все скобки ${arr[i].join(' ')} парные\n` : m += `не все скобки ${arr[i].join(' ')} парные\n`;
  if (f[i] == 2) m += `не все скобки ${arr[i].join(' ')} парные\n`;
}
console.log(m);
  // switch (ar[i]) {
  //   case '(': 
  //     count[0] += 1; f[0] = 1;
  //     break;
  //   case ')': 
  //     count[0] -= 1; f[0] = 1;
  //     break;
  //   case '[': 
  //     count[1] += 1; f[1] = 1;
  //    break;
  //   case ']': 
  //     count[1] -= 1; f[1] = 1;
  //     break;
  //   case '{': 
  //     count[2] += 1; f[2] = 1;
  //     break;
  //   case '}': 
  //     count[2] -= 1; f[2] = 1;
  //     break;
  // }
//////////////////////////
// console.log("Exercise 4:");
// const a = 3, b = 10, op = "/";
// let result = 0;
// switch(op) {
//     case("+"):
//     result = a + b;
//     break;
//     case("-"):
//     result = a - b;
//     break;
//     case("*"):
//     result = a * b;
//     break;
//     case("/"):
//     b != 0 ? result = a / b : result = "Check the imput data";
//     break;
// }
// console.log(a+op+b+"="+result);
//////////////////////////////////////////
// console.log("Exercise 5:");
// const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "."];
// let alphabetRev = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "."];
// alphabetRev.reverse();
// const str = "you are the best qa ever.";
// let encryptedStr = "", decryptedStr = "";
// let index;

// for (let i = 0; i < str.length; i ++)
// {
//     index = alphabet.indexOf(str[i]);
//     encryptedStr += alphabetRev[index];
// }

// encryptedStr =encryptedStr[0].toUpperCase() + encryptedStr.slice(1);
// console.log(encryptedStr);

// encryptedStr = encryptedStr.toLowerCase();
// for (let i = 0; i < str.length; i ++)
// {
//     index = alphabetRev.indexOf(encryptedStr[i]);
//     decryptedStr += alphabet[index];
// }

// decryptedStr =decryptedStr[0].toUpperCase() + decryptedStr.slice(1);
// console.log(decryptedStr);
