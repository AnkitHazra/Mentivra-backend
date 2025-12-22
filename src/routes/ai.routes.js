import express from "express";

const router = express.Router();

router.post("/explain", async (req, res) => {
  try {
    console.log("Mentivra AI route hit");

    const {
      questionText,
      options,
      correctAnswer,
      exam,
      subject,
      chapter,
    } = req.body;

    if (!questionText || !options || !correctAnswer) {
      return res.status(400).json({ message: "Incomplete question data" });
    }

    const prompt = `
You are a senior JEE/NEET physics teacher.

Explain the correct answer in a SHORT, CLEAR, and EXAM-ORIENTED way.

STRICT RULES:
- Maximum 20 lines
- No greetings
- No markdown symbols (**, ---, ###)
- Simple language for class 11–12
- Focus only on WHY the correct option is correct
- Do NOT mention that you are an AI

Question:
${questionText}

Options:
A. ${options[0]}
B. ${options[1]}
C. ${options[2]}
D. ${options[3]}

Correct Answer: ${correctAnswer}

Write the explanation now.
`;


    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini REST Error:", errText);
      return res.status(500).json({ message: "AI generation failed" });
    }

    const data = await response.json();

    const explanation =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Mentivra AI could not generate an explanation.";

    res.json({ explanation });

  } catch (error) {
    console.error("Mentivra AI Fatal Error:", error);
    res.status(500).json({ message: "AI explanation failed" });
  }
});

export default router;
