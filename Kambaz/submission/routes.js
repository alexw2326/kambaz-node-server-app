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
  const updateSubmission= async (req, res) => {
    const { submissionId, userId } = req.params;
    const submissionUpdates = req.body;
    const status = await dao.updateSubmission(submissionId, submissionUpdates);
    res.send(status);
  }
  app.get("/api/courses/:courseId/quizzes/:quizId/submissions/user/:userid", findAllSubmissionsByUser);
  app.post("/api/courses/:courseId/quizzes/:quizId/submissions/user/:userid", createSubmission);
  app.delete("/api/courses/:courseId/quizzes/:quizId/submissions/:submissionId/user/:userid", deleteSubmission);
  app.put("/api/courses/:courseId/quizzes/:quizId/questions/submissions/:submissionId/user/:userid", updateSubmission);
}
