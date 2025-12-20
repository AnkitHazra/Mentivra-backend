import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import connectDB from "./src/config/db.js";

import Exam from "./src/models/Exam.js";
import Subject from "./src/models/Subject.js";
import Chapter from "./src/models/Chapter.js";
import Question from "./src/models/Question.js";

const seedData = async () => {
  try {
    await connectDB();

    // Clear old data
    await Exam.deleteMany();
    await Subject.deleteMany();
    await Chapter.deleteMany();
    await Question.deleteMany();

    // 1. Create Exam
    const jee = await Exam.create({ name: "JEE" });

    // 2. Create Subject
    const physics = await Subject.create({
      name: "Physics",
      exam: jee._id
    });

    // 3. Create Chapter
    const kinematics = await Chapter.create({
      name: "Kinematics",
      subject: physics._id
    });

    // 4. Create Questions
    await Question.insertMany([
      {
        exam: jee._id,
        subject: physics._id,
        chapter: kinematics._id,
        questionText:
          "A particle moves with constant acceleration. Which of the following is true?",
        options: [
          "Velocity is constant",
          "Acceleration is zero",
          "Velocity changes linearly with time",
          "Displacement is constant"
        ],
        correctAnswer: "Velocity changes linearly with time",
        solution:
          "For constant acceleration, velocity varies linearly with time as v = u + at.",
        year: 2021
      }
    ]);

    console.log("Seed data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedData();
