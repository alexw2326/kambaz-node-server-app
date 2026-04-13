import QuizzesDao from "./dao.js";
export default function QuizRoutes(app) {
  const dao = QuizzesDao();
  const findAllQuizzes = async (req, res) => {
    const { name } = req.query;
    const { courseId } = req.params;
    if (name) {
        const quizzes = await dao.findQuizByName(name);
        res.send(quizzes);
    } else {
        const quizzes = await dao.findAllQuizzes(courseId);
        res.send(quizzes);
    }
  }
  const createQuiz = async (req, res) => {
    const { courseId } = req.params;
    const newQuiz = await dao.createQuiz(req.body, courseId);
    res.json(newQuiz);
  };
  const deleteQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.deleteQuiz(quizId);
    res.send(status);
  }
  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await dao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  }
  const findQuizById = async (req, res) => {
    const { quizId } = req.params;
    const quiz = await dao.findQuizById(quizId);
    res.send(quiz);
 }
  app.get("/api/courses/:courseId/quizzes", findAllQuizzes);
  app.post("/api/courses/:courseId/quizzes", createQuiz);
  app.delete("/api/courses/:courseId/quizzes/:quizId", deleteQuiz);
  app.put("/api/courses/:courseId/quizzes/:quizId", updateQuiz);
  app.get("/api/courses/:courseId/quizzes/:quizId", findQuizById);
}
