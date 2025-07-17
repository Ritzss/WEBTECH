let body = document.body;
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let btn = document.createElement('button');
btn.innerHTML = 'click me';

div1.setAttribute('id', 'grandparent');
div2.setAttribute('id', 'parent');
div3.setAttribute('id', 'child');   

body.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(div3);
div3.appendChild(btn);


// ? event bubbling
// let gp = document.getElementById('grandparent');
// let p = document.getElementById('parent');
// let c = document.getElementById('child');
// let btn1 = document.querySelector('button');

// gp.addEventListener('click', function() {
//     console.log('grandparent triggered');
// }, false);
// p.addEventListener('click', function() {
//     console.log('parent triggered');
// }, false);
// c.addEventListener('click', function() {
//     console.log('child triggered');
// }, false);
// btn1.addEventListener('click', function() {
//     console.log('button clicked');
// }, false);

// ? event capturing
let gp = document.getElementById('grandparent');
let p = document.getElementById('parent');
let c = document.getElementById('child');
let btn1 = document.querySelector('button');

gp.style.cssText=`
width:400px;
height:500px;
display:flex;
align-items:center;
justify-content:center;
background:linear-gradient(to right, rgb(211, 20, 20), rgb(66, 151, 255));
margin:auto;
`;
p.style.cssText=`
width:300px;
height:400px;
display:flex;
align-items:center;
justify-content:center;
background:linear-gradient(to right, rgb(255, 242, 0), rgb(25, 170, 0));`;
c.style.cssText=`
width:200px;
height:300px;
display:flex;
align-items:center;
justify-content:center;
background:linear-gradient(to right, hsl(235, 65.30%, 47.50%), hsl(308, 100.00%, 62.90%));`;

btn.style.cssText=`
padding: 10px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.5) 10px 9px 0px;`;

gp.addEventListener('click', function() {
    alert('grandparent triggered');
}, true);
p.addEventListener('click', function() {
    alert('parent triggered');
}, true);
c.addEventListener('click', function() {
    alert('child triggered');
}, true);
btn1.addEventListener('click', function() {
    alert('button clicked');
}, true);
