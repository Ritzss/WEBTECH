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
};
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
};
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
};
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
};
// export default App1;

//? Rule 3:
// It follows lower camel case naming convention
var App1 = () => {
  return (
    <>
      <form onSubmit="">
        <label>Name:</label>
        <input type="text" onChange="" />
      </form>
    </>
  );
};
// export default App1;

//? Rule 4:
// If we want to use JS variable or expression inside JSX, we have to use curly braces {}
// If we want to convert html tag from JS variable, we have to use return statement
// js--------->html <-------return
// html--------->js <-------curly braces {}

var App1 = () => {
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
};
// export default App1;

// ? Rule 5:
// The class attribute in HTML is written as className in JSX
// This is because class is a reserved keyword in JavaScript
var App1 = () => {
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
  );
};

// export default App1;

//? Rule 6:
// Every element should be closed properly
// If an element does not have any children, it should be self-closed
var App1 = () => {
  return (
    <>
      <h1>Welcome to React</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorum
        minima saepe nobis facilis itaque magnam quia nulla explicabo dolor
        expedita nam tempore ipsam, et iste eveniet facere vitae. Facilis aut ad
        ipsum laborum, facere vero aperiam omnis libero? Aspernatur culpa illum
        omnis commodi non enim possimus quod quo? Ullam veniam deleniti
        perferendis ex maiores molestias veritatis ea nobis ratione. Iste sint,
        quas dolor accusantium ratione maiores modi repellat? Rerum ratione
        reprehenderit accusamus, rem voluptatum eveniet vel ipsa ducimus
        adipisci totam aliquid veritatis amet suscipit, ea maiores sequi libero
        distinctio autem nisi cum architecto excepturi. Totam nostrum veritatis
        rem suscipit!
      </p>
      <br />
      <label htmlFor="">name:</label>
      <input type="text" />
      <br />
      <label htmlFor="">email:</label>
      <input type="email" />
      <br />
      <img src="" alt="" />
    </>
  );
};

// export default App1;
//! ============================ Props ================================

/*
 *props are short for "properties" and are used to pass data from a parent component to a child component in React.
 *Props are read-only and cannot be modified by the child component.
 */

//! ============================ Passing Props ================================

// ? Case 1:

import ChildComponent from "./childcomponent";
var App1 = () => {
  console.log("I am from App1");
  return (
    <>
      <h1>i am from App1</h1>
      <ChildComponent
        name="Ritanshu"
        age="20"
        course="MERN Stack Development"
      />
      <ChildComponent name="rohit" age="25" course="Full Stack Development" />
      <ChildComponent name="ketan" age="22" course="Data Science" />
    </>
  );
};

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
          package: 3,
        }}
        isPlaced={false}
        isDeadInside={false}
        package={5}
      />
    </>
  );
};

// export default App1;

//! ============================ Props Children ================================

// import ChildComponent from "./childcomponent";
var App1 = () => {
  return (
    <>
      <h1>i am from App Component</h1>
      <ChildComponent>
        <h2>I am from Child Component</h2>
        <p>This is a child component inside App1</p>
      </ChildComponent>
    </>
  );
};

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
          package: 3,
        }}
        isPlaced={false}
        isDeadInside={false}
        package={5}
      />
    </>
  );
};

// export default App1;

// ! ================================= default props =================================

var App1 = () => {
  return (
    <>
      <h1>Welcome to React</h1>
      <ChildComponent
        name="Ritanshu"
        age={20}
        course="MERN Stack Development"
        isDeadInside="true"
      />
      <ChildComponent age={25} course="Full Stack Development" />
      <ChildComponent
        name="Ketan"
        age={22}
        course="Data Science"
        isPlaced="true"
      />
      <ChildComponent name="Anandu" course="Web Development" />
      <ChildComponent name="Rohan" age={24} course="Mobile App Development" />
    </>
  );
};

// export default App1;

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

// export default App1;

//! ======================= Use State ==========================

// ? case 1: number

import { useState } from "react";
var App1 = () => {
  let initialValue1 = 0;
  let initialValue2 = 0;
  let [counter1, setCounter1] = useState(initialValue1);
  let [counter2, setCounter2] = useState(initialValue2);

  return (
    <>
      <h1>I am UseState Hook - numbers</h1>
      <h2>Counter1 : {counter1}</h2>
      <button onClick={() => setCounter1(counter1 - 5)}>Decrement by 5</button>
      <button onClick={() => setCounter1(counter1 - 1)}>Decrement by 1</button>
      <button onClick={() => setCounter1(initialValue1)}>Reset</button>
      <button onClick={() => setCounter1(counter1 + 1)}>Increment by 1</button>
      <button onClick={() => setCounter1(counter1 + 5)}>Increment by 5</button>
      <h2>Counter2 : {counter1}</h2>
      <button onClick={() => setCounter2(counter2 - 5)}>Decrement by 5</button>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement by 1</button>
      <button onClick={() => setCounter2(initialValue1)}>Reset</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Increment by 1</button>
      <button onClick={() => setCounter2(counter2 + 5)}>Increment by 5</button>
    </>
  );
};

