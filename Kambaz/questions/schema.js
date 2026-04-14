import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
    _id: String,
    quizId: String,
    title: String,
    questionText: String,
    points: Number,
    questionType: {
        type: String,
        enum: ["MULTIPLE CHOICE", "TRUE FALSE", "FILL BLANK"],
        default: "MULTIPLE CHOICE"
    },
    options: [{ text: String, isCorrect: Boolean }],
    correctAnswer: Boolean,
    correctAnswers: [String],
});
export default questionSchema;