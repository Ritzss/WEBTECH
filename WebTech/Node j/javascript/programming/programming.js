// ? wap to check the number is even or not 
// ? wap to check the number is odd or not

// let num = prompt("Enter a number: ");
// num = parseInt(num);
// if (num % 2 == 0) {
//     console.log("Even");
// }
// else {
//     console.log("Odd");
// }


// let num2 = prompt("Enter a number: ");
// num3 = parseInt(num2);
// if (num3 % 2 != 0) {
//     console.log("Odd");
// }
// else {
//     console.log("Even");
// }


// ?wap to print 3 table

// let num = 3;
// let num2 = prompt("Enter a number: ");
// for (let i = 1; i <= num2; i++) {
//     console.log(num + " * " + i + " = " + (num * i));
// } 

// ?  check number is armstrong or not
// let num = prompt("Enter a number: ");
// num = parseInt(num);
// let sum = 0;
// let temp = num;
// while (temp > 0) {
//     let digit = temp % 10;
//     sum = sum + (digit * digit * digit);
//     temp = Math.floor(temp / 10);
// }
// if (sum == num) {
//     console.log(num + " is an Armstrong number.");
// }
// else {
//     console.log(num + " is not an Armstrong number.");
// }


// ? factorial of a number
// let num = 10;
// num = parseInt(num);
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//     fact = fact * i;
// }
// console.log("Factorial of " + num + " is: " + fact);

// ? sum of digits factorials of a number 
// let num = 345;
// let sum = 0;
// while (num > 0) {
//     let digit = num % 10;
//     let fact = 1;
//     let i = 1;
//     while (i <= digit) {
//         fact = fact * i;
//         i++;
//     }
//     sum = sum + fact;
//     num = parseInt(num / 10);
// }
// console.log(`sum of digits factorials is: ${sum}`);

// ?sum of digits factorials of a number with type casting
// let num2 = 345;
// let sum2 = 0;
// num_tostr = num2.toString();
// for (let num of num_tostr) {
//     let digit = parseInt(num);
//     let fact2 = 1;
//     for (let i = 1; i <= digit; i++) {
//         fact *= i;
//     }
//     sum2 += fact2;
// }
// console.log(`sum of digits factorials is: ${sum2}`);

// ?sum of even digits of a number
// let num = 2345678;
// let sum = 0;
// while (num > 0){
//     let digit = num%10 ;
       // sum of even digits
//     if (digit %2 == 0){
//         sum += digit;
//     }
        //end
//     num = parseInt(num/10);
// }
// console.log(`sum of even digits is: ${sum}`);

// ?sum of odd digits of a number
// let num = 456789;
// let sum = 0;
// while (num > 0){
//     let digit = num%10 ;
     //sum of odd digits
//     if (digit % 2 != 0){
//         sum += digit;
//     }
     //end
//     num = parseInt(num/10);
// }
// console.log(`sum of odd digits is: ${sum}`);

// ? wap to find number is pallindrome or not
// ! without type casting
// let num = 12244221;
// let rev = 0;
// let temp = num;
// while (temp > 0) {
//     let digit = temp % 10;
//     rev = rev * 10 + digit;
//     temp = parseInt(temp /10);
// }
// if (rev == num) {
//     console.log(num + " is a palindrome number.");
// }
// else {
//     console.log(num + " is not a palindrome number.");
// }

// ! with type casting
// let num2 = 12244221;
// let rev = num2.toString().split("").reverse().join("");
// let rev2 = Number(rev);
// if (num2 == rev2) {
//     console.log(num2 + " is a palindrome number.");
// }
// else {
//     console.log(num2 + " is not a palindrome number.");
// }

// ? WAP to find largest number among 3 numbers
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// if (num2 > num1 && num2 > num3) {
//     largest = num2;
//     console.log("Largest number is: " + largest);
// }   
// else if (num3 > num1 && num3 > num2) {
//     largest = num3;
//     console.log("Largest number is: " + largest);
// }
// else {
//     console.log("Largest number is: " + num1);
// }

