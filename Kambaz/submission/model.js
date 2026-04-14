import mongoose from "mongoose";
import submissionSchema from "./schema.js";
export default mongoose.model("Submission", submissionSchema);