//! ======================express==========================
/*
- Express is fast, unopionated, minimalist web framework for Node.js.
- 
*/


// ? case 1: Importing the entire express module
/*
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(8000, () => {
    console.log("Server is running on port 3000");
});
*/
// ? case 2:
/* 
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the fakeshop API");
});

app.get("/products", (req, res) => {
    res.send("Welcome to the products page");
});

app.get("/products/10", (req, res) => {
    res.send("Welcome to the product with id 10");
});

app.get("/users", (req, res) => {
    res.send("Welcome to the users page");
});

app.get("/users/10", (req, res) => {
    res.send("Welcome to the user with id 10");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
*/
//!============fakeshop API example using POSTMAN========================== 

// ? case 1 :
/*
const express = require('express');
const app = express();
const fs = require('fs');

let products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));
let users = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));

/ Static Routes
app.get("/", (req, res) => {
    res.send("Welcome to the fakeshop API");
});
app.get("/products", (req, res) => {
    res.json("<h1>Here all products page will display</h1>");
});
app.get("/users", (req, res) => {
    res.json("<h1>Here all users page will display</h1>")
});
app.get("/products/10", (req, res) => {
    res.send("<h1>here single product page will display</h1>");
});
app.get("/users/10", (req, res) => {
    res.send("<h1>here single user page will display</h1>");
});
/ Dynamic(API) Routes
app.get("/api/products", (req, res) => {
    res.json(products);
});
app.get("/api/users", (req, res) => {
    res.json(users);
});
app.get("api/v1/product/10", (req, res) => {
    res.json(products);
});
app.get("api/v1/user/10", (req, res) => {
    res.json(users);
});
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
*/

