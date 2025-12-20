import express from "express";
import {
  getQuestionsByChapter,
  getQuestionById
} from "../controllers/question.controllers.js";

const router = express.Router();

router.get("/", getQuestionsByChapter);
router.get("/:id", getQuestionById);

export default router;
