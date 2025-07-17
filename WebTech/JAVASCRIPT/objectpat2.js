// // static keyword
// // it will convert the non-static method into static method
// // which means it can only accesible through class name not through object name

// // class CAR{
// //     constructor(carname, carmodel, carprice, carcolor){
// //         this.carname = carname;
// //         this.carmodel = carmodel;
// //         this.carprice = carprice;
// //         this.carcolor = carcolor;
// //     }

// //     getModel(){
// //         return `The model for the car is ${this.carmodel}`;
// //     }

// //     static getenginedetails (){
// //         console.log(`This is confidential information of the car engine`);
// //     }
// // }
// // console.log(CAR);
// // conssole.log(CAR.getenginedetails());
// // 
// // var Car1 = new CAR('ACCORD', 'Bharat IV', 200000, 'White');
// // var Car2 = new CAR('CIVIC', 'Bharat V', 120000, 'Black');
// // var Car3 = new CAR('WagonR', 'Bharat VI', 700000, 'Teal');
// // console.log(Car1.getModel());
// // console.log(Car2.getModel());
// // console.log(Car3.getModel());
// // console.log(Car1 instanceof CAR);
// // console.log(Car2 instanceof CAR);
// // console.log(Car3 instanceof CAR);

// // !==================OPTIONAL CHAINING=====================
// // it is used to prevent the null pointer exception
// // it is used to prevent the error of the code
// // it is used to prevent the code from crashing
// // var obj={
// //     name:{
// //         fname:'ritanshu',
// //         lname:'babuta',
// //         nickname:'nonu',
// //     },
// //     address:{
// //         street:'120, r.k.puram sec-5',
// //         state:'Delhi',
// //         },
// //     city : 'New Delhi'
// // }

// //print fname without using optional chaining and using if-else statement
// // if(obj.name){
// //     if(obj.name.fname){
// //         console.log(obj.name.fname);
// //         }
// //     else{
// //         console.log('fname is not available');
// //     }
// // else{
// //     console.log('name is not available');
// // }
// // }



// // !===================================OBJECT METHOD======================================
// /*
// Object.keys() : it returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
// Object.values() : it returns an array of a given object's own enumerable property values .
// Object.entries() : it returns an array of a given object's own enumerable property entries as [key , value] pairs
// Object.fromEntries() : it returns a new object with the given entries .
// Object.assign() : it copies the values of all enumerable own properties from one or more source objects to a target object  .
// Object.create() : it creates a new object, or alters the prototype of an existing object, to reference a new prototype object .
// Object.freeze() : it prevents all properties of the target object from being changed  .
// Object.hasOwnProperties() : it returns a boolean indicating whether the object has the specified property as its own property .
// functionRef.call(objName) : it calls a function with a given this value and its arguments .
// Incase of function having arguments:
// functionRef.call(objName, Arg1, Arg2,......... ,ArgN);
// functionRef.apply(objName) : it calls a function with a given this value and its arguments .
// Incase of function having arguments :
// functionRef.apply(objName, [Arg1, Arg2,......... ,ArgN]);
// functionRef.apply(objName) : it calls a function with a given this value and its arguments .
// Incase of function having arguments :
// functionRef.apply(objName, Arg1, Arg2,......... ,ArgN)();
// */
// // Object.assign() Example
// var obj1 = { name: 'Ritanshu', age: 25 };
// var obj2 = { city: 'Delhi', country: 'India' };
// var obj3 = { college: 'Delhi Technical Campus', course: 'B.Tech' };
// var obj = Object.assign({}, obj1, obj2, obj3);
// console.log(obj);

// // Object.keys() Example
// var obj = { name: 'Ritanshu', age: 25 };
// console.log(Object.keys(obj));

// //Object.values() Example
// var obj = { name: 'Ritanshu', age: 25 };
// console.log(Object.values(obj));

// //Object.entries() Example
// var obj = { name: 'Ritanshu', age: 25 };
// console.log(Object.entries(obj));

// //Object.formEnteries() Example
// var obj = Object.fromEntries([
//     ['name', 'Ritanshu'],
//     ['age', 25],
//     ]);
//     console.log(obj);

// //Object.hasOwnProperties() Example
// var obj = { name: 'Ritanshu', age: 25 };
// console.log(obj.hasOwnProperty('name'));

// // Object.create() Example
// var obj1 = Object.create(obj);
// console.log(obj1);

// // ? prototype
// // prototype : it is a property of an object that is a function, whose value is the constructor function of the object's prototype,
// // it contains the methods and properties that are shared by all objects created with that constructor function .
// // prototype is used to create a new object that inherits the properties and methods of an existing object.
// // ? prototpal inheitance
// // prototypal inheritance : it is a mechanism of inheritance where an object can inherit properties and methods from another object.
// //prototypal inheritance is used to create a new object that inherits the properties and methods of an existing object.
// // ? prototype chain
// // prototype chaining : it is a sequence of objects, where each object is the prototype of the next
// // prototype chain is used to find the properties of an object when it is not found in the object
// // prototype chain is used to find the methods of an object when it is not found in the object
// // prototype chain is used to find the constructor of an object when it is not found in the object
// // prototype chain is used to find the prototype of an object when it is not found in the object


// // object.freeze() Example
// var obj = { name: 'Ritanshu', age: 25 };
// Object.freeze(obj);
// console.log(obj);
// obj.name = "Chitranjan";
// console.log(obj);

// var person = {
//     name: 'Ritanshu',
//     email : 'ritanshu@gmail.com',
//     mobileno: '1234567890',
// }

//  var emplyoee = Object.create(person);
//  empl
//  console.log(emplyoee);


//example of call , apply and bind
// ? CASE 1:

var manav ={
    name: 'manav',
    course : 'java',
    age : 25,
    gender: 'male',
    hobbies : 'singing',
    getname : function (){
        return `Hi my name is ${this.name}`;
    },
 };

 var sahil = {
    name : 'sahil',
    course : 'python',
    age : 25,
    gender: 'male',
    hobbies : 'cycling',
 };
 console.log(manav.getname.call(sahil));

var fiza = {
    name : 'fiza',
    course : 'python',
    age : 25,
    gender: 'female',
    hobbies : 'dancing',
 };
 console.log(manav.getname.call(fiza));





// !===============================================object shortcut====================================================
// ? CASE 1:
// if we have same key and value then we can skip the value
// which internally works as {variableName : variableName}

var products = "All Product Data ";
const users = "All Users data";
var studentData = [
    "Ritanshu","chitranjan","manas"
];

var data ={
    students: studentData,
    trainers: ["Bobby","Arpit","Shankar","Deepak","Akhil"],
    courses: ["PFS","JFS","MERN","DA","DS","Testing"], 
};
 console.log(data);

 var data_2 = {
    students: studentData,
    products,
 };
 console.log(data_2);

// ? CASE 2:
// if we want to add the 






