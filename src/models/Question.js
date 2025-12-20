import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exam",
      required: true
    },

    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true
    },

    chapter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter",
      required: true
    },

    questionText: {
      type: String,
      required: true
    },

    options: [
      {
        type: String
      }
    ],

    correctAnswer: {
      type: String,
      required: true
    },

    solution: {
      type: String,
      required: true
    },

    year: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

questionSchema.index({ chapter: 1 });
questionSchema.index({ year: 1 });

const Question = mongoose.model("Question", questionSchema);
export default Question;