// export default App1;

//? case 1.2

var App1 = () => {
  let [a, b] = useState(0);
  return (
    <>
      <h1>I am UseState Hook - numbers</h1>
      <h2>Counter1 : {a}</h2>
      <button onClick={() => b(a - 5)}>Decrement by 5</button>
      <button onClick={() => b(a - 1)}>Decrement by 1</button>
      <button onClick={() => b(0)}>Reset</button>
      <button onClick={() => b(a + 1)}>Increment by 1</button>
      <button onClick={() => b(a + 5)}>Increment by 5</button>
    </>
  );
};

// export default App1;

// ? case 2: String
// ? case 3: boolean

var App1 = () => {
  let [name, setName] = useState("Nick Name");
  let [gender, setGender] = useState(true);
  let [showPassword, setPassword] = useState(false);
  return (
    <>
      <h1>I am useState Hook - String</h1>
      <h2>Name: {name}</h2>
      <button onClick={() => setName("FullName")}>Show Full Name</button>

      <h2>Gender: {gender ? "Male" : "Female"}</h2>
      <button onClick={() => setGender(true)}>Male</button>
      <button onClick={() => setGender(false)}>Female</button>
      <button onClick={() => setGender(!gender)}>Toggle</button>

      <h2>
        <input type={showPassword ? "text" : "password"} />
        <button onDoubleClick1={() => setPassword(showPassword ? false : true)}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
      </h2>
    </>
  );
};

// export default App1;

// ? array
// import { useState } from "react";

var App1 = () => {
  let pythonSkills = [
    "python",
    "django",
    "flask",
    "html",
    "css",
    "javascript",
    "sql",
    "react js",
  ];
  let javaSkills = [
    "java",
    "springboot",
    "html",
    "css",
    "javascript",
    "sql",
    "react js",
  ];
  let mernSkills = [
    "html",
    "css",
    "javascript",
    "sql",
    "node js",
    "express js",
    "mongoDB",
    "react js",
  ];

  let initialSkills = [];

  let [skills, setSkills] = useState(initialSkills);

  return (
    <>
      <h1> I am from UseState Hook - Array</h1>
      <h2>
        {" "}
        Choose a course:
        <button onClick={() => setSkills(pythonSkills)}>
          Python Full Stack
        </button>
        <button onClick={() => setSkills(javaSkills)}>Java Full Stack</button>
        <button onClick={() => setSkills(mernSkills)}>Mern Full Stack</button>
      </h2>

      <ul>
        {skills.map((val, ind) => {
          return <li key={ind}>{val}</li>;
        })}
      </ul>
    </>
  );
};

// export default App1;
//!===========================================================================================

// var App1 = () => {
//   let initialData = [
//     {
//       id: 1,
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       price: 109.95,
//       description:
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//       rating: { rate: 3.9, count: 120 },
//     },
//     {
//       id: 2,
//       title: "Mens Casual Premium Slim Fit T-Shirts ",
//       price: 22.3,
//       description:
//         "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//       category: "men's clothing",
//       image:
//         "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//       rating: { rate: 4.1, count: 259 },
//     },
//     {
//       id: 3,
//       title: "Mens Cotton Jacket",
//       price: 55.99,
//       description:
//         "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//       rating: { rate: 4.7, count: 500 },
//     },
//     {
//       id: 4,
//       title: "Mens Casual Slim Fit",
//       price: 15.99,
//       description:
//         "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//       rating: { rate: 2.1, count: 430 },
//     },
//     {
//       id: 5,
//       title:
//         "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//       price: 695,
//       description:
//         "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//       category: "jewelery",
//       image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//       rating: { rate: 4.6, count: 400 },
//     },
//     {
//       id: 6,
//       title: "Solid Gold Petite Micropave ",
//       price: 168,
//       description:
//         "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//       category: "jewelery",
//       image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//       rating: { rate: 3.9, count: 70 },
//     },
//     {
//       id: 7,
//       title: "White Gold Plated Princess",
//       price: 9.99,
//       description:
//         "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//       category: "jewelery",
//       image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//       rating: { rate: 3, count: 400 },
//     },
//     {
//       id: 8,
//       title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
//       price: 10.99,
//       description:
//         "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//       category: "jewelery",
//       image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//       rating: { rate: 1.9, count: 100 },
//     },
//     {
//       id: 9,
//       title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//       price: 64,
//       description:
//         "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//       rating: { rate: 3.3, count: 203 },
//     },
//     {
//       id: 10,
//       title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//       price: 109,
//       description:
//         "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//       rating: { rate: 2.9, count: 470 },
//     },
//     {
//       id: 11,
//       title:
//         "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//       price: 109,
//       description:
//         "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//       rating: { rate: 4.8, count: 319 },
//     },
//     {
//       id: 12,
//       title:
//         "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//       price: 114,
//       description:
//         "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//       rating: { rate: 4.8, count: 400 },
//     },
//     {
//       id: 13,
//       title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//       price: 599,
//       description:
//         "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//       rating: { rate: 2.9, count: 250 },
//     },
//     {
//       id: 14,
//       title:
//         "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//       price: 999.99,
//       description:
//         "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//       rating: { rate: 2.2, count: 140 },
//     },
//     {
//       id: 15,
//       title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//       price: 56.99,
//       description:
//         "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//       rating: { rate: 2.6, count: 235 },
//     },
//     {
//       id: 16,
//       title:
//         "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//       price: 29.95,
//       description:
//         "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//       rating: { rate: 2.9, count: 340 },
//     },
//     {
//       id: 17,
//       title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//       price: 39.99,
//       description:
//         "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//       rating: { rate: 3.8, count: 679 },
//     },
//     {
//       id: 18,
//       title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
//       price: 9.85,
//       description:
//         "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//       rating: { rate: 4.7, count: 130 },
//     },
//     {
//       id: 19,
//       title: "Opna Women's Short Sleeve Moisture",
//       price: 7.95,
//       description:
//         "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//       rating: { rate: 4.5, count: 146 },
//     },
//     {
//       id: 20,
//       title: "DANVOUY Womens T Shirt Casual Cotton Short",
//       price: 12.99,
//       description:
//         "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//       rating: { rate: 3.6, count: 145 },
//     },
//   ];

