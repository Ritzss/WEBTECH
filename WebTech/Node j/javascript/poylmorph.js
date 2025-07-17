// !========================================================POLYMORPHISM===========================================================
// ? 1. Polymorphism in JavaScript
//  Polymorphism is the ability of a function to take on many forms.
//  It allows you to define a single function that can work with different types of data.
//  This is useful for creating generic functions that can work with different types of objects.
//  Polymorphism is a key concept in object-oriented programming.
//  In JavaScript, polymorphism is achieved through method overriding and method overloading.
// ? 2. Method Overriding
//  Method overriding is when a subclass provides a specific implementation of a method that is already  defined in its superclass.
//  This allows the subclass to provide its own implementation of the method, while still inheriting the properties and methods of the superclass.
//  Method overriding is a key concept in object-oriented programming.
//  In JavaScript, method overriding is achieved through inheritance.
// ? 3. Method Overloading
//  Method overloading is when a function can take on many forms.
//  This is achieved through the use of function parameters and the `this` keyword.
//  Method overloading is a key concept in object-oriented programming.
//  In JavaScript, method overloading is achieved through the use of function parameters and the `this` keyword.
// ? 4. Example of Polymorphism
//! Example 1:
class Animal {
    speak() {
        return "The animal shouts";
    }
}
class Dog extends Animal {
    speak() {
        return "The dog barks BOW BOW";
    }
}
class Cat extends Animal {
    speak() {
        return "The cat meows MEOW MEOW";
    }
}
let animal = new Animal();
let dog = new Dog();
let cat = new Cat();
animal.speak(); // The animal shouts
dog.speak(); // The dog barks BOW BOW
cat.speak(); // The cat meows MEOW MEOW
// ! Example 2:
class Payment {
    processPayment(amount) {
        return `Processing payment of ${amount} using payment method`;
    }
}
class CreditCardPayment extends Payment {
    processPayment(amount) {
        return `Processing payment of ${amount} using credit card`;
    }
}
class PayPalPayment extends Payment {
    processPayment(amount) {
        return `Processing payment of ${amount} using PayPal`;
    }
}
class DebitCardPayment extends Payment {
    processPayment(amount) {
        return `Processing payment of ${amount} using debit card`;
    }
}
class UPIpayment extends Payment {
    processPayment(amount) {
        return `Processing payment of ${amount} using UPI`;
    }
}
// CASE1:
let payment = new Payment();
let creditCardPayment = new CreditCardPayment();
let payPalPayment = new PayPalPayment();
let debitCardPayment = new DebitCardPayment();
let upiPayment = new UPIpayment();
console.log(payment.processPayment(1000)); // Processing payment of 1000 using payment method
console.log(creditCardPayment.processPayment(1000)); // Processing payment of 1000 using credit card
console.log(payPalPayment.processPayment(1000)); // Processing payment of 1000 using PayPal
console.log(debitCardPayment.processPayment(1000)); // Processing payment of 1000 using debit card
console.log(upiPayment.processPayment(1000)); // Processing payment of 1000 using UPI
// CASE2:
let payments = [payment, creditCardPayment, payPalPayment, debitCardPayment, upiPayment];
payments.forEach(payment => {
    console.log(payment.processPayment(1000));
});
// ! Example 3:
class Message {
    send(message){
        return `Sending message: ${message}`;
    }
}
class facebookMessage extends Message {
    send(message){
        return `Sending facebook message: ${message}`;
    }
}
class whatsappMessage extends Message {
    send(message){
        return `Sending whatsapp message: ${message}`;
    }
}
class telegramMessage extends Message {
    send(message){
        return `Sending telegram message: ${message}`;
    }
}
class instagramMessage extends Message {
    send(message){
        return `Sending instagram message: ${message}`;
    }
}
// CASE1:
let message = new Message();
let facebook = new facebookMessage();
let whatsapp = new whatsappMessage();
let telegram = new telegramMessage();
let instagram = new instagramMessage();
console.log(message.send("Hello")); // Sending message: Hello
console.log(facebook.send("Hello")); // Sending facebook message: Hello
console.log(whatsapp.send("Hello")); // Sending whatsapp message: Hello
console.log(telegram.send("Hello")); // Sending telegram message: Hello
console.log(instagram.send("Hello")); // Sending instagram message: Hello
// CASE2:
let messages = [message, facebook, whatsapp, telegram, instagram];
messages.forEach(message => {
    console.log(message.send("Hello"));
});