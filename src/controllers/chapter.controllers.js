import Chapter from "../models/Chapter.js";

export const getChaptersBySubject = async (req, res) => {
  try {
    const { subjectId } = req.params;

    const chapters = await Chapter.find({ subject: subjectId }).sort({
      name: 1
    });

    res.json(chapters);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch chapters" });
  }
};
