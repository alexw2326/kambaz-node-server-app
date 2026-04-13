import mongoose from "mongoose";
import questionSchema from "./question.schema.js";
export default mongoose.model("Question", questionSchema);