// ? WAP to find largest number among 5 numbers
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// let num4 = 40;
// let num5 = 50;
// if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//     largest = num2;
//     console.log("Largest number is: " + largest);
// }   
// else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//     largest = num3;
//     console.log("Largest number is: " + largest);
// }
// else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//     largest = num4;
//     console.log("Largest number is: " + largest);
// }
// else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
//     largest = num5;
//     console.log("Largest number is: " + largest);
// }
// else if (num1 == num2 && num1 == num3 && num1 == num4 && num1 == num5) {
//     console.log("All numbers are equal");
// }
// else {
//     console.log("Largest number is: " + num1);
// }

// ! another way to find largest number among 5 numbers

// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// let num4 = 40;
// let num5 = 50;
// if (num1 > num2) {
//     if(num1 > num3) {
//         if (num1 > num4) {
//             if (num1 > num5) {
//                 console.log("Largest number is: " + num1);
//             }
//             else {
//                 console.log("Largest number is: " + num5);
//             }
//         }
//         else {
//             console.log("Largest number is: " + num4);
//         }
//     }
//     else {
//         if (num3 > num4) {
//             if (num3 > num5) {
//                 console.log("Largest number is: " + num3);
//             }
//             else {
//                 console.log("Largest number is: " + num5);
//             }
//         }
//         else {
//             console.log("Largest number is: " + num4);
//         }
//     }

// }
// else {
//     if (num2 > num3) {
//         if (num2 > num4) {
//             if (num2 > num5) {
//                 console.log("Largest number is: " + num2);
//             }
//             else {
//                 console.log("Largest number is: " + num5);
//             }
//         }
//         else {
//             console.log("Largest number is: " + num4);
//         }
//     }
//     else {
//         if (num3 > num4) {
//             if (num3 > num5) {
//                 console.log("Largest number is: " + num3);
//             }
//             else {
//                 console.log("Largest number is: " + num5);
//             }
//         }
//         else {
//             console.log("Largest number is: " + num4);
//         }
//     }
// }


// WAP TO CHECK IF NUMBER IS ARMSTRONG OR NOT 

// let num = 57867;
// let num_s = num.toString();
// let lnnum = num_s.length;
// let sum = 0;
// let n = num;
// while (n > 0) {
//      let rem = n % 10;
//      pow = rem ** lnnum;
//      sum = sum + pow;
//      n = parseInt(n / 10);
//      }
//      if (sum == num) {
//           console.log(`the number ${num} is armstrong number`);
//      }
//      else {
//           console.log(`the number ${num} is not armstrong number`);
//           }

// WAP to check number is a strong number or not 
// strong number is a number whose sum of factorial of digits is equal to the number itself 
// ex = 145 is a strong number because 1! + 4! + 5! = 1 + 24 + 120 = 145

// let num = 145;
// let sum = 0;
// let n = num;
// while (n > 0 ) {
//      let rem = n%10;
//      let fact = 1;
//      for (let i =  1; i <= rem ; i++) {
//           fact *= i;
//      }
//      sum += fact;
//      n = parseInt(n/10);
// } 
// if (sum == num){
//      console.log(`The ${num} is a strong number`);
// }
// else {
//      console.log(`The ${num} is not a strong number`);
// }

//? WAP to check number is a perfect number or not
// perfect number is a number which is equal to the sum of its proper divisors
// ex = 6 is a perfect number because 1 + 2 + 3 =6
// let num = 8128;
// let sum = 0;
// let n = num;
// let i = 1;
// while (i < n/2){
//      if (n % i == 0){
//           sum += i;
//      }
//      i++;
// }
// if (sum == num){
//      console.log(`The ${num} is a perfect number`);
//      }
// else{
//      console.log(`The ${num} is not a perfect number`);
//      }

