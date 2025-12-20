import express from "express";
import {
  addBookmark,
  removeBookmark,
  getBookmarks
} from "../controllers/bookmark.controllers.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/:questionId", protect, addBookmark);
router.delete("/:questionId", protect, removeBookmark);
router.get("/", protect, getBookmarks);

export default router;
