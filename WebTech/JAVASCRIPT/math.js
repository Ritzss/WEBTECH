/*
math is a inbuild oject which is used to allow user to perform mathematical operations 
*/

//! ================================math properties============================================

console.log(Math);
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.PI);
console.log(Math.SQRT2);

// ! ======================================MATH METHODS=========================================
// ? ABS()
//RETURNS ABSOLUTE VALUE OF THE GIVEN NUMBER
EX:
console.log(Math.abs(4.66666));
console.log(Math.abs(420));
console.log(Math.abs(796));
console.log(Math.abs(-666));
console.log(Math.abs(-566));

// ? ROUND()
//returns round figure of the value
console.log(Math.round(4.66666));
console.log(Math.round(4.9));
console.log(Math.round(7.6));
console.log(Math.round(4.5));
console.log(Math.round(4.2));

// ? CEIL()
//returns the highest round figure value
console.log(Math.ceil(4.66666));
console.log(Math.ceil(7.66666));
console.log(Math.ceil(2.66666));

// ? FLOOR()
//returns the lowest round figure value
console.log(Math.floor(4.66666));

// ? SQRT()
// return sqare root of the value
console.log(Math.sqrt(-4.66666));
console.log(Math.sqrt(5.66666));
console.log(Math.sqrt(6.66666));
console.log(Math.sqrt(7.66666));

// ? CBRT()
// return cube
console.log(Math.cbrt(4.66666));
console.log(Math.cbrt(6.66666));
console.log(Math.cbrt(7.66666));
console.log(Math.cbrt(9));

// ? pow()
console.log(Math.pow(4,6));
console.log(Math.pow(3,5));
console.log(Math.pow(3,6));
console.log(Math.pow(2,8));

// ? min()
console.log(Math.min(10,29,48,57,6,87));
console.log(Math.min(4,10,9,4,7,6,7));
console.log(Math.min(4,10,9,4,7,6,7,66));
console.log(Math.min(4,4,10,9,4,7,6,7,96));


// ? max()
console.log(Math.max(10,29,48,57,6,87));
console.log(Math.max(4,10,9,4,7,6,7));
console.log(Math.max(4,10,9,4,7,6,7,66));
console.log(Math.max(4,4,10,9,4,7,6,7,96));

// ? random()
console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.random()*10);
console.log(Math.random()*1000);

// ? trunc()
console.log(Math.trunc(4.66666));