// ? WAP to check number is a prime number or not
// prime number is a number which is only divisible by 1 and itself
// ex = 7 is a prime number because it is only divisible by 1 and 7
// let num = 7;
// let n = true;
// for (let i = 2; i <= num/2; i++) { 
//      if (num % i == 0) {
//           n = false;
//           break;
//           }
//      }
// if (n){
//      console.log(`The ${num} is a prime number`);
// }
// else{
//      console.log(`The ${num} is not a prime number`);
// }

// let num = 7;
// if (num <= 1){
//      console.log(`${num} is not a prime number`);
// }
// else if (num == 2 || num == 3){
//      console.log(`${num} is a prime number`);
// }
// else{
//      let i = 2;
//      let count =0;

//      while (i <= num/2){
//      if (num % i == 0){
//           console.log(`The ${num} is not a prime number.`)
//           count++;
//           break;
//      }
//      i++;

// }

//      if(count == 0) {
//           console.log(`The ${num} is a prime number.`)
//      }
// }


 // ? WAP to check number is a fibonacci or not
 // fibonacci number is a number which is a part of fibonacci series
 // ex = 1,1,2,3,5,8,13,21,
 // let num = 13;
//  let num = 13;
//  let a=0;
//  let b=1;
//  let c=0;
//  let count = 0;
//  while (c <= num) {
//      c = a + b;
//      a = b;
//      b = c;
//      count++;
//      }
//      if (c == num) {
//           console.log(`${num} is a fibonacci number`);
//      }
//      else {
//           console.log(`${num} is not a fibonacci number`);
//      }

// ? to print fibonacci series up to n terms
// let n = 10;
// let a = 0;
// let b = 1;
// let c = 0;
// let count = 1;
// while (count < n){
//      console.log(c);
//      c = a + b;
//      a = b;
//      b = c;
//      count++;
// }     


// ? WAP to print FizzBuzz till n number.
// Rule: if number % 3 ===0 then Fizz
// Rule: if number % 5 ===0 then Buzz
// Rule: if number % 3 ===0  and number % 5 ===0 then FizzBuzz
// Rule: if not same number as string.

// let n = 20;
// for (let i = 1; i <= n; i++) {
//      if (i % 3 === 0 && i % 5 === 0) {
//           console.log("FizzBuzz");
//           }
//           else if (i % 3 === 0) {
//                console.log("Fizz");
//                }
//                else if (i % 5 === 0) {
//                     console.log("Buzz");
//                     }
//                     else {
//                          console.log(i.toString());
//                          }
// }



// ! ============== STRINGS =================
// ? i/o ---> "JavaScript";
// ? o/p ---> "tpircSavaJ";
// ~ With inbuilt Functions
// let string = "JavaScript";
// let reverseString = string.split("").reverse().join("");
// console.log(reverseString);

// ? i/o ---> "JavaScript";
// ? o/p ---> "JvSrp";
// hint ---> print even index characters
// let str = "javascript";
// let evenIndexChar = string.split("").filter((char, index) => index % 2 == 0).join("");
// console.log(evenIndexChar);
// ~ With out inbuilt Functions
// let string = "JavaScript";
// let evenstr = "";
// for (let i = 0; i <= string.length - 1; i++) {
//      if (i % 2 == 0) {
//           evenstr += string[i];
//      }
// }
// console.log(evenstr);

// ? i/o ---> "JavaScript is the Best";
// ? o/p ---> "JavaScript+is+the+Best";
// let str = "JavaScript is the Best";
// let stringArray = string.split(" ");
// console.log(stringArray.join("+"));
//without using split and join function
// let str = "JavaScript is the Best";
// let stringArray = string.split("");
// let result = "";
// for (let i = 0; i <= stringArray.length - 1; i++) {
//      if (stringArray[i] == " ") {
//           result += "+";
//           }
//           else {
//                result += stringArray[i];
//                }
// }
// console.log(result);

