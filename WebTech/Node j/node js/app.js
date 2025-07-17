// example 3
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((request, response) => {
//     console.log("a new request recieved");
//     console.log(request.url);
//     console.log(request.method);


//     let path = request.url.toLocaleLowerCase();
//     if(path == "/" || path == "/home") {
//     const home = fs.readFileSync("./template/home.html","utf-8");
//     response.end(home)
//     }else if(path == "/about"){
//         const about = fs.readFileSync("./template/about.html","utf-8");
//         response.end(about)
//     } else if(path == "/contact") {
//         const contact = fs.readFileSync("./template/contact.html","utf-8");
//         response.end(contact)
//     } else if (path == "/login"){
//         const login = fs.readFileSync("./template/login.html","utf-8");
//         response.end(login)
//     } else if (path == "/user"){
//         const user = fs.readFileSync("./template/user.html","utf-8");
//         response.end(user)
//     } else if(path == "/products") {
//         const products = fs.readFileSync("./template/products.html","utf-8");
//         response.end(products)
//     } else {
//         response.end(`<h1 style="text-align:center;color:red">sorry,page not found</h1>`);
//     }
// });
// port = 8000;
// server.listen(port , () => { console.log("it is listening")});

 // ? example 4 
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((request, response) => {
//     console.log(`The server has started`);
//     let path = request.url.toLowerCase();

//     if(path == "/" || path == "/home") {
//     let html = fs.readFileSync("./template/index.html","utf-8");
//     html = html.replaceAll("{{%Title%}}","Home");
//     html = html.replaceAll("{{%Content%}}","Home");
//     response.end(html)
//     }else if(path == "/about"){
//     let html = fs.readFileSync("./template/index.html","utf-8");
//     html = html.replaceAll("{{%Title%}}","About");
//     html = html.replaceAll("{{%Content%}}","About");
//     response.end(html)
//     } else if(path == "/contact") {
//     let html = fs.readFileSync("./template/index.html","utf-8");
//     html = html.replaceAll("{{%Title%}}","Contact");
//     html = html.replaceAll("{{%Content%}}","Contact");
//     response.end(html) 
//     } else if (path == "/login"){
//     let html = fs.readFileSync("./template/index.html","utf-8");
//     html = html.replaceAll("{{%Title%}}","Login");
//     html = html.replaceAll("{{%Content%}}","Login");
//     response.end(html)
//     } else if (path == "/user"){
//     let html = fs.readFileSync("./template/index.html","utf-8");
//     html = html.replaceAll("{{%Title%}}","User");
//     html = html.replaceAll("{{%Content%}}","User");
//     response.end(html)
//     } else if(path == "/products") {
//     let html = fs.readFileSync("./template/index.html","utf-8");
//     html = html.replaceAll("{{%Title%}}","Products");
//     html = html.replaceAll("{{%Content%}}","Products");
//     response.end(html)
//     }  else if (path === "/api/products") {
//     const data = fs.readFileSync("./data/product.json", "utf-8");
//     const products = JSON.parse(data);

//     let html = `
//     <html>
//     <head>
//         <title>Product List</title>
//         <style>
//             body {
//                 font-family: Arial;
//                 display: flex;
//                 flex-wrap: wrap;
//                 justify-content: center;
//                 gap: 20px;
//                 padding: 30px;
//             }
//             .card {
//                 border: 1px solid #000;
//                 width: 250px;
//                 height: 450px;
//                 padding: 20px;
//                 box-sizing: border-box;
//                 position: relative;
//                 display: flex;
//                 flex-direction: column;
//             }
//             .card img {
//                 height: 200px;
//             }
//             .card products {
//                 margin: 5px 0;
//                 text-align: center;
//             }
//             .card button {
//                 position: absolute;
//                 bottom: 15px;
//                 background: black;
//                 color: white;
//                 border: none;
//                 width: 100px;
//                 height: 30px;
//                 cursor: pointer;
//             }
//         </style>
//     </head>
//     <body>
//     `;

//     products.forEach(product => {
//         html += `
//             <div class="card">
//                 <img src="${product.image}" alt="Product Image" />
//                 <products>${product.title}</products>
//                 <products><b>Price :</b> ${product.price}...</products>
//                 <button>View Product</button>
//             </div>
//         `;
//     });

//     html += `</body></html>`;

//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.end(html);
// } else if(path === '/api/user') {
//     const data1 = fs.readFileSync("./data/users.json", "utf-8");
//     const users = JSON.parse(data1);

//     let html = `
//     <html>
//     <head>
//         <title>Product List</title>
//         <style>
//             body {
//                 font-family: Arial;
//                 display: flex;
//                 flex-wrap: wrap;
//                 justify-content: center;
//                 gap: 20px;
//                 padding: 30px;
//             }
//             .card {
//                 border: 1px solid #000;
//                 width: 250px;
//                 height: 300px;
//                 padding: 20px;
//                 box-sizing: border-box;
//                 position: relative;
//                 display: flex;
//                 flex-direction: column;
//             }
//             .card products {
//                 margin: 5px 0;
//                 text-align: center;
//                 text-wrap:nowrap;
//             }
//             .card button {
//                 position: absolute;
//                 bottom: 15px;
//                 background: black;
//                 color: white;
//                 border: none;
//                 width: 100px;
//                 height: 30px;
//                 cursor: pointer;
//             }
//         </style>
//     </head>
//     <body>
//     `;

//     users.forEach(user => {
//         html += `
//             <div class="card">
//                 <products>${user.username}</products>
//                 <products><b>firstname :</b> ${user.name.firstname}</products>
//                 <products><b>lastname :</b> ${user.name.lastname}</products>
//                 <products><b>email :</b> ${user.email}</products>
//                 <products><b>id :</b> ${user.id}</products>
//                 <button>View User</button>
//             </div>
//         `;
//     });

//     html += `</body></html>`;

//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.end(html);
// } else {
//         response.end(`<h1 style="text-align:center;color:red">sorry,page not found</h1>`);
//     }
// });
// port=8000;
// hostname = '127.0.0.1';
// server.listen(port ,hostname,() => {console.log(`The server has started on ${hostname}:${port}`)} )
/*
do for user 
email
lastname
city
id
 */
// const http = require('http');
// const url = require('url');
// const fs = require('fs');

// let products = JSON.parse(fs.readFileSync("./data/product.json", "utf-8"));
// let user = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));

// let productCard = fs.readFileSync("./template/productCard.html","utf-8");
// const singleproductcard = fs.readFileSync("./template/singleproductcard.html","utf-8");


// const server = http.createServer((request, response) => {
//     let parsedUrl = url.parse(request.url, true);
//     console.log(parsedUrl);

//     let {pathname, query} = parsedUrl;
    
//     if(pathname == "/" || pathname == "/home") {
//         response.end(`<h1 style="color:green; text-align:center;">This is my home page</h1>`)
//     }
//     else if(pathname == "/product") {
//         let product = products;
//         console.log(products);
//         // response.end(productCard);
        
        
//         if (query.id){
//             product = product.filter(product => product.id == parseInt(query.id));
//             console.log(product);
//             // productCard = productCard.replaceAll('{{%Title%}}',products.title);
//             // productCard = productCard.replaceAll('{{%Price%}}',products.price);
//             // productCard = productCard.replaceAll('{{%Image%}}',products.image);
//             // console.log(products.title);
//             // console.log(products.price);
//             // console.log(products.image);
//             if (product != false){
//             response.end(JSON.stringify({
//                 status:"success",
//                 message:"I found the product with the given ID.",
//                 data:product
//             }))}
//             else{
//                 response.end(JSON.stringify({
//                     status:"error",
//                     message:"This product does not exists in the current database.",
//                     data:null
//                 }))
//             }
//         }
//         if(query.category){
//             product = product.filter(product => product.category == query.category);
//             // console.log(query.category);
//             // console.log(product);
//             if (product != false){
//             response.end(JSON.stringify({
//                 status:"success",
//                 message:"I found the product with the given ID.",
//                 data:product
//             }))}
//             else{
//                 response.end(JSON.stringify({
//                     status:"error",
//                     message:"This product does not exists in the current database.",
//                     data:null
//                 }))
//             }
            
//         }
//     }
// }
// );

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("server is running on port 8000");
// })



// ! ======================events=============================================

// const http = require("http");

// const server = http.createServer();

// server.on("request", (req,res) => {
//     console.log(req.url);
//     res.end("hii world");
// });
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("server has begun");
// });
// server.on("close",()=>{
//     console.log("server has closed");
// });
// setTimeout(()=>{
//     server.close();
// },1000);

// ================ !Example 2 ====================
// steps to follow
// ? step 1
// const events = require("events");
// const { emit } = require("process");
// const emitter = new events.EventEmitter();
// ? step 2
// emitter.on("someEventname",()=>{
//     console.log("someEvent has begun");
// });
// ? step 3
// emitter.emit("someEventname");


// ! ================================example 3===============================

// emitter.on("sayhii",()=>{
//     console.log("I am saying 'hii' ");
// });
// emitter.on("sayhii",()=>{
//     console.log("I am saying 'hii' again 1 ");
// });
// emitter.on("sayhii",()=>{
//     console.log("I am saying 'hii' again 2 ");
// });
// emitter.on("saybye",()=>{
//     console.log("I am saying 'bye' ");
// });
// emitter.on("greet",(name,course,fees,discount)=>{
//     console.log(`Hello ${name}, you are selected for the ${course} course with fees of ${fees} and discount of ${discount}`);
// });
// emitter.on("greet",(name,course,fees,discount)=>{
//     console.log(`New user details stored in database: 
//         name:${name}, course: ${course}, fees ${fees}, discount: ${discount}`);
// });

// emitter.emit('sayhii');
// emitter.emit('sayhii');
// emitter.emit('saybye');
// emitter.emit('greet',"manav","mongodb",2000,60);
// emitter.emit('greet',"rahul","js",2000,60);

// console.log("===========================================example4=============================================================");
// let counter = 0;
// emitter.on("increment_counter",() => {
//     counter += 1;
//     console.log(counter);
// });
// emitter.on("decrement_counter",() => {
//     counter -= 1;
//     console.log(counter);
// });
// emitter.on("reset_counter",() => {
//     counter += 0;
//     console.log(counter);
// });

// emitter.emit('increment_counter');
// emitter.emit('increment_counter');
// emitter.emit('increment_counter');
// emitter.emit('increment_counter');
// emitter.emit('decrement_counter');
// emitter.emit('decrement_counter');
// emitter.emit('reset_counter');

// console.log("===========================================example 5=============================================================");

// let user = {
//     username:"guest"
// };
// emitter.on("login",(username, useremail, userpassword)=> {
//     user = {...user, username, useremail, userpassword};
//     console.log("user login success");
// });
// emitter.on("logout",()=> {
//     user = {};
//     console.log("user logout success");
// });
// emitter.on("get_details",()=> {
//     console.log(`user details are :${user}`);
// });
// emitter.setMaxListeners(10);
// emitter.emit("login");
// emitter.emit("logout");
// emitter.emit("get_details");
// console.log(emitter);
// emitter.getMaxListeners();

// !=====================================streams===================================================

// ? creating huge file
const fs = require("fs");
// let data = "I am the data \n";
// fs.writeFileSync("./data/large_file.txt",data.repeat(100000));

// !=====================================readablestream===================================================

/* ? case 1:
    -createReadStream()
    -event 
        -read
        -end
*/
let readstream = fs.createReadStream("./data/large_file.txt",
    {
        encoding:"utf-8",
        highWaterMark: 1500,
    });

// readstream.on("data", chunk =>{
    // chunk = readstream.read();
//     console.log("new chunk is created!");
//     console.log(chunk)
//     console.log(chunk.length)
// })

// ? case 2 :
/*    
    -events
        -readable
    -methods
        -read()
*/

// console.log(readstream);
// let chunkCount = 0;
// readstream.on("readable",()=>{
//     let chunk = "";
//     chunkCount++;

//     while ((chunk = readstream.read()) != null ){
//         console.log(chunk.length);
//         console.log(chunkCount);
//     }
// }) ;

// !===================writeable=====================================================
// ?case 1
const writestream = fs.createWriteStream("./data/output_file.txt","utf-8");

// writestream.write("I am the new Chunk 1 \n");
// writestream.write("I am the new Chunk 2 \n");
// writestream.write("I am the new Chunk 3 \n");
// writestream.write("I am the new Chunk 4 \n");
// writestream.write("I am the new Chunk 5 \n");
// writestream.end("End of chunk");

// writestream.on("drain", () =>{
//     console.log("draining stream");
// });

// writestream.on("finish", () => {
//     console.log("write streaming is completed");    
// });
// console.log(writestream);
// 
// ?case 2
setTimeout(() =>{
    writestream.write("I am the new Chunk 1 \n");
},1000 );
setTimeout(() =>{
    writestream.write("I am the new Chunk 2 \n");
},3000 );
setTimeout(() =>{
    writestream.write("I am the new Chunk 3 \n");
},5000 );
setTimeout(() =>{
    writestream.write("I am the new Chunk 4 \n");
},7000 );
setTimeout(() =>{
    writestream.write("I am the new Chunk 5 \n");
},9000 );
setTimeout (()=>{
    writestream.end("end of code");
},11000);
writestream.on("finish", () => {
  console.log("Write streaming is completed");
});

//  pipe method
// const fs = require("fs");

const readStream = fs.createReadStream("./data/large_file.txt", "utf-8");
const writeStream = fs.createWriteStream(
  "./data/another_large_file.txt",
  "utf-8"
);

readStream.pipe(writeStream);