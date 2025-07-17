// ! DOM_selectors
// 1. getElementById
// 2. getElementsByClassName
// 3. getElementsByTagName
// 4. querySelector
// 5. querySelectorAll
// 6. getElementsByName

// ? getElementById
// The getElementById() method returns a reference to the first object with the specified value of the ID attribute.
// The getElementById() method is a method of the Document interface.
// It returns the first element that matches the specified selector.
// It is a method of the Document interface.

// example
let element = document.getElementById("myId");
console.log(element); // <div id="myId">Hello World</div>

// ? getElementsByClassName
// The getElementsByClassName() method returns a HTMLCollection of elements that have all of the classes specified in the parameter.
// The getElementsByClassName() method is a method of the Document interface.
// It returns a HTMLCollection of elements that match the specified class name.
// It is a method of the Document interface.
// example
let myclass = document.getElementsByClassName("myClass");
console.log(myclass); // HTMLCollection [div, span, p]

let class2 = document.getElementsByClassName("myClass2");
console.log(class2); // HTMLCollection [div, span, p]


// ? getElementsByTagName
// The getElementsByTagName() method returns a HTMLCollection of elements with the specified tag name.
// The getElementsByTagName() method is a method of the Document interface.
// It returns a HTMLCollection of elements that match the specified tag name.
// It is a method of the Document interface.
// example
let elements = document.getElementsByTagName("div");
console.log(elements); // HTMLCollection [div, div, div]
let elements2 = document.getElementsByTagName("span");
console.log(elements2); // HTMLCollection [span, span]
let elements3 = document.getElementsByTagName("p");
console.log(elements3); // HTMLCollection [p, p, p]

// ? getElementsByName
// The getElementsByName() method returns a NodeList of elements with the specified name attribute.
// The getElementsByName() method is a method of the Document interface.
// It returns a NodeList of elements that match the specified name attribute.
// It is a method of the Document interface.
// example
let myname = document.getElementsByName("myName");
console.log(elements); // NodeList [input, input, input]
let myname2 = document.getElementsByName("myName2");
console.log(elements2); // NodeList [input, input, input]

let username = document.getElementsByName("username");
console.log(username); // NodeList [input, input, input]
let password = document.getElementsByName("password");
console.log(password); // NodeList [input, input, input]

console.log(username[0]); // <input type="text" name="username">
console.log(username[0].name);
console.log(username[0].value); // ""
console.log(username[0].type); // "text"

username[0].value = "anurag";
console.log(username[0].value); // "anurag"
username[1].value = "chitranjan";
console.log(username[1].value); // "chitranjan"
username[2].value = "anirudh";
console.log(username[2].value); // "anirudh"
username[3].value = "ritanshu";
console.log(username[3].value); // "ritanshu"

password[0].value = "anurag";
console.log(password[0].value); // "anurag"


// ? querySelector
// The querySelector() method returns the first element that matches the specified CSS selector(s).
// The querySelector() method is a method of the Document interface.
// It returns the first element that matches the specified selector.
// It is a method of the Document interface.
// example
let myquery = document.querySelector("#myId");
console.log(myquery); // <div id="myId">Hello World</div>
let myquery2 = document.querySelector(".myClass");
console.log(myquery2); // <div class="myClass">Hello World</div>
let myquery3 = document.querySelector("div");
console.log(myquery3); // <div>Hello World</div>

// ? querySelectorAll
// The querySelectorAll() method returns a NodeList of all elements that match the specified CSS selector(s).
// The querySelectorAll() method is a method of the Document interface.
// It returns a NodeList of elements that match the specified selector.
// It is a method of the Document interface.
// example
let myqueryall = document.querySelectorAll("#myId");
console.log(myqueryall); // NodeList [div#myId]
let myqueryall2 = document.querySelectorAll(".myClass");
console.log(myqueryall2); // NodeList [div.myClass, span.myClass, p.myClass]
let myqueryall3 = document.querySelectorAll("div");
console.log(myqueryall3); // NodeList [div, div, div]
let myqueryall4 = document.querySelectorAll("span");
console.log(myqueryall4); // NodeList [span, span]
let myqueryall5 = document.querySelectorAll("p");
console.log(myqueryall5); // NodeList [p, p, p]