// ? i/o ---> "I Love JavaScript";
// ? o/p ---> "JavaScript Love I";
// ~ With inbuilt Functions
// let str = "I Love JavaSript";
// let reverseString = str.split("").reverse().join("");
// console.log(reverseString);
// ~ Without inbuilt Functions


// let str1 = "I Love JavaScript";
// let output = "";
// let word = "";
// for (let char of str1){
//      if (char == " "){
//           output = word + " " + output;
//           word = "";
//      }else{
//           word += char;
//      }
// }
// console.log(output);

// ? i/o ---> "Hello World";
// ? o/p ---> { H : 1, e : 1, l : 3, o : 2, W : 1, r : 1 , d : 1 };
// Hint: count of each character
// let input = "Hello World"
// let output = {};
// for (let char of input){
//      console.log(char);
//      if (char == " "){
//           continue;
//      }
//      if (output.hasOwnProperty(char)){
//           output[char] += 1;
//      }else {
//           output[char] = 1
//      }
// }
// console.log(output);
// ? i/o ---> "JavaScript";
// ? o/p ---> "aai";
//  Hint: print only vowels
// let str = "JavaScript";
// let vowels = "aeiouAEIOU";
// let result = "";
// for (let i = 0; i <= str.length; i++) {
//      if (vowels.includes(str[i])) {
//           result += str[i];
//           }
//      }
//      console.log(result);
// ? i/o ---> "JavaScript is the best";
// ? o/p ---> {a : 2 , i : 2, e : 2};
// Hint: Vowels count.
// let str = "JavaScript is the best";
// let vowels = "aeiouAEIOU";
// let result = {};
// for (let i = 0; i <= str.length; i++) {
//      if (vowels.includes(str[i])) {
//           if (result[str[i]]) {
//                result[str[i]] += 1;
//                } else {
//                     result[str[i]] = 1;
//                     }
//      }
// }
// console.log(result);

// let str = "JavaScript is the best";
// let vowels = "aeiouAEIOU";
// let result = {};
// for (let char of str) {
//      if (vowels.includes(char)) {
//           if (result[char]) {
//                result[char] += 1;
//                } else {
//                     result[char] = 1;
//                     }
//      }
// }
// console.log(result);

// ? WAP to find the largest substring of the string.
// Ex: "I Love JavaScript" ---> "JavaScript"
// let str = "I Love JavaScript";
// let words = str.split(" ");
// let maxLength = 0;
// let longestWord = "";
// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//         longestWord = words[i];
//     }
// }
// console.log(longestWord);




// ? WAP to remove all the spaces from the string without inbuilt functions.
// Ex: "JavaScript JavaScript JavaScript I don't Like JavaScript, but JavaScript Loves me, I can't avoid";
// output: "JavaScriptJavaScriptJavaScriptIdon'tLikeJavaScript,butJavaScriptLovesme,Ican'tavoid";
// let str = `JavaScript JavaScript JavaScript I don't Like JavaScript, but JavaScript Loves me, I can't avoid`;
// let result = "";
// for (let i = 0; i <= str.length; i++) {
//      if (str[i] != " ") {
//           result += str[i];
//           }
//           }
//      console.log(result);


// ? WAP to get the count of each word
// Ex: "JavaScript JavaScript JavaScript I dont Like JavaScript but JavaScript Loves me I cant avoid";
// output : {JavaScript: 5, I : 2, ...so on };
// let str = "JavaScript JavaScript JavaScript I dont Like JavaScript but JavaScript Loves me I cant avoid";
// let words = str.split(" ");
// let wordCount = {};
// for (let i = 0; i  <= words.length-1; i++) {
//      if (words[i] !="") {
//           if (wordCount[words[i]]) {
//                wordCount[words[i]] += 1;
//                }
//           else {
//                wordCount[words[i]] = 1;
//                }
//           }
// }
// console.log(wordCount);


