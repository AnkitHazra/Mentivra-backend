import Exam from "../models/Exam.js";

export const getExams = async (req, res) => {
  try {
    const exams = await Exam.find().sort({ name: 1 });
    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch exams" });
  }
};
