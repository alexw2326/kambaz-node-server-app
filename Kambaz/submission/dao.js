import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
export default function SubmissionDao() {
  function findAllSubmissionsByUser(quizId, userId) {
    return model.find({ quizId: quizId, userId: userId}) || [];
  }
  function createSubmission(submission, quizId, userId) {
    const newSubmission = { ...submission, _id: uuidv4(), quizId: quizId, userId: userId };
    return model.create(newSubmission);
  }
  function deleteSubmission(submissionId, userId) {
    return model.deleteOne({ _id: submissionId, userId: userId });
  }
  return { findAllSubmissionsByUser, 
    createSubmission,
    deleteSubmission,
  };
}
