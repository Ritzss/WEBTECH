// ! CRUD On CSS
let body = document.body;
let section = document.createElement("section");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");

div1.innerHTML = "Home";
div2.innerHTML = "About";
div3.innerHTML = "Contact";
div4.innerHTML = "Login";


section.appendChild(div1, div2, div3, div4);

console.log(section);
body.appendChild(section);

// ? CSS Create
// section.style.setProperty("border", "2px solid red");
// section.style.border = "2px solid red";
// section.style.cssText = "border: 2px solid red";
// section.style.setProperty("font-size", "20px");

section.style.fontSize = "40px";

section.style.cssText = `
border: 1px solid gray;
display: flex;
justify-content: space-between;
background-color: teal;
color: white;
padding: 10px;
`

section.style.cssText += `
border: solid blue;
`

/*!
div1.style.cssText = "border: 2px solid blue";
div2.style.cssText = "border: 2px solid blue";
div3.style.cssText = "border: 2px solid blue";
div4.style.cssText = "border: 2px solid blue";
*/

// ? CSS Read;
console.log(section.style.getPropertyValue("display"));
console.log(section.style.getPropertyValue("color"));
console.log(section.style.getPropertyValue("background-color"));
console.log(section.style.getPropertyValue("align-items"));


// ? CSS Update
section.style.cssText += "background-color: crimson; color: black; padding: 20px;";

// ? CSS Delete
section.style.removeProperty("border");
section.style.removeProperty("background-color");