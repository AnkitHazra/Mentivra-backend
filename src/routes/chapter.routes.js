import express from "express";
import { getChaptersBySubject } from "../controllers/chapter.controllers.js";

const router = express.Router();

router.get("/:subjectId", getChaptersBySubject);

export default router;
