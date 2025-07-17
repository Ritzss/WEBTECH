const express = require("express");
const app = express();
const fs = require("fs");

app.set("view engine", "ejs");

app.get("/Dashboard",(req,res)=>{
    res.render("dashboard");
});
app.get("/Student{s}",(req,res)=>{
    let students=JSON.parse(fs.readFileSync("./data/Studentdatabse.json","utf-8"));
    res.render("studentPage",{students});
});
app.get("/Product{s}",(req,res)=>{
    let products=JSON.parse(fs.readFileSync("./data/productdatabse.json","utf-8"));
    res.render("productPage",{products});
});
app.get("/User{s}",(req,res)=>{
    let users=JSON.parse(fs.readFileSync("./data/userdatabase.json","utf-8"));
    res.render("userPage",{users});
});

port = 8000;
host = "127.0.0.1"
app.listen(port,()=>{
    console.log(`The server is running on ${host+":"+port}`);
});
