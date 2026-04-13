import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
export default function QuizzesDao() {
  function findAllQuizzes() {
    return model.find({});
  }
  function createQuiz(quiz) {
    const newQuiz = { ...quiz, _id: uuidv4() };
    return model.create(newQuiz);
  }
  function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId });
  }
  function updateQuiz(quizId, quizUpdates) {
    return model.updateOne({ _id: quizId}, { $set: quizUpdates });
  }
  function findQuizByName(quizName) {
    return model.find({ title: { $regex: quizName, $options: "i" } });
  }
  return { findAllQuizzes, 
    createQuiz,
    deleteQuiz,
    updateQuiz,
    findQuizByName,
  };
}
