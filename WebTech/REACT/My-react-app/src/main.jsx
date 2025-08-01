import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import QspiderComponent from "./QspiderComponents";

// console.log(React);// It is the main package which maintain the core functionality of reactjs.
// console.log(ReactDOM); // It help to work with DOM 

const root = ReactDOM.createRoot(document.getElementById("root1"));
// createRoot ----- it will create the root element of react,whole react code will render here.

// root.render("hello i am from React JS");

// root.render(<h1>Welcome to react world</h1>);

// root.render(<section>
//     <div>HOME</div>
//     <div>ABOUT</div>
//     <div>CONTACT</div>
//     <div>LOGIN</div>
// </section>);

root.render(<QspiderComponent />);
root.render(<App />);