// ? case 2 :
/*
const express = require('express');
const app = express();
const fs = require('fs');

let products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));
let users = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));

/  Route handlers
let RootHandler = (req, res) => {
    res.send("Welcome to the fakeshop API");
};
let ProductsHandler = (req, res) => {
    res.send("<h1>Here all products page will display</h1>");
};
let UsersHandler = (req, res) => {
    res.send("<h1>Here all users page will display</h1>");  
};
let SingleProductHandler = (req, res) => {
    res.send("<h1>here single product page will display</h1>");
};
let SingleUserHandler = (req, res) => {
    res.send("<h1>here single user page will display</h1>");
};
let ApiProductsHandler = (req, res) => {
    res.json(products);
};
let ApiUsersHandler = (req, res) => {
    res.json(users);
};
let ApiSingleProductHandler = (req, res) => {
    res.json(products);
};
let ApiSingleUserHandler = (req, res) => {
    res.json(users);
};

app.get("/", RootHandler)
    .get("/products", ProductsHandler)
    .get("/users", UsersHandler)
    .get("/products/10", SingleProductHandler)
    .get("/users/10", SingleUserHandler)
    .get("/api/products", ApiProductsHandler)
    .get("/api/users", ApiUsersHandler)
    .get("/api/v1/product/10", ApiSingleProductHandler)
    .get("/api/v1/user/10", ApiSingleUserHandler);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
*/
// ? case 3 :
// performend the CRUD operation using express on the products data
/*
const express = require('express');
const app = express();
const fs = require('fs');

let products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));

let baseHandler = (req, res) => {
    res.json({
        status: "success",
        data: "root data",
    });
};

let getAllProducts = (req, res) => {
    res.json({
        status: "success",
        count: products.length,
        data: products,
    });
};

let getSingleProduct = (req, res) => {
    let product = products.find(obj => obj.id == 10);
    res.json({
        status: "success",
        data: product ? product : "Product not found",
    });
};

let createProduct = (req, res) => {
    res.json({
        status: "success",
        data: "Product created successfully",
    });
};

let updateProduct = (req, res) => {
    res.json({
        status: "success",
        data: "Product updated successfully",
    });
};

let deleteProduct = (req, res) => {
    res.json({
        status: "success",
        data: "Product deleted successfully",
    });
};

/ routes
app.get("/", baseHandler)
    .get("/products", getAllProducts)
    .get("/products/10", getSingleProduct)
    .post("/products", createProduct)
    .patch("/products/10", updateProduct)
    .delete("/products/10", deleteProduct);
 
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
*/
// ! =====================route path matching==========================
// app.METHOD(PATH, HANDLER)
/*
In Express version 4.x
    "? , + , () , [] and * are used to match the route path."
    "?": matches zero or one occurrence of the preceding character.
    "+": matches one or more occurrences of the preceding character.
    "*": matches zero or more occurrences of the preceding character.
    "[]": matches any one of the characters inside the brackets.
    "()": groups the characters inside the parentheses.
In Express version 5.x
    "{}" -  matches zero or one occurrence of the preceding character.
    "+"  - matches one or more occurrences of the preceding character.
    "*splat"- matches zero or more occurrences of the preceding character.
    "[]" - matches any one of the characters inside the brackets.
    "()" - groups the characters inside the parentheses.
*/
// const express = require('express');
// const app = express();
/*!
// ! Route path matching examples 
app.get("/sahil/", (req, res) => {
  res.send("sahil is included in path");
});

app.get("/product{s}/:id", (req, res) => {
    // console.log(req.params); // { id: '10' }
  res.send(`Product ID is ${req.params.id}`);
});

app.get("/hello{world}", (req, res) => {
  res.send("Routing matching with /hello{world} route");
});

app.get("/user{dashboard}", (req, res) => {
  res.send("Routing matching with /user{dashboard} route");
});
// app.get("/^\/abcd$/", (req, res) => {
//     res.send("Product with one or more occurrences of 'product' in the path");
// });
app.get(["/admin","/o{wner}", "/partner"], (req, res) => {
    res.send("Routing matching with multiple paths");
});

*/
// ! ======= Request Params, Request Body, Request Query =========
//  Request Params
/*!
// ? example 1: 
app.get("/products", (req,res)=>{
    res.json({
        status: "success",
        data: "Here all products will be displayed",
    });
});
// ?  example 2:
app.get("/products/:id/:price/:category", (req, res) => {
    res.json({
        status: "success",
        data: `Here product with ID ${req.params.id} will be displayed with price ${req.params.price} and category ${req.params.category}`,
    });
});

// ? Example 3:
// creating new student
app.use(express.json()); // It will parse req.body into JavaScript code.

app.get("/students", (req, res) => {
  res.send("All Students Data will be sent");
});

app.post("/students", (req, res) => {
  console.log(req.body);

  res.send("New Student Added");
});

// ? Example 4
app.get("/students/:id", (req, res) => {
  console.log(req.params);

  let id = req.params.id * 1; // type casting ---> string * 1 --> Number
//   let id = +req.params.id; // type casting ---> +string --> Number

  console.log(id);
  console.log(typeof id);

  res.json({
    status: "success",
    data: `Single Products with ID ${id} will be displayed`,
  });
});

// ? Example 5:

app.get("/students", (req, res) => {
  // console.log(req);
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);

  res.send("All Ok");
});


app.listen(8000, () => {
    console.log("Server is running on port 8000");
    });
*/
// ! ===================student management system==========================
/*
Routes 
  - GET
      - /students
      - /students/:id

  - POST
      - /students

  - PATCH
      - /students/:id

  - DELETE
      - /students/:id
*/
// const fs = require('fs');
// let students = JSON.parse(fs.readFileSync('./data/student.json', 'utf-8'));
// app.use(express.json()); // It will parse req.body into JavaScript code.

// app.get("/student{s}", (req,res)=>{
//    res.status(200).json({
//     status:"success",
//     message: "All Students Data will be sent",
//     data: students
//    });
// });

// app.get("/student{s}/:id",(req, res)=> {
//     let id = req.params.id;
//     let stud = students.find(obj => obj.id == id);
//     res.status(201).json({
//         status: "success",
//         message: "Student Data will be sent",
//         data: stud 
//     });
//     console.log({status: "success",
//         message: "Student Data will be sent",
//         data: stud });
    
