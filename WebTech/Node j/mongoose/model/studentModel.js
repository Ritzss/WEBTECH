const studentSchema = new mongoose.Schema({
  sname: String,
  age: Number,
  course: String,
});
const studentModel = mongoose.model("students", studentSchema);

module.exports = studentModel;