import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  exam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam",
    required: true
  }
});

const Subject = mongoose.model("Subject", subjectSchema);
export default Subject;
