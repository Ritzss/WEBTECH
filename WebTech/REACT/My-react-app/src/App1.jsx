import React from "react";
// import ReactDOM from "react-dom/client";
// import './App.css';

//! ============Component==================
/* 
- a react component is a logical block of code
- it is a js function
can be created by 2 ways 
    - class base 
    -function based

we cannot use components ass it is , we have to call as an element 
element should be closed only either by paired tag or self closing tag 

*/

//! ===============class based ==========================
// import { Component } from "react";
// class App1 extends Component{
//     render(){
//         return <h1>I am from class component</h1>
//     }
// }

// export default App1;

//!=====================function based ===============================

//? named function
// function App1(){
//     return <h1>I am from function component - named function</h1>;
// }

//? anonymous function
// let App1 = function (){
//     return <h1>I am from function component - anonymous function</h1>;
// }

//? arrow function
//  let App1 = ()=>{
//     return <h1>I am from function component - arrow function</h1>;
// }
// export default App1;

/*
!============================ JSX ================================

    *JSX stands for JavaScript XML
    *JSX allows you to write HTML-like syntax directly in your JavaScript code
    *JSX can contain JavaScript expressions within curly braces {}
    *JSX can be used to create React elements, which are the building blocks of React applications
    *This "markup" is then converted to JavaScript objects(React elements) by a tool like Babel that the browser can understand.
*/

//? Rules of JSX
/*
    *Rule 1: 
        * We should not return multiple elements directly, we have to wrap them in a single parent element.
        * We have to use a single parent element to wrap multiple elements.
        * We can use <div>, <></>, <React.Fragment> or any other element as a wrapper.
*/
//~ Case 1:
var App1 = () => {
    return (
        <div>
            <h1>Welcome to React</h1>
            <p>This is a simple React component.</p>
            <p>Enjoy coding with React!</p>
        </div>
    );
}
// export default App1;


// Case 2: Using React Fragment
var App1 = () => {
    return (
        <>
            <h1>Welcome to JavaScript</h1>
            <p>This is a simple JavaScript component.</p>
            <p>Enjoy coding with JavaScript!</p>
        </>
    );
}
// export default App1;

// Case 3: Using React.Fragment
var App1 = () => {
    return (
        <React.Fragment>
            <h1>Welcome to MongoDB</h1>
            <p>This is a simple MongoDB component.</p>
            <p>Enjoy coding with MongoDB!</p>
        </React.Fragment>
    );


}
// export default App1;




//? Rule 2:
// JSX Elements are case-sensitive
// we have to write in lowercase only
// if we write in uppercase, it will be treated as a custom component

var App1 = () => {
    return (
        <div>
            <h1>Welcome to React</h1>
            <p>This is a simple React component.</p>
            <p>Enjoy coding with React!</p>
            <H1>Welcome to React</H1>
        </div>
    );
}
// export default App1;


//? Rule 3: 
// It follows lower camel case naming convention
var App1 = () => {
    return (
       <>
       <form onSubmit="">
        <label >Name:</label>
        <input type="text" onChange="" />
        </form>   
       </>
    );
}
// export default App1;


//? Rule 4:
// If we want to use JS variable or expression inside JSX, we have to use curly braces {}
// If we want to convert html tag from JS variable, we have to use return statement
// js--------->html <-------return
// html--------->js <-------curly braces {}

var App1 = ()=>{
    let name = "Ritanshu";
    let age = 20;
    let course = "MERN Stack Development";
    let isLoggedIn = true;

    console.log(name, age, course, isLoggedIn);
    return (
        <div>
            <h1>Welcome to React, {name}</h1>
            <p>Your age is {age}</p>
            <p>You are learning {course}</p>
            <p>{isLoggedIn ? "You are logged in" : "You are logged out"}</p>
        </div>
    );
}
// export default App1;


// ? Rule 5:
// The class attribute in HTML is written as className in JSX
// This is because class is a reserved keyword in JavaScript
var App1 = ()=>{
    return (
        <>
        <nav id="navbar">
            <div className="flex-items">Home</div>
            <div className="flex-items">About</div>
            <div className="flex-items">Contact</div>
            <div className="flex-items">Login</div>
        </nav>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="input-field" />
        </>
    )
}