// });
// app.post("/student{s}", (req, res) => {
//   console.log(req.body);

//   let lastSID = students[students.length - 1].id;

//   let newStud = { id: lastSID + 1, ...req.body };

//   students.push(newStud);

//   fs.writeFile("./data/student.json", JSON.stringify(students), () => {
//     console.log("New Student Added in students.json file");
//   });

//   res.status(201).json({
//     status: "success",
//     message: "New Student Added",
//     data: newStud,
//   });
// });
// app.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

// let updateStudent = (req, res) => {
//   console.log(req.body);
//   let id = req.params.id * 1;

//   let studentObj = students.find(obj => obj.id == id);
//   console.log(studentObj);

//   let index = students.indexOf(studentObj);
//   console.log(index);

//   let udpatedObj = { ...studentObj, ...req.body };
//   console.log(udpatedObj);

//   students[index] = udpatedObj;

//   fs.writeFile("./data/students.json", JSON.stringify(students), () => {
//     console.log("Student Details Udpated in Students.json file");
//   });

//   res.status(202).json({
//     status: "Success",
//     message: "Student details upated Successfully",
//     data: {
//       prevData: studentObj,
//       updatedData: udpatedObj,
//     },
//   });
// };

// let deleteStudent = (req, res) => {
//   let id = req.params.id * 1;

//   let index = students.findIndex(obj => obj.id == id);
//   console.log(index);

//   students.splice(index, 1);

//   fs.writeFile("./data/students.json", JSON.stringify(students), () => {
//     console.log("Student details removed from student.json file");
//   });

//   res.status(200).json({
//     status: "Success",
//     message: "Student details deleted Succefully",
//   });
// };

// ? Routes
// app.get("/students", getAllStudents);
// app.post("/students", addNewStudent);
// app.get("/students/:id", getSingleStudent);
// app.patch("/students/:id", updateStudent);
// app.delete("/students/:id", deleteStudent);

// ? app.route():
// It will provide the common route for all methods
// later we can chain the methods

// app.route("/students").get(getAllStudents).post(addNewStudent);

// app
//   .route("/students/:id")
//   .get(getSingleStudent)
//   .patch(updateStudent)
//   .delete(deleteStudent);

// app.listen(8000, () => {
//   console.log("server has started");
// });


// ! ================== Middlewares =================
/*
  - https://expressjs.com/en/guide/writing-middleware.html
  - https://miro.medium.com/v2/resize:fit:1400/1*ptNjzuT0m2BQ9YpQTVwVLg.png
  - https://media.geeksforgeeks.org/wp-content/uploads/20211007175759/MiddlewareChaining.png
*/

