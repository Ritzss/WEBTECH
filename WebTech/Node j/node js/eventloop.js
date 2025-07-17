console.log("start");
var app = "this is my app";
console.log(app);
function a(){
    var a = 10;
    console.log(a);
    console.log("i am function a");
}

function b(){
    var b = 20;
    console.log(b);
    a();
    console.log("i am function b");
}

function c(){
    var c = 30;
    console.log(c);
    b();
    console.log("i am function c");
}

function d(){
    var d = 40;
    console.log(d);
    c();
    console.log("i am function d");
}

d();
console.log("end");

// ? case 2:
// synchronus task

var a =20;

function sayhii(){
    console.log("I am function hii");
}
function saybye(){
    console.log("I am function bye");
}

function sayname(){
    console.log("I am function ritanshu");
}

function sayage(){
    console.log("I am function 21");
}

console.log(a);

var b = 30;
console.log(b);
sayhii();
saybye();
sayname();
sayage();

//? case 3:
// Synchronous Tasks + Timers

function sayHii() {
  console.log("I am function Hii");
}

var a = 10;

setTimeout(function Timer0() {
  console.log("I am timer 0s");
}, 0);

setTimeout(function Timeer2() {
  console.log("I am timer 2s");
}, 2000);

function sayBye() {
  console.log("I am function Bye");
}

var b = 20;

setInterval(function IntervalTimer1_5() {
  console.log("I am Interval 1.5s ");
}, 1500);

setTimeout(function Timer3() {
  console.log("I am timer 3s");
}, 3000);

sayHii();
sayBye();

setTimeout(function Timer1() {
  console.log("I am timer 1s");
}, 1000);

setTimeout(function Timer5() {
  console.log("I am timer 5s");
}, 5000);

console.log(a);
console.log(b);

// ? case 4:
// Synchronous Tasks + Timers + poll phase
const fs = require("fs");

function sayHii() {
  console.log("I am function Hii");
}

fs.readFile("eventloop.js", () => {
    console.log("I am readFile callback - 1");
} );

var a = 10;

setTimeout(function Timer0() {
  console.log("I am timer 0s");
}, 0);

fs.readFile("eventloop.js", () => {
    console.log("I am readFile callback - 1");
} );

setTimeout(function Timer2() {
  console.log("I am timer 2s");
}, 2000);

function sayBye() {
  console.log("I am function Bye");
}

var b = 20;


setTimeout(function Timer3() {
  console.log("I am timer 3s");
}, 3000);

sayHii();
sayBye();

setTimeout(function Timer1() {
  console.log("I am timer 1s");
}, 1000);

setTimeout(function Timer5() {
  console.log("I am timer 5s");
}, 5000);

console.log(a);
console.log(b);
