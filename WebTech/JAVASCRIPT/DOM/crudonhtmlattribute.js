let body = document.body;
let h1 = document.createElement('h1');
h1.innerHTML = "i am h1 tag";


// ? create
h1.setAttribute("id", "myh1");
h1.setAttribute("style", "color: blue; font-size: 30px;");
h1.setAttribute("class","demo demo1 demo2");

// ? read
console.log(h1.getAttribute("class"));
console.log(h1.getAttribute("id"));
console.log(h1.getAttribute("style"));
console.log(h1.getAttribute("height"));

// ? update
h1.setAttribute("style", "color: red; font-size: 40px;");
h1.setAttribute("class", "demo demo3 demo4");

// ? delete
h1.removeAttribute("style");
h1.removeAttribute("class");

body.append(h1);