// ? Case 1:
/*
const express = require("express");
const app = express();

app.use(express.json());

app.post(
  "/",
  (req, res, next) => {
    console.log("I am executing Middleware function 1");
    console.log(req.body);

    req.body.name = "Sahil";
    console.log(req.body);
    next();
  },
  (req, res, next) => {
    console.log("I am executing Middleware function 2");
    req.body.email = "s@gmail.com";
    console.log(req.body);
    next();
  },
  (req, res, next) => {
    console.log("I am executing Middleware function 3");
    req.body.contact = 85520683412;
    console.log(req.body);
    next();
  },
  (req, res, next) => {
    console.log("I am executing Middleware function 4");
    req.body.requestedAt = Date.now();
    console.log(req.body);
    next();
  },
  (req, res, next) => {
    console.log("I am executing Middleware function 5");
    console.log(req.body);
    res.send("Ok");
  },
  (req, res, next) => {
    console.log("I am executing Middleware function 6");
  }
);

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ? Case 2:
/*!
const express = require("express");
const app = express();

let myLoggerMiddleware = (req, res, next) => {
  console.log("I am myLoggerMiddleware ");

  next();
};

let requestedAt = (req, res, next) => {
  console.log("I am requestedAt middleware");
  req.body = { time: new Date() };

  next();
};

let finalResponseMiddleware = (req, res) => {
  console.log("I am finalResponseMiddleware");

  console.log(req.body);
  res.send("ok");
};

// app.get("/", myLoggerMiddleware, requestedAt, finalResponseMiddleware);
// app.post("/", myLoggerMiddleware, requestedAt, finalResponseMiddleware);
// app.patch("/", myLoggerMiddleware, requestedAt, finalResponseMiddleware);
// app.delete("/", myLoggerMiddleware, requestedAt, finalResponseMiddleware);

// It will work for all http methods
// app.use("/", myLoggerMiddleware, requestedAt, finalResponseMiddleware);
app.all("/", myLoggerMiddleware, requestedAt, finalResponseMiddleware);

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ? Case 3:
// app.use() vs app.all()
/*!
const express = require("express");
const app = express();

let logger = (req, res, next) => {
  console.log("I am logger middleware");
  next();
};

let requestedAt = (req, res, next) => {
  console.log("I am requestedAt middleware");
  next();
};

// If the url starts with provided path then all middlewares will execute.
// Here method can be anything
// app.use("/", logger, requestedAt, (req, res, next) => {
//   console.log("I am final Response middleware");
//   res.send("Ok");
// });

app.use(logger, requestedAt, (req, res) => {
  res.send("Ok");
});

// If the url strictly matches with provided path then only all middlewares will execute.
// Here method can be anything
// app.all("/", logger, requestedAt, (req, res, next) => {
//   console.log("I am final Response middleware");
//   res.send("Ok");
// });

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ! ===================== Task ============================
/*
- add middleware which sends request time
- just for logging

    GET 
        - /students
        - /students/:id

    POST 
        - /students
            - using middleware add createdAt feild in req.body object
            - this have store in students.json file too.
            - Validate email and mobile number 
                - if exists show student already existing
                - else add.

    PATCH
        - /students/:id
            - using middleware add updatedAt feild in req.body object
            - this have store in students.json file too.

    DELETE
        - /students/:id
          - create one file name students_deleted_data.json
          - Using middle add the deleted students data in the above file.
*/
/*!
const fs = require("fs");
const express = require("express");
const app = express();

let students = JSON.parse(fs.readFileSync("./data/students.json", "utf-8"));
let deleteStudents = JSON.parse(
  fs.readFileSync("./data/students_deleted_data.json", "utf-8")
);

// ? Middlewares
app.use(express.json()); // Parsing JSON into JS.

app.use((req, res, next) => {
  console.log("A new Request Received at : ", new Date());

  next();
});

// ? Middleware functions
let createdAt = (req, res, next) => {
  console.log("Before - ", req.body);

  // req.body.createdAt = new Date();
  // req.body = { createdAt: new Date() };

  req.body = { ...req.body, createdAt: new Date() };

  console.log("After - ", req.body);

  next();
};

let updatedAt = (req, res, next) => {
  console.log("Before - ", req.body);

  // req.body.createdAt = new Date();
  // req.body = { createdAt: new Date() };

  req.body = { ...req.body, updatedAt: new Date() };

  console.log("After - ", req.body);

  next();
};

let deletedStudentsMiddleware = (req, res, next) => {
  let id = req.params.id * 1;

  let studentObj = students.find(obj => obj.id == id);
  console.log(studentObj);

  deleteStudents.push(studentObj);

  fs.writeFile(
    "./data/students_deleted_data.json",
    JSON.stringify(deleteStudents),
    () => {
      console.log("Deleted Students Details are updated into json file");
    }
  );

  next();
};

let validateStudent = (req, res, next) => {
  console.log("I am validateStudent middlware");

  let gmail = req.body.gmail;
  let contact = req.body.contact;

  if (!gmail) {
    res.json({
      status: "Fail",
      reason: "Gmail is Mandatory",
    });
  } else if (!contact) {
    res.json({
      status: "Fail",
      reason: "Contact is Mandatory",
    });
  } else {
    let student = students.find(
      obj => obj.gmail == gmail || obj.contact == contact
    );

    if (student) {
      res.json({
        status: "fail",
        reason: "Gmail or Mobile No is already Existing",
      });
    } else {
      next();
    }
  }
};

// ? Route Handlers
let getAllStudents = (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "All Students details are here",
    count: students.length,
    data: students,
  });
};

let addNewStudent = (req, res) => {
  console.log(req.body);

  let lastStudentID = students[students.length - 1].id;

  let newStudent = { id: lastStudentID + 1, ...req.body };

  students.push(newStudent);

  fs.writeFile("./data/students.json", JSON.stringify(students), () => {
    console.log("New Student Added in students.json file");
  });

  res.status(201).json({
    status: "Success",
    message: "A new Student is Added",
    data: newStudent,
  });
};

let getSingleStudent = (req, res) => {
  console.log(req.params);

  let id = req.params.id * 1;

  let student = students.find(obj => obj.id == id);
  console.log(student);

  res.status(200).json({
    status: "success",
    message: `Student details with id : ${id}`,
    data: student,
  });
};

let updateStudent = (req, res) => {
  console.log(req.body);
  let id = req.params.id * 1;

  let studentObj = students.find(obj => obj.id == id);
  console.log(studentObj);

  let index = students.indexOf(studentObj);
  console.log(index);

  let udpatedObj = { ...studentObj, ...req.body };
  console.log(udpatedObj);

  students[index] = udpatedObj;

  fs.writeFile("./data/students.json", JSON.stringify(students), () => {
    console.log("Student Details Udpated in Students.json file");
  });

  res.status(202).json({
    status: "Success",
    message: "Student details upated Successfully",
    data: {
      prevData: studentObj,
      updatedData: udpatedObj,
    },
  });
};

let deleteStudent = (req, res) => {
  let id = req.params.id * 1;

  let index = students.findIndex(obj => obj.id == id);
  console.log(index);

  students.splice(index, 1);

  fs.writeFile("./data/students.json", JSON.stringify(students), () => {
    console.log("Student details removed from student.json file");
  });

  res.status(200).json({
    status: "Success",
    message: "Student details deleted Succefully",
  });
};

// ? Routes
app
  .route("/students")
  .get(getAllStudents)
  .post(createdAt, validateStudent, addNewStudent);

app
  .route("/students/:id")
  .get(getSingleStudent)
  .patch(updatedAt, updateStudent)
  .delete(deletedStudentsMiddleware, deleteStudent);

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ! ============== Patterns of Middlewares =============
/*
app.get(m1 , m2, m3, ...)
app.use(m1 , m2, m3, ...)
app.all(m1 , m2, m3, ...)
app.use([m1 , m2, m3, ...]);
app.use("/", [m1 , m2, m3, ...]);
app.use("/", initialMiddlware,  [m1 , m2, m3, ...]);
app.use("/", initialMiddlware, [m1 , m2, m3, ...], lastMidddleware);
app.use("/", initialMiddlware, [m1 , m2], lastMidddleware);
*/

