import EnrollmentDao from "../enrollments/dao.js";
export default function EnrollmentRoutes(app, db) {
  const dao = EnrollmentDao(db);
  const showAllEnrollments = (req, res) => {
    const userId = req.session?.currentUser?._id;
    const enrollments = dao.showAllEnrollments(userId);
    res.json(enrollments);
  }
  const enrollInCourse = (req, res) => {
    const { courseId } = req.params;
    const userId = req.session?.currentUser?._id;
    const enroll = dao.enrollUserInCourse(userId, courseId);
    res.json(enroll);
  }
  const unenrollInCourse = (req, res) => {
    const { courseId } = req.params;
    const unenroll = dao.unenrollUserInCourse(courseId);
    res.send(unenroll);
  }
  app.get("/api/enrollments", showAllEnrollments);
  app.post("/api/enrollments/:courseId", enrollInCourse);
  app.delete("/api/enrollments/:courseId", unenrollInCourse);
}