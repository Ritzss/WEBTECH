let h1 = document.createElement('h1');
let body = document.body;
h1.innerHTML = `i am a heading`;
body.append(h1);
h1.setAttribute('id', 'heading');
h1.setAttribute(onclick,'fun1()');
// h1.setAttribute(onclick, 'fun2()');
// h1.setAttribute(onclick, 'fun3()');  // by using this method, only the last function will be executed

function fun1() {
    console.log('heading clicked from fun1');
}
function fun2() {
    console.log('heading clicked from fun2');
}
function fun3() {
    console.log('heading clicked from fun3');
}

// ? case 2:
let button = document.createElement('button');
button.innerHTML = 'click me';

button.addEventListener('click', fun1 );
button.addEventListener('click', fun2 );
button.addEventListener('click', fun3 );
body.append(button);


