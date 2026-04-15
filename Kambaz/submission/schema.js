import mongoose from "mongoose";
const submissionSchema = new mongoose.Schema({
    _id: String,
    quizId: String,
    userId: {type: String, required: true},
    answers: [{
        questionId: String,
        selectedAnswer: String,
        isCorrect: Boolean,
    }],
    score: Number,
    attemptNumber: Number,
    submittedAt: Date,
});
export default submissionSchema;