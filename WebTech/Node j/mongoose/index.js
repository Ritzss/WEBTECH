require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const studentsRouter = express.Router();
const trainersRouter = express.Router();

// ! Connecting to Database
mongoose.connect(process.env.LOCAL_MONGO_DB_URI);

// ? creating model
/*
const studentModel = mongoose.model("students", {
  sname: String,
  age: Number,
  course: String,
});

const trainerModel = mongoose.model("trainer", {
  trainerName: String,
  subjects: [String],
  experience: Number,
});
*/



const trainerSchema = new mongoose.Schema({
  trainerName: String,
  subjects: [String],
  experience: Number,
});

const studentModel = mongoose.model("students", studentSchema);
const trainerModel = mongoose.model("trainer", trainerSchema);

// let manavRecord = new studentModel({
//   sname: "Manav",
//   age: 20,
//   course: "MERN Stack",
// });

// manavRecord.save();

// let rahulRecord = new studentModel({
//   sname: "Rahul",
//   age: 23,
// });
// rahulRecord.save();

// let ritanshuRecord = new studentModel({
//   sname: "Ritanshu",
//   skills: ["nodejs", "html"],
// });

// ritanshuRecord.save();

// let pranchiRecord = new trainerModel({
//   trainerName: "Pranchi",
//   subjects: ["Html", "CSS", "Javascript"],
//   experience: 2,
// });

// pranchiRecord.save();




// ! Routes
app.use("/api/v1/students", studentsRouter);
app.use("/api/v1/trainers", trainersRouter);

app.get("/", (req, res) => {
  res.send("All Ok");
});

app.listen(8000, () => {
  console.log("server has started...");
});