import QuizzesDao from "./dao.js";
export default function QuizRoutes(app) {
  const dao = QuizzesDao();
  const findAllQuizzes = async (req, res) => {
    const quizzes = await dao.findAllQuizzes();
    res.send(quizzes);
  }
  const createQuiz = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const newQuiz = await dao.createQuiz(req.body);
    res.json(newQuiz);
  };
  const deleteQuiz = async (req, res) => {
    const { quizId } = req.params;
    await enrollmentsDao.unenrollAllUsersFromCourse(quizId);
    const status = await dao.deleteQuiz(quizId);
    res.send(status);
  }
  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await dao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  }
  app.get("/api/courses/:courseId/quizzes", findAllQuizzes);
  app.post("/api/courses/:courseId/quizzes", createQuiz);
  app.delete("/api/courses/:courseId/quizzes/:quizId", deleteQuiz);
  app.put("/api/courses/:courseId/quizzes/:quizId", updateQuiz);
}