//   let [data, setData] = useState(initialData);

//   let handleAllData = () => {
//     setData(initialData);
//   };

//   let handleMensData = () => {
//     let filteredData = initialData.filter((product) => product.category == "men's clothing");
//     setData(filteredData);
//   };
//   let handleWomensData = () => {
//     let filteredData = initialData.filter((product) => product.category == "women's clothing");
//     setData(filteredData);
//   };
//   let handleJeweleryData = () => {
//     let filteredData = initialData.filter((product) => product.category == "jewelery");
//     setData(filteredData);
//   };
//   let handleElectronicData = () => {
//     let filteredData = initialData.filter((product) => product.category == "electronics");
//     setData(filteredData);
//   };
//   let handleClearData = () => {
//     setData([]);
//   };



//   return(<>
    
//     <center>
//         <button onClick={handleAllData}>All Item</button>
//         <button onClick={handleMensData}>Men's Clothing</button>
//         <button onClick={handleWomensData}>Women's Clothing</button>
//         <button onClick={handleJeweleryData}>Jewelery</button>
//         <button onClick={handleElectronicData}>Electronic</button>
//         <button onClick={handleClearData}>Clear</button>
//     </center>

//     <ChildComponent data={data} />

//   </>);

// };

// export default App1;


//!================================= Context API =========================================

/*
  - The react Context API is a feature in react that allows you to share data across your component tree without having to manually pass prop
  down through entry level.
  - it provides a mechanism for creating global data or state that can be accessed by any component that consume that context.

  ? How to use
    Step 1: Create Context 
    Step 2: Provider 
    Step 1: UseContext()/Consumer 

  */

// import assest_data from "./assets/data/data";
// import { createContext } from "react";
// import ChildComponentA from "./ChildComponentA";
// import ChildComponentB from "./ChildComponentB";

// export const MyContextApi = createContext();

// const App = ()=>{
//   let data = assest_data.json_placeholder_data.user;
//   console.log(data);

//   return(<>
//   <MyContextApi.Provider value={data}>
//     <ChildComponentA />
//     <ChildComponentB />
//   </MyContextApi.Provider>
//   </>)
// }

// export default App;


//! =========================================useRef() Hook ===========================================

/*
 * import useRef()
 * store in a variable
 * let variable = useRef()
 * use this in any element by using ref prop
 */
/*
//? Case 1:
import { useRef } from "react";

const App = () =>{
  let h1Ref = useRef();
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();


  let handelSubmit = e =>{
    e.preventDefault();
    console.log("form submitted");
    
    let data = {
      userName : nameRef.current.value,
      userEmail : emailRef.current.value,
      userPassword : passwordRef.current.value,
    }

    console.log(data);
  }

  return (<>
  <h1 ref={h1Ref}>
    I am <span>App </span> Component
  </h1>

  <form onSubmit={handelSubmit}>
    <p>
      <label htmlFor="UserName"> Name: </label>
      <input type="text" id="UserName" ref={nameRef} />
    </p>
    <p>
      <label htmlFor="UserEmail"> Email: </label>
      <input type="email" id="UserEmail" ref={emailRef} />
    </p>
    <p>
      <label htmlFor="UserPassword"> Password </label>
      <input type="password" id="UserPassword" ref={passwordRef} />
    </p>

    <p>
      <button>Submit</button>
    </p>
  </form>
  </>);



}

  export default App;

*/
  //? case 2:

  import {useRef, useState} from 'react';

  const App = ()=>{
    let [result , setResult] = useState(0);

    let numberONE = useRef();
    let numberTWO = useRef();
    let numberTHREE = useRef();


    let handelSubmit= e => {
      e.preventDefault();
      console.log("Result is here");


    }
  }