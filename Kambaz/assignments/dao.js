import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export default function AssignmentsDao() {
  async function findAllAssignments() {
    return await model.find({}, { title: 1, course: 1 });
  }
  async function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    return await model.create(newAssignment);
  }
  async function deleteAssignment(assignmentId) {
    return await model.deleteOne({ _id: assignmentId });
  }
  async function updateAssignment(assignmentId, assignmentUpdates) {
    return await model.findByIdAndUpdate(assignmentId, assignmentUpdates, { new: true });
  }
  return { 
    findAllAssignments,
    createAssignment,
    deleteAssignment,
    updateAssignment
  };
}
