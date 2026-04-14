import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
import questionModel from "../questions/model.js";
export default function QuizzesDao() {
  function findAllQuizzes(courseId) {
    return model.find({ course: courseId });
  }
  function createQuiz(quiz, courseId) {
    const newQuiz = { ...quiz, _id: uuidv4(), course: courseId };
    return model.create(newQuiz);
  }
  async function deleteQuiz(quizId) {
    const quiz = await model.findOne({ _id: quizId });
    if (quiz && quiz.questions && quiz.questions.length > 0) {
        await questionModel.deleteMany({ _id: { $in: quiz.questions } });
    }
    return model.deleteOne({ _id: quizId });
  }
  function updateQuiz(quizId, quizUpdates) {
    return model.updateOne({ _id: quizId}, { $set: quizUpdates });
  }
  function findQuizByName(quizName) {
    return model.find({ title: { $regex: quizName, $options: "i" } });
  }
  function findQuizById(quizId) {
    return model.findOne({ _id: quizId });
 }
  return { findAllQuizzes, 
    createQuiz,
    deleteQuiz,
    updateQuiz,
    findQuizByName,
    findQuizById,
  };
}
