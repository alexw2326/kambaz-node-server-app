import EnrollmentDao from "../enrollments/dao.js";
export default function EnrollmentRoutes(app) {
  const dao = EnrollmentDao();
  const showAllEnrollments = async (req, res) => {
    const userId = req.session?.currentUser?._id;
    const enrollments = await dao.findCoursesForUser(userId);
    res.json(enrollments);
  }
  const enrollInCourse = async (req, res) => {
    const { userId, courseId } = req.params;
    const enrollment = await dao.enrollUserInCourse(userId, courseId);
    res.json(enrollment);
  }
  const unenrollFromCourse = async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await dao.unenrollUserFromCourse(userId, courseId);
    res.json(status);
  }
  app.get("/api/enrollments", showAllEnrollments);
  app.post("/api/users/:userId/courses/:courseId", enrollInCourse);
  app.delete("/api/users/:userId/courses/:courseId", unenrollFromCourse);
}