import mongoose from "mongoose";
import quizSchema from "./quiz.schema.js";
export default mongoose.model("Quiz", quizSchema);