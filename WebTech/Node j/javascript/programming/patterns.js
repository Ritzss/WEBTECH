// ? pattern 1:
/*
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
*/

let n = 5;
let pattern = "";
for (let row = 1; row<=n; row++){
    for (let col = 1; col<= n; col++){
        pattern += "* ";
        }
        pattern += "\n";
    }
console.log(pattern);


// ? pattern 2 :
/* 
11111
22222
33333
44444
55555
*/

let n1 = 5;
let pattern2 = "";
for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
        pattern2 += row ;
        }
    pattern2 +="\n";
}
console.log(pattern2);

// ? pattern 3: 
/* 
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
*/

let n2 = 5;
let pattern3 = "";
for(let col = 1; col<= n2; col++){
    for (let row = 1; row <= n2; row++) {
        pattern3 += row;
}
pattern3 += "\n";
}
console.log(pattern3);

// ? pattern 4:
/*
1 0 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 0 1
*/

let n3 = 5;
let pattern4 = "";
for (let row = 1; row <= n3; row++) {
    for (let col = 1; col <= n3; col++) {
        if (col % 2 === 0) {
            pattern4 += 0;
        } else {
            pattern4 += 1;
        }
    }
    pattern4 += "\n";
}
console.log(pattern4);

//? pattern 5:
/*
11111
00000
11111
00000
11111
*/

let n4 = 5;
let pattern5 = "";
for (let row = 1; row <= n4; row++) {
    for (let col = 1; col <= n4; col++) {
        if (row % 2 === 0) {
            pattern5 += 0;
        } else {
            pattern5 += 1;
        }
    }
    pattern5 += "\n";
}
console.log(pattern5);

// ? pattern 6:
/*
*
**
***
****
*****
*/

let n5 = 5;
let pattern6 = "";
for (let row = 1; row <= n5; row++) {
    for (let col = 1 ; col <= row; col++) {
        pattern6 += "*";
        }
    pattern6 += "\n";
    }
console.log(pattern6);



// ? pattern 7:
 /*
 *****
 ****
 ***
 **
 *
 */

// let n6 = 5;
// let pattern7 = "";
// for (let row = 1; row <= n6; row++) {
//     for (let col = row ; col <= n6; col++) {
//         pattern7 += "*";
//         }
//     pattern7 += "\n";
//     }
// console.log(pattern7);

// let n6 = 5;
// let pattern7 = "";
// for(let row = 1; row <= 5 ; row++) {
//     for(let col = 1; col <= 5; col++) {
//         if( row == 1 || col == 1 || row + col <= n6+1) {
//             pattern7 += "*";
//             }
//             else {
//                 pattern7 += " ";
//             }
//         }
//         pattern7 += "\n";
// }
// console.log(pattern7);


let n6 = 5;
let pattern7 = "";
for(let row = 1; row <= 5 ; row++) {
    for(let col = 1; col <= 5; col++) {
        if( row == 1 || col == 1 || row + col <= n6+1) {
            pattern7 += "*";
            }
            else {
                pattern7 += " ";
            }
        }
        pattern7 += "\n";
}
console.log(pattern7);


 // ? pattern 8
 /*
    *
   **
  ***
 ****
*****
  */
let n7 = 5;
let pattern8 = "";
for(let row = 1; row <= n7 ; row++) {
    for(let col = 1; col <= n7; col++) {
        if( row == n7 || col == n7 || row + col >= n6+1) {
            pattern8 += "*";
            }
            else {
                pattern8 += " ";
            }
        }
        pattern8 += "\n";
}
console.log(pattern8);

// ? pattern 9
/*
*****
*   *
*   *
*   *
*****
*/
let n8 = 5;
let pattern9 = "";
for(let row = 1; row <= n8 ; row++) {
    for(let col = 1; col <= n8; col++) {
        if( row == 1 || col == 1 || row == n8 || col == n8) {
            pattern9 += "*";
            }
            else {
                pattern9 += " ";
            }
        }
        pattern9 += "\n";
}
console.log(pattern9);


// ? patter10
/*
*   *
 * *
  *
 * *
*   *
*/
let n9 = 5;
let pattern10 = "";
for(let row = 1; row <= n8 ; row++) {
    for(let col = 1; col <= n8; col++) {
        if( row == col || row + col == n9+1) {
            pattern10 += "*";
            }
            else {
                pattern10 += " ";
            }
        }
        pattern10 += "\n";
}
console.log(pattern10);

// ? pattern11:
/*
*****
*###*
*###*
*###*
*****
*/

let n10 = 5;
let pattern11 = "";
for(let row = 1; row <= n10 ; row++) {
    for(let col = 1; col <= n10; col++) {
        if( row == 1 || col == 1 || row == n10 || col == n10) {
            pattern11 += "*";
            }
            else {
                pattern11 += "#";
            }
        }
        pattern11 += "\n";
}
console.log(pattern11);

// ? pattern12:
/*
*/

let n11 = 5;
let pattern12 = "";
for(let row = 1; row <= n11 ; row++) {
    for(let col = 1; col <= n11; col++) {
        if( row == n11 || col == n11 || row + col == n11+1) {
            pattern12 += "*";
            }
            else {
                pattern12 += " ";
            }
        }
        pattern12 += "\n";
}
console.log(pattern12);

let n12 = 5;
let pattern13 = "";
for(let row = 0; row <= n12 ; row++) {
    for(let col = 0; col <= n12; col++) {
        if( col < row ) {
            pattern13 += " ";
            }
            else {
                pattern13 += "*";
            }
        }
        pattern13 += "\n";
}
console.log(pattern13);


