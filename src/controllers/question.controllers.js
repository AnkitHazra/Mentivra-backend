import Question from "../models/Question.js";

const PAGE_SIZE = 10;

export const getQuestionsByChapter = async (req, res) => {
  try {
    const { chapterId, page = 1 } = req.query;

    if (!chapterId) {
      return res.status(400).json({ message: "chapterId is required" });
    }

    const pageNumber = Number(page);

    const totalQuestions = await Question.countDocuments({
      chapter: chapterId
    });

    const questions = await Question.find({ chapter: chapterId })
      .sort({ year: -1 })
      .skip(PAGE_SIZE * (pageNumber - 1))
      .limit(PAGE_SIZE)
      .select(); 

    res.json({
      questions,
      page: pageNumber,
      pages: Math.ceil(totalQuestions / PAGE_SIZE),
      total: totalQuestions
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch questions" });
  }
};

export const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.json(question);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch question" });
  }
};