// let str = "JavaScript JavaScript JavaScript I don't Like JavaScript, but JavaScript Loves me I can't avoid ";
// let output = {};
// let word = "";
// for( let char of str){
//      console.log(char);
//      if (char === " "){
//           if (output[word]){
//                output[word] += 1;
//           }
//           else{
//                output[word] = 1;
//           }
//      word = "";
//      }
//      else{
//           word += char;
//      }
// }

// console.log(output);


// ? wap to convert string into lowercase 
//! with inbuild function
// let str1 = "Hello World";
// console.log(str.toLowerCase());

//! without inbuild function using ASCII value
// let str2 = "Hello World";
// let output = "";
// for(let i = 0; i <= str2.length-1; i++ ){
//      charCode = str2.charCodeAt(i);
     // console.log(i, str2[i]);
//      if (charCode >= 65 && charCode <= 90) {
//           output += String.fromCharCode(charCode + 32);
//           }
//      else {
//            output += str2[i];
//           }
// }
// console.log(output);


//?  wap to convert string into uppercase
//! with inbuild function
// let str3 = "Hello World";
// console.log(str3.toUpperCase());

//! without inbuild function using ASCII value
// let str4 = "Hello World";
// let output1 = "";
// for(let i = 0; i <= str4.length-1; i++ ){
//      charCode = str4.charCodeAt(i);
//      // console.log(i, str4[i]);
//      if (charCode >= 97 && charCode <= 122) {
//           output1 += String.fromCharCode(charCode - 32);
//           }
//           else {
//                output1 += str4[i];
//                }
//                }

//                console.log(output1);


// ? wap to reverse each word in the given string
// ex : "I Love JavaScript"
// output : "I evol pihpsretcaJ"

// let s = "I Love JavaScript";
// let words = s.split(" ");
// let output = "";
// for (let i = 0; i <= words.length - 1; i++) {
//      let word = words[i];
     // console.log(word);
//      let reversedWord = "";
//      for (let j = word.length - 1; j >= 0; j--) {
//           reversedWord += word[j];
          // console.log(reversedWord);
//           }
//           output += reversedWord + " ";
//           }
//           console.log(output);

//! another way to reverse each word in the given string
// let input = "I Love JavaScript ";
// let output = "";
// let word = "";

// for(let char of input){
//      if (char === " "){
//           output += word +" ";
//           word = "";
//      }else{
//           word = char + word;
//      }
// }
// console.log(input);
// console.log(output);


//! ==================================array================================================

// ? wap to find maximum value in the array
/*
let arr = [134, 52, 63, 47, 85, 46, 745, 83, 932, 450];
let max = arr[0];
for (let i = 0; i <= arr.length - 1; i++) {
     if (arr[i] > max) {
          max = arr[i];
          }/
}
console.log(max);
? wap to find minimum value in the array
let arr2 = [12, 212, 33, 43, 56, 65, 76, 89, 69, 150];
let min = arr2[9];
for (let i = 0; i <= arr2.length - 1; i++) {
     if (arr[i] < min) {
          min = arr2[i];
          }
}
console.log(min);
? wap to remove duplicate values from the array
let arr3 = [1, 12, 33, 64, 55, 62, 73, 84, 90, 55, 73];
let unique = [];
for (let i = 0; i <= arr3.length - 1; i++) {
     if (!unique.includes(arr3[i])) {
          unique.push(arr3[i]);
     }
}
console.log(unique);

let arr3 = [1, 12, 33, 64, 55, 62, 73, 84, 90, 55, 73];
var result = {};
for(let i = 0 ; i < arr3.length ; i++){
result[arr3[i]] = true;
}
*/

// ? wap to merge two arrays without inbuild functions
// let arr4 = [34,67,43,56,324];
// let arr5 = [12,23,45,67,89];
// for(let element of arr5){
//      arr4.unshift(element);
// }
// console.log(arr4);

