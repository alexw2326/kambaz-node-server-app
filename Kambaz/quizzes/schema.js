import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    _id: String,
    title: String,
    description: String,
    assignedTo: String,
    quizType: {
        type: String,
        enum: ["GRADED QUIZ", "PRACTICE QUIZ", "GRADED SURVEY", "UNGRADED SURVEY"],
        default:"GRADED QUIZ",
    },
    points: Number,
    assignmentGroup: {
        type: String,
        enum:["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECTS"],
        default:"QUIZZES",
    },
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    numAttemptsAllowed: Number,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestions: Boolean,
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    questions: [String],
    isPublished: Boolean,
    course: { type: String, ref: "Course" },
});
export default quizSchema;