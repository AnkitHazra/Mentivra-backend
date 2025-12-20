import Bookmark from "../models/Bookmark.js";

export const addBookmark = async (req, res) => {
  try {
    const { questionId } = req.params;

    const bookmark = await Bookmark.create({
      user: req.user._id,
      question: questionId
    });

    res.status(201).json(bookmark);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Already bookmarked" });
    }
    res.status(500).json({ message: "Failed to bookmark question" });
  }
};

export const removeBookmark = async (req, res) => {
  try {
    const { questionId } = req.params;

    await Bookmark.findOneAndDelete({
      user: req.user._id,
      question: questionId
    });

    res.json({ message: "Bookmark removed" });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove bookmark" });
  }
};

export const getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ user: req.user._id })
      .populate("question")
      .sort({ createdAt: -1 });

    res.json(bookmarks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookmarks" });
  }
};
