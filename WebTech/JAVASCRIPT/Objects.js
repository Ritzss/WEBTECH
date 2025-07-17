// !============= Objects ================ //
// Objects are used to store multiple values in a single variable.
// Objects are a collection of key-value pairs, where each key is unique and represents a property of the object.
// Objects are mutable, which means their values can be changed after they are created.
// Objects are dynamic in size, meaning you can add or remove properties as needed.
/*
    ? Creating a Object
        1. Object Literals
        2. New Keyword
        3. COnstructor Function
*/


// !=============Object Literals ===========
var obj = {
    sname: "Ritanshu",
    age: 20,
    course: "React JS",
    skills: ["html", "css", "js"],
    address: "Delhi",
    47: "Rider",
}

console.log(obj);


// ? Read   |   Accessing Properties
// To read object properties, we have 2 ways
// ~ 1. dot notation
// Syntax: objectName.keyName
console.log(obj.sname);
console.log(obj.course);
console.log(obj.skills);
console.log(obj.address);
console.log(obj.skills[2]);
// console.log(obj.47);  // ! Error: we cannot access numbered keys using dot notation


// ~ 2. bracket notation
// Syntax: objectName["KeyName"]

console.log(obj["sname"]);
console.log(obj["course"]);

var address = "age"
console.log(obj[address]);

var address = "age";
var sname = address;
var age = sname;
var course = age;
console.log(obj["course"]);
console.log(obj[course]);
console.log(obj["skills"]);
console.log(obj["skills"][2]);
console.log(obj["47"]);
console.log(obj[47]);

// ? Create
// ~ dot notation
// Syntax: objectName.newKeyName = value
var obj = {};
console.log(obj);

obj.sname = "Gautam";
obj.frdName = "Kriti";
obj.address = "Delhi";
obj.sname = "Manav";
obj.address = { streetNo: 123 };
obj.address.city = "Delhi";
obj.address.pincode = 110076;

console.log(obj);


// bracket Notation
// Syntax: ObjectName["newKeyName"] = value;
var obj = {};
console.log(obj);

obj["sname"] = "Satyam";
obj["frdName"] = "Ravi";
obj["address"] = "Delhi";
obj["sname"] = "Nihit";
obj["address"] = { streetNo: 123 };
obj["address"]["city"] = "Delhi";
obj["address"]["pincode"] = 11076;

console.log(obj);



// Upadate
// Syntax: objectName.keyName = value;
// ~ dot notation

var obj = {
    sname: "Ritanshu",
    age: 20,
    course: "React JS",
    skills: ["html", "css", "js"],
    address: "Delhi",
    47: "Rider",
}

console.log(obj);
obj.sname = "Gautam";
obj.frdName = "Kriti";
obj.address = "Delhi";
obj.sname = "Manav";
obj.address = { streetNo: 123 };
obj.address.city = "Delhi";
obj.address.pincode = 110076;

console.log(obj);


// ~ bracket notation
var obj = {
    sname: "Ritanshu",
    age: 20,
    course: "React JS",
    skills: ["html", "css", "js"],
    address: "Delhi",
    47: "Rider",
}

console.log(obj);
obj["sname"] = "Satyam";
obj["frdName"] = "Ravi";
obj["address"] = "Delhi";
obj["sname"] = "Nihit";
obj["address"] = { streetNo: 123 };
obj["address"]["city"] = "Delhi";
obj["address"]["pincode"] = 110076;

console.log(obj);

// Delete
// Syntax: delete objectName.keyName;

var obj = {
    sname: "Ritanshu",
    age: 20,
    course: "React JS",
    skills: ["html", "css", "js"],
    address: "Delhi",
    47: "Rider",
}

console.log(obj);
delete obj.sname;
delete obj.frdName;
delete obj.address;
delete obj["47"];
console.log(obj);



//? example 2
function bank(balance){
    this.balance = balance;
    this.deposit = function(amount){
        this.balance += amount;
        }
        this.withdraw = function(amount){
            if(this.balance >=
                amount){
                    this.balance -= amount;
                    }
                    else{
                        console.log("Insufficient balance");
                        }
                        }
                        }
var obj = new bank(1000);
                        obj.deposit(500);
                        obj.withdraw(2000);
                        console.log(obj.balance);



// ! before ES6 UPDATE