//? WAP to check 2 arrays are equal or not without inbuild functions
// let arr6 = [1, 2, 3, 4, 5];
// let arr7 = [1, 2, 3, 4, 5];
// let flag = true;
// if (arr6.length !== arr7.length) {
//      flag = false;
//      } else {
// for (let i = 0; i <= arr6.length - 1; i++) {
//      if (arr6[i] != arr7[i]) {
//           flag = false;
//           break;
//      }
// }
// }
// console.log(flag);
// 

// ? wap to find lenght of array without lenght property
// let arr = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];
// let count = 0;
// for (let char of arr) {
//      count++;
//      }
// console.log(count)

// ? wap to print count of each element in the array 
// let arr = [1, 2, 2, 3, 3, 3, 4, 5, 6, 6, 7, 8, 8, 8, 8];
// let count = {};
// for(let element of arr){
//      if(count[element]){
//           count[element] += 1;
//      }else{
//           count[element] = 1;
//      }
// }
// console.log(count);
// ? wap to list repatative elements in the array
// let ar = [1, 2, 2, 3, 3, 3, 4, 5, 6, 6, 7, 8, 8 ];
// let count = {};
// for (let element of ar) {
//      if (count[element]) {
//           count[element] += 1;
//           } else {
//           count[element] = 1;
//           }
//      }
// console.log(count);
// ? wap to check if array is subset of another array without inbuilt
// let arr1 = [1,2,5,6,3,8,7];
// let arr2 = [1,2,3,4,5,6,7,8,9,10];
// let flag = true;
// for (let i = 0; i <= arr1.length - 1; i++) {
//      console.log(i);
//      if (arr1[i] != arr2[i]) {
//           console.log(i);
//           console.log("=========================");
//           console.log(arr1[i]);
//           console.log("=========================");
//           console.log(arr2[i]);
//           flag = false;
//           //               break;
//           }
//           }
// console.log(flag);


// ? wap to list all evens at end of array with out using inbuild function
// let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evar = [];
// let odar = [];
// for(let element of ar){
//      if(element % 2 == 0){
//           evar.push(element);
//           }
// }
// console.log(evar);
// console.log(ar);
// for(element of ar){
//      if (element % 2 != 0){
//           odar.push(element);
//      }
// }
// console.log(odar);
// console.log(ar);
// for(element of evar){
//      odar.push(element);
// }
// console.log(odar)


// ? wap to find even lenght in Object
// let obj1 = { ename: "Ritanshu", age: 23};
// let obj2 = {ename:"rohit", age:34 , gender:"male"};
// for (let key in obj2){
//      if (key.length % 2 == 0) {
//           console.log(key);
//      }
// }
// ? wap to print string based values in an Object
// let obj3 = {
//      ename:"ritanshu",
//      lastname:"babuta",
//      age:23,
//      gender:"male",
// }
// for(let keys in obj3){
//      if (typeof obj3[keys] == "string"){
//           console.log(obj3[keys]);
//      }
// }

// ? wap to print both keys and values in an array of evry property
// let obj4={
//      ename:"ritanshu",
//      age:23,
//      gender:"male",
// }
// let key2 =[];
// for(let keys in obj4){
//     key2.push(keys,obj4[keys]);
//      }
     
// console.log(key2);
// ? wap to check an object contains nested object or not 
// let obj ={
//      ename:"ritanshu",
//      age:23,
//      gender:"male",
//      address:{
//           street:"street1",
//           city:"city1",
//           state:"state1",
//           }
// }
// for (let key in obj){
//      if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
//           console.log(obj[key]);
//      }
// }

// ? wap to merge 2 objects into 1 object without inbuild function
// let obj1 = {
//      ename:"ritanshu",
//      age:23,
//      gender:"male", 
//      }
// let obj2 = {
//           street:"street1",
//           city:"city1",
//           state:"state1",
//           }
// let obj3 = {};

// for(let key in obj1){
//      obj3[key] = obj1[key];
//      }
// for(let key in obj2){
//      obj3[key] = obj2[key];
//      }
// console.log(obj3);