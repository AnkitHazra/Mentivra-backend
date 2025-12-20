import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["JEE", "NEET"],
    required: true,
    unique: true
  }
});

const Exam = mongoose.model("Exam", examSchema);
export default Exam;
