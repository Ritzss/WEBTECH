//PROMISE IN JAVASCRIPT
//promise is a result of a function that returns a value that may not be available yet, but will be resolved at some point in the future.

// let p = new Promise(     
//      function(resolve, reject) {
          // asynchronous operation
//          let x=0;
//           if (x == 0) { 
//                resolve("Hello");
//                } else {
//                     reject("Something went wrong");
//                     }
//                     }
//                     );
// p.then((value)=> { 
//      console.log(value);
//      })
// p.catch((error) => {
//           console.log(error);
//           });
// p.finally (()=> {
//      console.log("Finally");
//      });



// promise using settimeout
// let x=10;
// let p = new Promise(
//      function (resolve, reject) {
//      if (x%2==0){
//           setTimeout(() =>   
//                { resolve("EVEN");}, 2000);
//      }
//      else {
//           setTimeout(()=> {reject("ODD")},3000);
//      }
// });
// p.then((value) =>
//      {
//           console.log(value);
//      }
// )
// p.catch((error) =>
//      {
//           console.log(error);
//      }
// )


