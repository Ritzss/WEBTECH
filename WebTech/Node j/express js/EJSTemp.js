// ! ====== Template Engines in Express JS / Sering Dynamic Webpages ======
/*! 
- A template engine enables you to use static template files in your application.
- At runtime, the template engine replaces variables in a template file with actual values, 
- and transforms the template into an HTML file sent to the client. 
- This approach makes it easier to design an HTML page.


- We have to follow 2 main steps
  - we have to tell the location of templates
      - Industry level everyone will keep in views folder.
      - // ? app.set('views', './views')
      - By default the root folder is views only.
      - so in this case its not mandatory.
      - if we wants to store in another folder then we have to set this.

  - we have to tell which template engine we are using.
      - means we have to tell ejs / pug / handlebars / etc.. 
      - // ? app.set("view engine", "ejs")
      - app.set("view engine", "pug")
      - app.set("view engine", "hbs")
      - etc.. 

Link : https://expressjs.com/en/guide/using-template-engines.html


- To install ejs : 
  npm i ejs

Link: https://ejs.co/
*/
/*
! EJS Tags: 
? <%=  %>
- It returns output
- Outputs the value into the template (HTML escaped)

? <%- %>
- Outputs the unescaped value into the template

? <% %>
- 'Scriptlet' tag, for control-flow, no output

? <%# %>
- For Commenting
*/

const express = require("express");
const app = express();

app.set("views", "./views"); // this is default so not mandatory
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("main", {
    pageInfo: "main",
    pageInfo2: "<b><i>Main</i></b>",
    pageInfo3: "<b><i>Main</i></b>",
    page: "main page",
    username: "pranchi gautam",
    useremail: "pranchi@gmail.com",
    userno: "987665432",
    isNodeStudent: false,
    student: ["manav", "sahil","sonu","nonu","monu","vivek","soni", "rahul", "ritanshu", "ajit", "vamsi"],
    trainer: {
      trainername: "bobby",
      traineremail: "bobby@gmail.com",
      subject: ["webtech", "nodejs", "reactjs", "expressjs"],
    },
    isPlaced: true,
    isMarried: undefined,
    mockrating: null,
    salary: 2n,
    course: "mern",
  });
});

app.listen(8000, () => {
  console.log("server is running");
  console.log("you have to use nodemon for running the code and checking it symontaneously")
});
