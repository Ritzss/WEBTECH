//!=================================conditional statements===============================================================

//types of conditional statement
/*
if
if else
if else if
nested if
switch case
*/

// ? if statement
var age = 21;
if (age >= 18){
    console.log('HI, you are eligble to vote.')
}

var age = 15;
if (age >= 18){
    console.log('Sorry, you are not eligble to vote.')
}


// ? if else statement
 var age = 21;
if (age >= 18){
    console.log('HI, you are eligble to vote.')
}
else {
    console.log('Sorry, you are not eligble to vote.')
}

// ? else if ladder 
var merncourse = ['mongo','express','react','node'];
var javacourse = ['java','sql','spring','web'];
var pythoncourse = ['python','sql','spring','web'];

var course = prompt("Enter the course:");

if (course === 'mern'){
    console.log(`you are going to take these courses ${merncourse}`);
}
else if (course === 'java'){
    console.log(`you are going to take these courses ${javacourse}`);
}
else if (course === 'python'){
    console.log(`you are going to take these courses ${pythoncourse}`);
}
else{
    console.log(`you are going to take the courses`);
}

// ? nested if

var data = {coursetype:"dev", course:"mern"};
var data = {coursetype:"dev", course:"java"};
var data = {coursetype:"dev", course:"python"};
var data = {coursetype:"testing", course:"automation"};


if (data.coursetype === "dev"){
    if(data.course === "mern"){
        console.log('you can take mern stack')
    }
    else if(data.course === "java"){
        console.log('you can take mern stack')
    }
    else if(data.course === "python"){
        console.log('you can take mern stack')
    }
}
else if (data.coursetype === 'testing'){
    if (data.coursetype === 'automation'){
        console.log("you are a testing student")
    }
}
else {
    console.log("you are not a student here.")
}


// ? switch case

var day = 5;

switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("not a day brooo!!!");
        break;
}

// ?switch case 2
var counter = 0;
function updatecounter(data){
switch(data){
    case 'increment':
        counter += 1;
        console.log(counter);
        break;
    case 'decrement':
        counter -= 1;
        console.log(counter);
        break;
    case 'reset':
        counter = 0;
        console.log(counter);
        break;
}
}

console.log("initial value", counter);
updatecounter('increment');
updatecounter('increment');
updatecounter('decrement');
updatecounter('reset');
