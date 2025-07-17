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