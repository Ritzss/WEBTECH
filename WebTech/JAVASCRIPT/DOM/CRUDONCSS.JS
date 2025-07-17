// ! CRUD on css
let head = document.head;
let body = document.body;
let css = document.createElement('style');
let h1 = document.createElement('h1');

h1.innerHTML = `happy birthday bobby sir`;
css.innerHTML = `body{ background:linear-gradient(to right,rgb(211, 20, 20),rgb(66, 151, 255),#26bf08,#e3ff0f );
 text-align : center;
 margin: 35vh;
 font-size: 40px;
 font-family: cursive;
 color: white;
 text-transform: capitalize;
 } `;
h1.animate(
    [
        {opacity : 0},
        {opacity : 1}
    ],
    {
        duration: 6000
    }
);
head.append(css);
body.append(h1);

