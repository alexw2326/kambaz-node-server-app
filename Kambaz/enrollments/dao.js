import model from "./model.js";
export default function EnrollmentsDao() {
  async function findCoursesForUser(userId) {
    return model.find({ user: userId }, { user: 1, course: 1, _id: 0 });
  }
  async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
  }
  async function enrollUserInCourse(userId, courseId) {
    return model.create({
      user: userId,
      course: courseId,
      _id: `${userId}-${courseId}`,
    });
  }
  async function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
  }
  async function unenrollAllUsersFromCourse(courseId) {
    return model.deleteMany({ course: courseId });
  }
  return {
    findCoursesForUser,
    findUsersForCourse,
    enrollUserInCourse,
    unenrollUserFromCourse,
    unenrollAllUsersFromCourse,
  };
}
