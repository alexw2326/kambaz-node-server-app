import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
export default function QuestionsDao() {
  function findAllQuestions() {
    return model.find({}, { name: 1, description: 1 });
  }
  function createQuestion(question) {
    const newQuestion = { ...question, _id: uuidv4() };
    return model.create(newQuestion);
  }
  function deleteQuestion(questionId) {
    return model.deleteOne({ _id: questionId });
  }
  function updateQuestion(questionId, questionUpdates) {
    return model.updateOne({ _id: questionId}, { $set: questionUpdates });
  }
  return { findAllQuestions, 
    createQuestion,
    deleteQuestion,
    updateQuestion
  };
}
