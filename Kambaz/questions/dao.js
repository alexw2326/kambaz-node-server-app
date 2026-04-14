import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
export default function QuestionsDao() {
  function findAllQuestions(quizId) {
    return model.find({ quiz: quizId });
  }
  function createQuestion(question, quizId) {
    const newQuestion = { ...question, _id: uuidv4(), quiz: quizId };
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
