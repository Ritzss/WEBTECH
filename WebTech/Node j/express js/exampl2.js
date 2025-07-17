const express = require("express");
const app = express();
const router = express.Router();

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