// ! ==================== Types of Middlewares ================
/*
Link: https://expressjs.com/en/guide/using-middleware.html

An Express application can use the following types of middleware:

  - Application-level middleware
  - Router-level middleware
  - Error-handling middleware
  - Built-in middleware
  - Third-party middleware

*/

// ? Case 1:
/*
const express = require("express");
const app = express();
const router = express.Router();

ROUTE Handlers
let getStudents = (req, res) => {
  res.send("All Students Details are here");
};

let getSingleStudent = (req, res) => {
  res.send("I am from getSingleStudent");
};

let createStudent = (req, res) => {
  res.send("I am from createStudent");
};

let updateStudent = (req, res) => {
  res.send("I am from updateStudent");
};

let deleteStudent = (req, res) => {
  res.send("I am from deleteStudent");
};

// ROUTES:
router.route("/").get(getStudents).post(createStudent);

router
  .route("/:id")
  .get(getSingleStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

app.use("/api/v1/students", router);

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ? Case 2:
// Here we created for Trainers, HRS, Students
/*!
const express = require("express");
const app = express();
const studentsRouter = express.Router();
const trainersRouter = express.Router();
const hrsRouter = express.Router();

// Student ROUTE Handlers
let getStudents = (req, res) => {
  res.send("All Students Details are here");
};

let getSingleStudent = (req, res) => {
  res.send("I am from getSingleStudent");
};

let createStudent = (req, res) => {
  res.send("I am from createStudent");
};

let updateStudent = (req, res) => {
  res.send("I am from updateStudent");
};

let deleteStudent = (req, res) => {
  res.send("I am from deleteStudent");
};

// Trainer ROUTE Handlers
let getTrainers = (req, res) => {
  res.send("I am from getTrainers");
};

let getSingleTrainer = (req, res) => {
  res.send("I am from getSingleTrainer");
};

let createTrainer = (req, res) => {
  res.send("I am from createTrainer");
};

let updateTrainer = (req, res) => {
  res.send("I am from updateTrainer");
};

let deleteTrainer = (req, res) => {
  res.send("I am from deleteTrainer");
};

// HR ROUTE Handlers
let getHRs = (req, res) => {
  res.send("I am from getHRs");
};

let getSingleHR = (req, res) => {
  res.send("I am from getSingleHR");
};

let createHR = (req, res) => {
  res.send("I am from createHR");
};

let updateHR = (req, res) => {
  res.send("I am from updateHR");
};

let deleteHR = (req, res) => {
  res.send("I am from deleteHR");
};

// Students ROUTES:
studentsRouter.route("/").get(getStudents).post(createStudent);

studentsRouter
  .route("/:id")
  .get(getSingleStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

// Trainers ROUTES:
trainersRouter.route("/").get(getTrainers).post(createTrainer);

trainersRouter
  .route("/:id")
  .get(getSingleTrainer)
  .patch(updateTrainer)
  .delete(deleteTrainer);

// HRS ROUTES:
hrsRouter.route("/").get(getHRs).post(createHR);

hrsRouter.route("/:id").get(getSingleHR).patch(updateHR).delete(deleteHR);

app.use("/api/v1/students", studentsRouter);
app.use("/api/v1/trainers", trainersRouter);
app.use("/api/v1/hr", hrsRouter);

app.listen(8000, () => {
  console.log("server has started");
});
*/


