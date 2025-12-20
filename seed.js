import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import connectDB from "./src/config/db.js";

import Exam from "./src/models/Exam.js";
import Subject from "./src/models/Subject.js";
import Chapter from "./src/models/Chapter.js";

const seedData = async () => {
  try {
    await connectDB();

    await Exam.deleteMany();
    await Subject.deleteMany();
    await Chapter.deleteMany();

    const jee = await Exam.create({ name: "JEE" });
    const neet = await Exam.create({ name: "NEET" });

    const physicsJEE = await Subject.create({
      name: "Physics",
      exam: jee._id
    });

    const chemistryJEE = await Subject.create({
      name: "Chemistry",
      exam: jee._id
    });

    await Chapter.insertMany([
      { name: "Kinematics", subject: physicsJEE._id },
      { name: "Laws of Motion", subject: physicsJEE._id },
      { name: "Thermodynamics", subject: chemistryJEE._id }
    ]);

    console.log("Syllabus seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
