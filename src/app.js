import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import examRoutes from "./routes/exam.routes.js";
import subjectRoutes from "./routes/subject.routes.js";
import chapterRoutes from "./routes/chapter.routes.js";
import questionRoutes from "./routes/question.routes.js";
import bookmarkRoutes from "./routes/bookmark.routes.js";
import aiRoutes from "./routes/ai.routes.js";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://mentivra-frontend.vercel.app/",
    "https://mentivra-frontend.vercel.app",
    "https://www.mentivra.site/",
    "https://mentivra.site"
  ],
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/bookmarks", bookmarkRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Mentivra API is running");
});

export default app;
