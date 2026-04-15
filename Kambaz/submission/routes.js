import SubmissionDao from "./dao.js";
export default function SubmissionRoutes(app) {
  const dao = SubmissionDao();
  const findAllSubmissionsByUser = async (req, res) => {
    const { quizId, userId } = req.params;
    const submissions = await dao.findAllSubmissionsByUser(quizId, userId);
    res.send(submissions);
  }
  const createSubmission = async (req, res) => {
    const { quizId, userId } = req.params;
    const newSubmission = await dao.createSubmission(req.body, quizId, userId);
    res.json(newSubmission);
  };
  const deleteSubmission = async (req, res) => {
    const { submissionId, userId } = req.params;
    const status = await dao.deleteSubmission(submissionId, userId);
    res.send(status);
  }
  app.get("/api/courses/:courseId/quizzes/:quizId/submissions/user/:userId", findAllSubmissionsByUser);
  app.post("/api/courses/:courseId/quizzes/:quizId/submissions/user/:userId", createSubmission);
  app.delete("/api/courses/:courseId/quizzes/:quizId/submissions/:submissionId/user/:userId", deleteSubmission);
}
