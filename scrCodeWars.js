// function sumMul(n,m){
//     //your idea here
//       let r=0, result = 0;
//       if (n>=m || (n<=0 && m<=0)) return "INVALID";
//       else {
//         let i=0;
//         do {
//             i++;
//             r=n*i; 
//             if (r>=m) break;
//             result+=r;
//             console.log(r);
//         } while(r<m)
//       }
//       return result;
// }
// console.log(sumMul(4,-7));

function noBoringZeros(n) {
    let str = String(n);
    //console.log(str[str.length-1]);
    for(let i=str.length-1; i>=0; i--) {
        if (str[i] == 0) {
            //console.log(111);
            str.replace();
            //++i;
        }
    }
    return str;
  }

console.log(noBoringZeros(1450));