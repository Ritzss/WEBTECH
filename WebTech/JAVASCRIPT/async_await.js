//! async/await

// ? Case 1:
// by using async keyword before a function, we can convert a synchronus function into asynchronus function
// async keyword we have to use only just before the function.
// aynchronus functions will always return a promise.

// ~ normal data -------> wrapped into promise -----------> promise
// async function getData(){
//     return "Hello I am the Data";
// }

// console.log(getData());

//? Case 2:
// ~ promise data ---------> wrapped into promise --------------> promise
/*
 let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("i am the data");},2000);});
async function getData(){
    return p;
    }
console.log(getData());
*/

// ? case 3:
//consuming using promise way

// let fetch_api=new Promise((resolve,reject) => {
//     resolve("something huge data");
// });

// async function getData(){
//     return fetch_api.then(data => console.log(data));
// }
// getData();

// ? Case 4:
// CONSUMMING PROMISE DATA USING AWAIT KEYWORD

// let P=new Promise((resolve,reject) => {
//     resolve("something huge data");
   
// });
// async function getData(){
//     await P;

// }
// console.log(getData());

// ? case 5:

// let feed_response = new Promise(resolve => {
//     setTimeout(()=> {
//         resolve("feed response data received succesfully")
//     },5000);
// });
// let profile_response = new Promise(resolve => {
//     setTimeout(()=> {
//         resolve("profile response data received succesfully")
//     },5000);
// });
// let notification_response = new Promise(resolve => {
//     setTimeout(()=> {
//         resolve("notification response data received succesfully")
//     },5000);
// });

// async function displayInstagram(){
//     console.log("intialized");
//     feed_response.then(data => console.log(data));
//     console.log("code depend on feed response");
//     profile_response.then(data => console.log(data));
//     console.log("code depend on profile response");
//     notification_response.then(data => console.log(data));
//     console.log("code depend on notification response");
// }

// displayInstagram();
// ? case 6:

let feed_response = new Promise(resolve => {
    setTimeout(()=> {
        resolve("feed response data received succesfully")
    },5000);
});
let profile_response = new Promise(resolve => {
    setTimeout(()=> {
        resolve("profile response data received succesfully")
    },5000);
});
let notification_response = new Promise(resolve => {
    setTimeout(()=> {
        resolve("notification response data received succesfully")
    },5000);
});

async function displayInstagram(){
    console.log("intialized");
    console.log(await feed_response);
    console.log("code depend on feed response");
    console.log(await profile_response)
    console.log("code depend on profile response");
    console.log(await notification_response);
    console.log("code depend on notification response");
}

displayInstagram();