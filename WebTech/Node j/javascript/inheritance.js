// !========================================object in OOPS=======================================================
// ? Object in OOPs
//  An object is an instance of a class that contains data and methods
//  Objects are used to represent real-world entities and their properties
//  Objects are created from classes using the new keyword
//  Objects can have their own properties and methods, which can be accessed using the dot notation
//  Objects can also inherit properties and methods from their parent class
//  Objects can be created using object literals, constructor functions, or classes
//  Objects can be passed as arguments to functions, returned from functions, and assigned to variables
//  Objects can be used to create complex data structures, such as arrays, linked lists, and trees
//  Objects can be used to create reusable code, such as libraries and frameworks
//  Objects can be used to create modular code, which can be easily maintained and updated
//  Objects can be used to create encapsulated code, which can hide implementation details and expose only the necessary interfaces
//  Objects can be used to create polymorphic code, which can work with different types of objects
//  Objects can be used to create dynamic code, which can change at runtime
//  Objects can be used to create asynchronous code, which can run in the background without blocking the main thread
//  Objects can be used to create event-driven code, which can respond to user actions and system events
//  Objects can be used to create functional code, which can be used to create higher-order functions and callbacks
//  Objects can be used to create declarative code, which can be used to create domain-specific languages and templates
//  Objects can be used to create imperative code, which can be used to create step-by-step instructions
//  Objects can be used to create procedural code, which can be used to create procedures and functions
//  Objects can be used to create object-oriented code, which can be used to create classes and objects
//  Objects can be used to create functional programming code, which can be used to create pure functions and higher-order functions
//  Objects can be used to create reactive programming code, which can be used to create reactive streams and observables
//  Objects can be used to create declarative programming code, which can be used to create declarative statements and expressions
//  

// ? Example of inheritance in JavaScript
//  Inheritance allows one class to inherit the properties and methods of another class
//  This is useful for code reuse and creating a hierarchy of classes

//example 1
/*class A {
    name = "Ritanshu";
    age = 20;
}
class B extends A {
    course = "BCA";
    college = "BBDITM";
}
console.log(A);
console.log(B);

let b = new B();
console.log(b);

//? case 1 of understainding inheritance    
class department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    describeDepartment() {
        console.log(`Department Name: ${this.name}, Department ID: ${this.id}`);
    }
}

let dept1 = new department("Computer Science", 101);
console.log(dept1);
dept1.describeDepartment();

console.log(dept1.__proto__);
console.log(dept1.prototype);

console.log(dept1.__proto__ === department.prototype); // true

dept1.__proto__.describeDepartment = function() {
    console.log(`Department Name: ${this.name}, Department ID: ${this.id}`);
};

//? case 2 of understainding inheritance
class Employee {
    constructor(empname, empid) {
        this.empname = empname;
        this.empid = empid;
    }
    describeEmployee() {
        console.log(`Employee Name: ${this.name}, Employee ID: ${this.id}`);
    }
}
class Manager extends Employee {
    constructor(empname, empid, department) {
        super(empname, empid);
        this.department = department;
    }
    describeManager() {
        console.log(`Manager Name: ${this.empname}, Manager ID: ${this.empid}, Department: ${this.department}`);
    }
}
// Example usage
const emp1 = new Employee("anurag", 123);
emp1.describeEmployee();
const emp2 = new Manager("ronit", 456, "HR");
emp2.describeEmployee();
emp2.describeManager();
*/
//!=============================================================================================================================

//example 2
//level 1 - organization
//level 2 - department
//level 3 - team
//level 4 - employee

class Organization {
    constructor(companyName, location) {
        this.companyName = companyName;
        this.location = location;
    }
    describeOrganization() {
        console.log(`Organization: ${this.companyName}, Location: ${this.location}`);
    }
}

class Department extends Organization {
    constructor(companyName, location, departmentName) {
        super(companyName, location);
        this.departmentName = departmentName;
    }
    describeDepartment() {
        console.log(`Department: ${this.departmentName}`);
    }
}

class Team extends Department {
    constructor(companyName, location, departmentName, teamName, techStack) {
        super(companyName, location, departmentName);
        this.teamName = teamName;
        this.techStack = techStack;
    }
    describeTeam() {
        console.log(`Team: ${this.teamName} Tech Stack: ${this.techStack}`);
    }
}

class Employee extends Team {
    constructor(employeeName,employeeId ,techstack,companyName, location, departmentName, teamName) {
        super(companyName, location, departmentName, teamName,techstack);
        this.employeeName = employeeName;
        this.employeeId = employeeId;
    }
    describeEmployee() {
        console.log(`Employee: ${this.employeeName} employeeId: ${this.employeeId}`);
    }
}

// Example usage
const org = new Organization("Tech Corp", "New York");
org.describeOrganization();
const dept = new Department("Tech Corp", "New York", "Engineering");
dept.describeDepartment();
const team = new Team("Tech Corp","","New York", "Engineering", "Dev Team");
team.describeTeam();
const emp = new Employee("ritanshu",3078," ","Tech Corp", "New York", "Engineering", "Dev Team");
emp.describeEmployee();



