'use strict';

function stairs(n)
{ 
 let moving = '';
 let row;
 if(n<1) return '';
 else {
    for (let i = 0; i < n; i++) {
        row = "";
        for (let j = 0; j < n-1-i; j++) {
            row += "    ";
        }

        for (let k = 1; k <= i+1; k++) {
            if (k>=10) row += k-10 + ' ';
            else row += k + ' ';
        }

        for (let m = i+1; m > 0; m--) {
             if (m==1) row += m ;
             else if (m>=10) row += m-10 + ' ';
             else row += m + ' ';
        }
        if (i==n-1) moving += row;
        else moving += row +'\n'; 
 
   } 
   return moving;
 }
}
console.log(stairs(3));