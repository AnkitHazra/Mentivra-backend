import mongoose from "mongoose";
import fs from "fs";

import Exam from "./src/models/Exam.js";
import Subject from "./src/models/Subject.js";
import Chapter from "./src/models/Chapter.js";
import Question from "./src/models/Question.js";

await mongoose.connect("mongodb+srv://hazraankit668_db_user:TTZkOoYZKaE4axiR@cluster0.4ey4t4i.mongodb.net/")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

async function uploadQuestions() {
  try {

    const raw = fs.readFileSync("D:/Question/physics_ch01_physical_world_units_measurements.json");
    const data = JSON.parse(raw);

    for (let q of data) {

      // find exam
      const examDoc = await Exam.findOne({ name: q.exam });
      if (!examDoc) {
        console.log("Exam Not Found:", q.exam);
        continue;
      }

      // find subject
      const subjectDoc = await Subject.findOne({
        exam: examDoc._id,
        name: q.subject
      });

      if (!subjectDoc) {
        console.log("Subject Not Found:", q.subject);
        continue;
      }

      // find chapter
      const chapterDoc = await Chapter.findOne({
        subject: subjectDoc._id,
        name: q.chapter
      });

      if (!chapterDoc) {
        console.log("Chapter Not Found:", q.chapter);
        continue;
      }

      // create question
      await Question.create({
        exam: examDoc._id,
        subject: subjectDoc._id,
        chapter: chapterDoc._id,
        questionText: q.questionText,
        options: [
          q.optionA,
          q.optionB,
          q.optionC,
          q.optionD
        ],
        correctAnswer: q.correctAnswer,
        solution: q.solution,
        year: q.year
      });

      console.log("Inserted:", q.questionText);
    }

    console.log("\nFINISHED UPLOADING QUESTIONS\n");
    process.exit();

  } catch (err) {
    console.log(err);
  }
}

uploadQuestions();
