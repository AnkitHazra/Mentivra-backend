import express from "express";
import { getSubjectsByExam } from "../controllers/subject.controllers.js";

const router = express.Router();

router.get("/:examId", getSubjectsByExam);

export default router;