// ! =================== Params middleware =================
/*!
- Params middleware is used to extract the parameters from the URL.
- It is used to extract the parameters from the URL and make them available in the request object

const express = require("express");
const app = express();

//~ Params middleware 1
app.param("id", (req, res, next, value) => {
  console.log("I am from params middleware");
  console.log(value);
  req.body = {...req.body, studentID: value};
  console.log(req.body);
  next();
});

//~ params middleware 2
app.param("libraryname",(req,res,next,value)=>{
  console.log("New Request have to  be processed",value);
  next();
});

//~ params middleware 3
app.param(["id", "libraryname"],(req,res,next,value)=>{
  console.log("New Request is processed",value);
  next();
});

app.get("/students", (req, res) => {
  res.send(`all students details`);
});

app.get("/students/:id", (req, res) => {
  res.send(`Single Student details with ID `);
});

app.get("/trainers", (req,res)=> {
  res.send("all tariners details");
});

app.get("/trainers/:id", (req,res)=> {
  res.send("single tariners details");
});

app.get("/library/:libraryname", (req, res) => {
  res.send(`Library name is running`);
});

app.get("/library/:libraryname/:id", (req, res) => {
  res.send(`Library name and id is running `);
});



*/

// ! ====================how to serve static files from server ========================
/*
const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/home",(req, res)=>{
  res.send(`
    <h1>This is from Home Routes</h1>
    <p>hello how are you....</p>
    <img src=" " height="200px">
    `)
});

app.get("/about",(req,res)=>{
  res.send("this is from about home");
});

app.get("/about",(req,res)=>{
  res.send("this is from about home");
});

app.get("/about",(req,res)=>{
  res.send("this is from about home");
});

app.get("/about",(req,res)=>{
  res.send("this is from about home");
});

app.listen(8000, () => {
  console.log("server has started");
});
*/