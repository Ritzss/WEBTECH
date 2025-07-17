// !===========================================encapsulation ====================================================================
// encapsulation is the bundling of data with the methods that operate on that data.
// encapsulation is used to hide the internal state of an object from the outside world and expose only
// the necessary interfaces to interact with that object.
// encapsulation is used to protect the internal state of an object from being modified directly by external code.
// encapsulation is used to create a clear separation between the internal implementation of an object and its external interface.


// ? without encapsulation
/*-class bank{
    constructor(name,accountNumber,accountBalance){
        this.name=name;
        this.accountNumber=accountNumber;
        this.accountBalance=accountBalance;
        this.minimumbalance=1000;
        }
    deposit(amount){
        this.accountBalance+=amount;
        console.log(`Deposited ${amount} to account number ${this.accountNumber}. New balance is ${this.accountBalance}`);
    }
    withdraw(amount){
        if (amount > 0 && this.accountBalance - amount >= this.minimumbalance){
            this.accountBalance-=amount;
            console.log(`Withdrawn ${amount} from account number ${this.accountNumber}. New balance is ${this.accountBalance}`);
            }
        else if (amount < 0){
            console.log("Insufficient balance");
            }
        else{
            console.log("You have reached the minimum balance limit");
            }
        }
    getAccountBalance(){
        return this.accountBalance;
    }

}

let bank1 = new bank("Ritanshu", 123456789, 5000);
bank1.deposit(1000);
bank1.withdraw(2000);
bank1.withdraw(7000);
*/
// ! ===============================================================================================================
// ? with encapsulation
/* class bankNew{
    #name;
    #accountNumber;
    #accountBalance;
    #minimumbalance;
    constructor(name,accountNumber,accountBalance){
        this.#name=name;
        this.#accountNumber=accountNumber;
        this.#accountBalance=accountBalance;
        this.#minimumbalance=1000;
        Object.seal(this);
        }
    set deposit(amount){
        this.#accountBalance+=amount;
        console.log(`Deposited ${amount} to account number ${this.#accountNumber}. New balance is ${this.#accountBalance}`);
    }
    set withdraw(amount){
        if (amount > 0 && this.#accountBalance - amount >= this.#minimumbalance){
            this.#accountBalance-=amount;
            console.log(`Withdrawn ${amount} from account number ${this.#accountNumber}. New balance is ${this.#accountBalance}`);
            }
        else if (amount < 0){
            console.log("Invalid amount");
            }
        else if (this.#accountBalance < 0){
            console.log("Insufficient balance");
        }
        else{
            console.log("You have reached the minimum balance limit");
            }
        }
    get getAccountBalance(){
        return this.#accountBalance;
    }

}
let bank2 = new bankNew("Ritanshu", 123456789, 5000);
bank2.deposit=5000;
console.log(bank2.getAccountBalance);
bank2.withdraw=2000;
console.log(bank2.getAccountBalance);
bank2.withdraw=7000;
console.log(bank2.getAccountBalance);

*/
class batch{
    #students =[];
    #batchallowed=["MERN","JFS","PFS"];
    get listStudents(){
        return `${this.#students} are enrolled in the batch`;
    }
    set addStudent(student){
        if (this.#batchallowed.includes(student.batch)) {
        this.#students.push(student);   
        console.log(`Student ${student.name} added to the batch successfully`);
        }
        else{
            console.log(`Student ${student.name} have to take MERN and JFS and PFS batch`);
        }
    }
    get studentCount(){
        return `${this.#students.length} students are enrolled in the batch`;
    }
}
let ReactjsBatch = new batch();
ReactjsBatch.addStudent={name:"Ritanshu",batch: "MERN"};
ReactjsBatch.addStudent={name:"Himanshu",batch: "JFS"};
ReactjsBatch.addStudent={name:"Ajit",batch: "PFS"};
ReactjsBatch.addStudent={name:"Prashant",batch: "MEAN"};
console.log(ReactjsBatch.listStudents);
console.log(ReactjsBatch.studentCount);