// ! =============================================================================abstraction=========================================================================================
// ? abstraction in javascript
// abstraction is a way to hide the implementation details and show only the essential features of the object.
// abstraction is used to reduce complexity and increase efficiency.
// abstraction is used to create a clear separation between the interface and implementation of an object.
// abstraction is used to create a clear separation between the internal implementation of an object and its external interface.

// ! example 1:
class Car {
    #make;
    #model;
    
    constructor(make, model, year) {
        this.#make = make;
        this.#model = model;
    }
    #start() {
        console.log(`Starting the ${this.#make} ${this.#model}`);
    }
    #stop() {
        console.log(`Stopping the ${this.#make} ${this.#model}`);
    }
    
    start() {
        this.#start();
        }
    stop() {
        this.#stop();
        }
}

let myCar = new Car("Toyota", "Camry", 2020);
myCar.start(); // Starting the Toyota Camry
myCar.stop(); // Stopping the Toyota Camry

//!=================================================================================================================================
// ! example 2:
class MongoDB {
    #connection = false;

    #connecttomongodb() {
        console.log("Connecting to MongoDB");
        console.log("Connecting to mongodb atlas");
        console.log("Connecting to cluster");
        console.log("Connecting to database");
        this.#connection = true;
        console.log("Connected to MongoDB");
    }

    connect() {
        if (!this.#connection) {
            this.#connecttomongodb();
        } else {
            console.log("Already connected to MongoDB");
        }
    }

    find(collection,query) {
        if (this.#connection) {
            console.log(`Finding the documents in ${collection} using ${query}`);
        } else {
            console.log("Not connected to MongoDB");
        }
    }

    insertOne(collection, document) {
        if (this.#connection) {
            console.log(`Inserting the document in ${collection} using ${document} query`);
        } else {
            console.log("Not connected to MongoDB");
        }
    }
}

let mongodb = new MongoDB();
// mongodb.connect();
mongodb.find("users", {name: "Ritanshu"}); // Not connected to MongoDB .
mongodb.insertOne("users", {name: "Ritanshu", age: 20}); // Not connected to MongoDB .

mongodb.connect(); // Connecting to MongoDB .
mongodb.find("users", {name: "Ritanshu"}); // Finding the documents in users using {name: "Ritanshu"} query .
mongodb.insertOne("users", {name: "Ritanshu", age: 20}); // Inserting the document in users using {name: "Ritanshu", age: 20} query .
mongodb.connect(); // Already connected to MongoDB .

