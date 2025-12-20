import Subject from "../models/Subject.js";

export const getSubjectsByExam = async (req, res) => {
  try {
    const { examId } = req.params;

    const subjects = await Subject.find({ exam: examId }).sort({ name: 1 });

    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch subjects" });
  }
};