// export default App1;


//? Rule 6:
// Every element should be closed properly
// If an element does not have any children, it should be self-closed
var App1 = ()=>{
    return(
        <>
        <h1>Welcome to React</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorum minima saepe nobis facilis itaque magnam quia nulla explicabo dolor expedita nam tempore ipsam, et iste eveniet facere vitae. Facilis aut ad ipsum laborum, facere vero aperiam omnis libero? Aspernatur culpa illum omnis commodi non enim possimus quod quo? Ullam veniam deleniti perferendis ex maiores molestias veritatis ea nobis ratione. Iste sint, quas dolor accusantium ratione maiores modi repellat? Rerum ratione reprehenderit accusamus, rem voluptatum eveniet vel ipsa ducimus adipisci totam aliquid veritatis amet suscipit, ea maiores sequi libero distinctio autem nisi cum architecto excepturi. Totam nostrum veritatis rem suscipit!</p>
        <br />
        <label htmlFor="">name:</label>
        <input type="text" />
        <br />
        <label htmlFor="">email:</label>
        <input type="email" />
        <br />
        <img src="" alt="" />
        </>
    )
}

// export default App1;
//! ============================ Props ================================


/*
 *props are short for "properties" and are used to pass data from a parent component to a child component in React.
 *Props are read-only and cannot be modified by the child component.
 */

 //! ============================ Passing Props ================================

// ? Case 1: 

import ChildComponent from "./childcomponent";
var App1 = ()=>{
    console.log("I am from App1");
    return (
        <>
        <h1>i am from App1</h1>
        <ChildComponent name="Ritanshu" age="20" course="MERN Stack Development" />
        <ChildComponent name="rohit" age="25" course="Full Stack Development" />
        <ChildComponent name="ketan" age="22" course="Data Science" />
        </>

    )
}

// export default App1;

//? case 2:
var App1 = () => {
    return (
        <>
            <h1>Welcome to React</h1>
            <ChildComponent 
            name="Ritanshu" 
            age={20} 
            course="MERN Stack Development" 
            skills={["JavaScript", "React", "Node.js"]} 
            friends={{
                fname: "Anandu",
                yof: "10",
                city: "Delhi",
                package: 3
            }}
            isPlaced={false}
            isDeadInside={false}
            package={5}
             />
        </>
    );
}

// export default App1;


//! ============================ Props Children ================================

// import ChildComponent from "./childcomponent";
var App1 = ()=>{
    return(<>
    <h1>i am from App Component</h1>
    <ChildComponent>
        <h2>I am from Child Component</h2>
        <p>This is a child component inside App1</p>
    </ChildComponent>
    </>)
}


// export default App1;

//! ============================ Props DESTRUCTURING ================================

    var App1 = () => {
    return (
        <>
            <h1>Welcome to React</h1>
            <ChildComponent 
            name="Ritanshu" 
            age={20} 
            course="MERN Stack Development" 
            skills={["JavaScript", "React", "Node.js"]} 
            friends={{
                fname: "Anandu",
                yof: "10",
                city: "Delhi",
                package: 3
            }}
            isPlaced={false}
            isDeadInside={false}
            package={5}
             />
        </>
    );
}

// export default App1;

// ! ================================= default props =================================


var App1 = ()=>{
    return(
        <>
        <h1>Welcome to React</h1>
        <ChildComponent name="Ritanshu" age={20} course="MERN Stack Development" isDeadInside="true"/>
        <ChildComponent age={25} course="Full Stack Development" />
        <ChildComponent name="Ketan" age={22} course="Data Science" isPlaced="true" />
        <ChildComponent name="Anandu" course="Web Development" />
        <ChildComponent name="Rohan" age={24} course="Mobile App Development" />
        </>
    )

}


export default App1;


//!================================ Application with CSS ====================================

// import Products from "./Products.jsx";

// var App1 = () =>{
//     return(
//         <>
//         <div>

//             {/* <Products /> */}
//         </div>
//         </>
//     )

// }

// // export default App1;
