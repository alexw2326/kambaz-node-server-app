import QuestionDao from "./dao.js";
export default function QuestionsRoutes(app) {
  const dao = QuestionsDao();
  const findAllQuestions = async (req, res) => {
    const questions = await dao.findAllQuestions();
    res.send(questions);
  }
  const createQuestion = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const newQuestion = await dao.createQuestion(req.body);
    res.json(newQuestion);
  };
  const deleteQuestion = async (req, res) => {
    const { questionId } = req.params;
    const status = await dao.deleteQuestion(questionId);
    res.send(status);
  }
  const updateQuestion = async (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    const status = await dao.updateQuestion(questionId, questionUpdates);
    res.send(status);
  }
  app.get("/api/courses/:courseId/quizzes/:quizId/questions", findAllQuestions);
  app.post("/api/courses/:courseId/quizzes/:quizId/questions", createQuestion);
  app.delete("/api/courses/:courseId/quizzes/:quizId/questions/:questionId", deleteQuestion);
  app.put("/api/courses/:courseId/quizzes/:quizId/questions/:questionId", updateQuestion);
}
