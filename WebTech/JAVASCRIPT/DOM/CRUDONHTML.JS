// ! crud on html
// ? CREATE
    // A. createElement():
        // it will create an element / node 
        //  syntax: document.createElement('tagname');
        // example:
        //  let newElement = document.createElement('div');
    // B. to add the content to the element:
        // 1. innerHTML:
        //  syntax: newElement.innerHTML = 'content';
        // example:
        //  newElement.innerHTML = 'Hello World'; 
        // 2. textContent:
        //  syntax: newElement.textContent = 'content';
        // example:
        //  newElement.textContent = 'Hello World';
        // 3.innerText:
        //  syntax: newElement.innerText = 'content';
        // example:
        //  newElement.innerText = 'Hello World';
    // C. to add the element to the DOM:
        // 1. appendChild():
        //  syntax: parentElement.appendChild(newElement);
        // example:
        //  document.body.appendChild(newElement);
        // 2. append():
        //  syntax: parentElement.append(newElement);
        // example:
        //  document.body.append(newElement);
// ? READ
    // A. to get the element from the DOM:
        // 1. getElementById():
        //  syntax: document.getElementById('id');
        // example:
        //  let element = document.getElementById('id');
        // 2. getElementsByClassName():
        //  syntax: document.getElementsByClassName('class');
        // example:
        //  let elements = document.getElementsByClassName('class');
        // 3. getElementsByTagName():
        //  syntax: document.getElementsByTagName('tagname');
        // example:
        //  let elements = document.getElementsByTagName('tagname');
        // 4. querySelector():
        //  syntax: document.querySelector('selector');
        // example:
        //  let element = document.querySelector('selector');
        // 5. querySelectorAll():
        //  syntax: document.querySelectorAll('selector');
        // example:
        //  let elements = document.querySelectorAll('selector');
        // 6. getElementsByName():
        //  syntax: document.getElementsByName('name');
        // example:
        //  let elements = document.getElementsByName('name');
// ? UPDATE
    // A. to update the element in the DOM:
        // 1. innerHTML:
        //  syntax: element.innerHTML = 'new content';
        // example:
        //  element.innerHTML = 'Hello World';
        // 2. textContent:
        //  syntax: element.textContent = 'new content';
        // example:
        //  element.textContent = 'Hello World';
        // 3.innerText:
        //  syntax: element.innerText = 'new content';
        // example:
        //  element.innerText = 'Hello World';
// ? DELETE
    // A. to delete the element from the DOM:
        // 1. removeChild():
        //  syntax: parentElement.removeChild(childElement);
        // example:
        //  document.body.removeChild(newElement);
        // 2. remove():
        //  syntax: element.remove();
        // example:
        //  newElement.remove();

// !==============================CREATE=================================================
/*
let h1 = document.createElement('h1');

h1.innerHTML = '<i>hello <u>World</u></i>';
h1.innerText = '<i>hello <u>World</u></i>';
h1.textContent = '<i>hello <u>World</u></i>';

console.log(h1);

/* 
let container = document.getElementById('container');
console.log(container);
container.appendChild(h1);

*/

//console.log(document);
//console.log(document.body);
//console.log(document.head);
/*
let body = document.body;

body.appendChild('hello how are you?'); //!error
body.appendChild(h1);

body.append(h1); // append() is used to add the element to the DOM
body.append('hello how are you?'); // append() is used to add the element to the DOM
*/


let body = document.body;
let section = document.createElement('section');
let h1 = document.createElement('h1');
let h2 = document.createElement('h2');
let p = document.createElement('p');

h1.innerHTML = '<i>hello <u>World</u></i>';
h2.innerHTML = '<i>how are <u>you</u></i>';
p.innerHTML = '<i>i am <u>fine</u></i>';

body.append(section);
section.append(h1);
section.append(h2);
section.append(p);


// !=================================================update=================================================
h1.innerHTML = '<i>hello <u>ritanshu</u></i>';
let h = document.getElementById('updatetag');
h.innerHTML = 'NEVER GONNA LET YOU DOWN';
let marquee = document.createElement('marquee');
marquee.innerHTML = 'NEVER GONNA GIVE YOU UP ,NEVER GONNA LET YOU DOWN';
body.replaceChild(marquee,h);

//! =================================================delete=================================================
let p3 = document.getElementById('para');
body.removeChild(p3);

